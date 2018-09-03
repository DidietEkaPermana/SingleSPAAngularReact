import { registerApplication, start } from 'single-spa';

registerApplication(
    'angularJSApp',
    () => import('./src/ng1/core-ui.app.js'),
    //pathPrefix('/ng1')
    () => true
    // location.pathname.includes('/ng1/')
);

start();

function pathPrefix(prefix){
    return function(location){
        return location.pathname.startsWith(`${prefix}`);
        // return location.pathname.includes(`${prefix}`);
    }
}