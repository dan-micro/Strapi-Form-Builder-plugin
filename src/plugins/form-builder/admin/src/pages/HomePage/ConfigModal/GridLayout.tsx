import React from 'react';

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { IconButton, MenuItem, Paper, Select, Stack, Typography } from '@mui/material';
import { sum } from 'lodash-es';

const GRID_COLUMNS_CONVENTION = 12;

interface SelectColumnBoxProps {
  disabled: boolean;
  onSelect: (val: number) => void;
  columns: number[];
}

const SelectColumnBox = ({ disabled, onSelect, columns }: SelectColumnBoxProps) => {
  return (
    <Select
      sx={{ width: '80%' }}
      value={''}
      disabled={disabled}
      onChange={(e) => onSelect(+e.target.value)}
    >
      {new Array(GRID_COLUMNS_CONVENTION - sum(columns)).fill('').map((_, idx) => (
        <MenuItem key={idx} value={idx + 1}>
          {idx + 1}
        </MenuItem>
      ))}
    </Select>
  );
};
interface GridLayoutProps {
  columns: number[];
  onChange: (columns: number[]) => void;
}
export const GridLayout = ({ columns, onChange }: GridLayoutProps) => {
  const selectHandler = (val: number) => onChange([...columns, val]);
  const deleteColumnHandler = (idx) => {
    const newColumns = [...columns];
    newColumns.splice(idx, 1);
    onChange(newColumns);
  };

  return (
    <Stack gap={2} sx={{ pt: 2 }}>
      {columns.map((colSize, idx) => (
        <Paper key={idx} sx={{ p: 2 }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6">
              Column {idx + 1} -- Size: {colSize}
            </Typography>
            <IconButton color="error" onClick={() => deleteColumnHandler(idx)}>
              <RemoveCircleOutlineIcon />
            </IconButton>
          </Stack>
        </Paper>
      ))}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
        sx={{ py: 3 }}
      >
        <Typography>Select Column Size:</Typography>
        <SelectColumnBox
          disabled={sum(columns) >= GRID_COLUMNS_CONVENTION}
          columns={columns}
          onSelect={selectHandler}
        />
      </Stack>
    </Stack>
  );
};
