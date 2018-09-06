import { registerApplication, start } from 'single-spa';

registerApplication(
    'react-app',
    () => import('./react.app'),
    // pathPrefix('/react')
    // () => true
    () => window.location.href.toString().includes('react')
);

registerApplication(
    'angularjs-app',
    () => import('./angularjs/angularjs.app.js'),
    // pathPrefix('/ng1')
    () => window.location.href.toString().includes('angularjs')
    // () => true
);

start();

function pathPrefix(prefix) {
    return function (location) {
        return location.pathname.startsWith(`${prefix}`);
    }
}