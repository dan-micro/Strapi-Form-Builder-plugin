import React from 'react';

import { MenuItem, Select } from '@mui/material';

import { WidgetTypeOptionProps } from '../WidgetTypeOption';

import { OptionWrapper } from './OptionWrapper';

type EnumOptionProps = WidgetTypeOptionProps;
export const EnumOption = (props: EnumOptionProps) => {
  return (
    <OptionWrapper label={props.name}>
      <Select
        fullWidth
        defaultValue={props.defaultValue}
        inputProps={{ id: props.name }}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      >
        {props.values.split(', ').map((val) => (
          <MenuItem key={val} value={val}>
            {val}
          </MenuItem>
        ))}
      </Select>
    </OptionWrapper>
  );
};
