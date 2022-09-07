import React from 'react';

import { Box } from '@mui/material';

import { BooleanOption } from './WidgetTypeOption/BooleanOption';
import { EnumOption } from './WidgetTypeOption/EnumOption';
import { NumberOption } from './WidgetTypeOption/NumberOption';
import { StringOption } from './WidgetTypeOption/StringOption';

export interface WidgetTypeOptionProps {
  name: string;
  type: 'string' | 'boolean' | 'number' | 'enum';
  defaultValue: any;
  onChange: (val: any) => void;
  value: any;
  values: any;
}

export const WidgetTypeOption = (props: WidgetTypeOptionProps) => {
  let OptionCmp = (_props: any) => <></>;
  switch (props.type) {
    case 'string':
      OptionCmp = StringOption;
      break;
    case 'boolean':
      OptionCmp = BooleanOption;
      break;
    case 'number':
      OptionCmp = NumberOption;
      break;
    case 'enum':
      OptionCmp = EnumOption;
      break;
  }

  return (
    <Box sx={{ py: 2 }}>
      <OptionCmp {...props} />
    </Box>
  );
};
