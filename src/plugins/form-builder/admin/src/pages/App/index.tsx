/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from "react";
import { Switch, Route } from "react-router-dom";
import { NotFound } from "@strapi/helper-plugin";
import pluginId from "../../pluginId";
import HomePage from "../HomePage";
import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/material";
import { theme } from "./theme";

const App: React.VoidFunctionComponent = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
          <Route component={NotFound} />
        </Switch>
      </ThemeProvider>
    </div>
  );
};

export default App;
