import React from 'react';

import { Stack, Checkbox, Typography } from '@mui/material';

import { WidgetTypeOptionProps } from '../WidgetTypeOption';

import { OptionWrapper } from './OptionWrapper';

type BooleanOptionProps = WidgetTypeOptionProps;
export const BooleanOption = (props: BooleanOptionProps) => {
  return (
    <OptionWrapper label={props.name}>
      <Checkbox
        defaultChecked={props.defaultValue}
        checked={props.value}
        onChange={(_, checked) => props.onChange(checked)}
      />
    </OptionWrapper>
  );
};
