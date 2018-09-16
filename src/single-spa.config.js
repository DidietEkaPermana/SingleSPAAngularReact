import { registerApplication, start } from 'single-spa';

registerApplication(
    'react-app',
    () => import('./react.app'),
    hashPrefix('/react')
    // () => true
    // () => window.location.href.toString().includes('react')
);

registerApplication(
    'angularjs-app',
    () => import('./angularjs/angularjs.app.js'),
    // pathPrefix('/angularjs')
    hashPrefix('/angularjs')
    // () => window.location.href.toString().includes('angularjs')
    // () => true
);

start();

function hashPrefix(prefix) {
    return function (location) {
        return location.hash.startsWith(`#${prefix}`);
    }
}