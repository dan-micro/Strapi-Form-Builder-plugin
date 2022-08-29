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
import { Providers } from "../../lib/Providers";
import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";

gsap.registerPlugin(Draggable);
const App: React.VoidFunctionComponent = () => {
  return (
    <div>
      <Providers>
        <Switch>
          <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
          <Route component={NotFound} />
        </Switch>
      </Providers>
    </div>
  );
};

export default App;
