import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Index from './index.js';

const reactLifeCycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Index,
    domElementGetter
});

export const bootstrap = [
    reactLifeCycles.bootstrap
];

export const mount = [
    reactLifeCycles.mount
];

export const unmount = [
    reactLifeCycles.unmount
];

function domElementGetter(){
    return document.getElementById('react-app');
};