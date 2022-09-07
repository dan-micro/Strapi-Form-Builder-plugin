import React, { useRef, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  ButtonBase,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material';
import { isEmpty } from 'lodash-es';

import { FormConfig } from '../../store';

const colorOptions = ['primary', 'secondary', 'error', 'info', 'success', 'warning'];

// TODO: `Rounded` & `Square` & `Use-chips` & `Multiple` <== these props left will add in the next iteration.
type FileProps = FormConfig;
export const File = (props: FileProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [attachment, setAttachment] = useState<Record<string, any> | null>(null);
  const handleChange = (event: any) => {
    const files = Array.from(event.target.files);
    const [file] = files;
    setAttachment(file as any);
  };

  const EndAdornment = (
    <InputAdornment position="end">
      <IconButton onClick={() => setAttachment(null)} edge="end" size="small">
        <CloseIcon />
      </IconButton>
    </InputAdornment>
  );

  return (
    <FormControl>
      <Box>
        <TextField
          margin="normal"
          variant={
            props.options.filled
              ? 'filled'
              : props.options.outlined
              ? 'outlined'
              : 'standard'
          }
          fullWidth
          size={props.options.dense ? 'small' : 'medium'}
          color={
            colorOptions.includes(props.options.color) ? props.options.color : 'primary'
          }
          disabled
          label={props.options.label}
          value={attachment?.name || ''}
          InputProps={{
            endAdornment: (
              <Stack direction="row" gap={2} alignItems="center">
                {props.options.clearable && !isEmpty(attachment) && EndAdornment}
              </Stack>
            ),
          }}
        />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ pt: 0.5 }}
        >
          {props.options.hint && <FormHelperText>{props.options.hint}</FormHelperText>}
        </Stack>
      </Box>
      <ButtonBase
        component="label"
        onKeyDown={(e) => e.keyCode === 32 && ref.current?.click()}
      >
        <input ref={ref} type="file" accept="*" hidden onChange={handleChange} />
      </ButtonBase>
    </FormControl>
  );
};
