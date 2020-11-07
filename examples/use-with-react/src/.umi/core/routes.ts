// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/forsigner/repos/github/styli/examples/myapp/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/BasicLayout').default,
    "routes": [
      {
        "path": "/",
        "component": require('@/pages/index').default,
        "exact": true
      },
      {
        "path": "/babel-preset",
        "component": require('@/pages/babel-preset').default,
        "exact": true
      },
      {
        "path": "/jsx-pragma",
        "component": require('@/pages/jsx-pragma').default,
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
