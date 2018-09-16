import singleSpaAngularJS from 'single-spa-angularjs';

const angularJsApp = singleSpaAngularJS({
    angular,
    domElementGetter: function () {
        let el = window.document.getElementById('angularjslogin-app');
        if (el) {
            // el.remove();
            while (el.firstChild) {
                el.removeChild(el.firstChild);
            }
            // window.document.body.removeChild(el);
        }

        el = window.document.getElementById('angularjs-app');
        if (!el) {
            el = window.document.createElement('div');
            el.id = 'angularjs-app';
            window.document.body.appendChild(el);
        }
        return el;
    },
    mainAngularModule: 'app',
    uiRouter: true,
    preserveGlobal: true,
})

export const bootstrap = [
    angularJsApp.bootstrap,
];

export const mount = [
    angularJsApp.mount,
];

export const unmount = [
    angularJsApp.unmount,
];