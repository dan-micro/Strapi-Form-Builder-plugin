import React from 'react';

import { Grid, Typography } from '@mui/material';
import { useAtomValue } from 'jotai';
import { isEmpty } from 'lodash-es';

import { ConfigFormModalWrapper } from './ConfigModal/ConfigFormModalWrapper';
import { GridLayout } from './ConfigModal/GridLayout';
import { useConfigFormModal } from './ConfigModal/useConfigFormModal';
import { WidgetTypeOption } from './ConfigModal/WidgetTypeOption';
import { formBuildModalAtom } from './store';

export const ConfigModal = () => {
  const formBuildModal = useAtomValue(formBuildModalAtom);
  const config = useConfigFormModal();

  if (formBuildModal.interfaceComponent === 'grid') {
    return (
      <ConfigFormModalWrapper config={config}>
        <GridLayout
          columns={config.options.columns ?? []}
          onChange={config.gridLayoutChangeHandler}
        />
      </ConfigFormModalWrapper>
    );
  }

  if (config.dataFetchingStatus.isLoading) {
    return <>Loading...</>;
  }

  if (isEmpty(config.optionsList)) {
    return (
      <ConfigFormModalWrapper withTitle config={config}>
        <Typography>No Options To Configure</Typography>
      </ConfigFormModalWrapper>
    );
  }

  return (
    <ConfigFormModalWrapper withTitle config={config}>
      <Grid container gap={2}>
        {(config.optionsList ?? []).map((option, idx) => (
          <Grid key={idx} item sm={option.attributes.type === 'boolean' ? 2.8 : 5.8}>
            <WidgetTypeOption
              key={option.id}
              {...option.attributes}
              value={config.options[option.attributes.name]}
              defaultValue={formBuildModal?.predefinedValues?.[option.attributes.name]}
              onChange={(val) =>
                config.widgetTypeOptionChangeHandler(option.attributes.name, val)
              }
            />
          </Grid>
        ))}
      </Grid>
    </ConfigFormModalWrapper>
  );
};
