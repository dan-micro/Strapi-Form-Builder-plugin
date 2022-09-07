import React from 'react';

import { Grid as MuiGrid, Typography } from '@mui/material';
import { isNumber } from 'lodash-es';

import { FormConfig } from '../../store';

import { widgetTypeToWidgetCmp } from './widgetTypeToWidgetCmp';

const gridGap = 0;

type GridProps = FormConfig;

export const Grid = (props: GridProps) => {
  return (
    <MuiGrid container gap={gridGap}>
      {props.options.columns.map((val, idx) => {
        if (!isNumber(val)) {
          const gridSize = +val[0];
          const cmpProps = val[1];
          const WidgetCmp = widgetTypeToWidgetCmp[cmpProps.interfaceComponent];
          const id = `${props.idx}_${idx}`;
          return (
            <MuiGrid
              key={id}
              sx={{
                p: 2,
                // background: "rgb(240,240,255)",
                '&>*': { width: '100%' },
              }}
              ref={props.draggableRefs}
              id={id}
              item
              sm={gridSize - gridGap}
            >
              <WidgetCmp {...cmpProps} />
            </MuiGrid>
          );
        }

        return (
          <MuiGrid
            key={props.idx}
            sx={{
              p: 2,
              background: 'rgb(240,240,255)',
              color: '#000000',
              '&:not(&:last-child)': {
                borderRight: '3px solid #000000',
              },
            }}
            ref={props.draggableRefs}
            id={`${props.idx}_${idx}`}
            item
            sm={val - gridGap}
          >
            <Typography textAlign="center">[Size - {val}]</Typography>
          </MuiGrid>
        );
      })}
    </MuiGrid>
  );
};
