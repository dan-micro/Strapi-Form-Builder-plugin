/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';

import { NotFound } from '@strapi/helper-plugin';
import gsap from 'gsap';
import Draggable from 'gsap/dist/Draggable';
import { Switch, Route } from 'react-router-dom';

import { Providers } from '../../lib/Providers';
import pluginId from '../../pluginId';
import HomePage from '../HomePage';

import '@fontsource/inter';

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
