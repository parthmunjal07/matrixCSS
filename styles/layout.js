// src/styles/layout.js

const layout = {
    'neo-block': {property: 'display', value: 'block'},
    'neo-inline-block': {property: 'display', value: 'inline-block'},
    'neo-inline': {property: 'display', value: 'inline'},
    'neo-hidden': {property: 'display', value: 'none'},

    'neo-static': {property: 'position', value: 'static'},
    'neo-relative': {property: 'position', value: 'relative'},
    'neo-absolute': {property: 'position', value: 'absolute'},
    'neo-fixed': {property: 'position', value: 'fixed'},
    'neo-sticky': {property: 'position', value: 'sticky'},

    'neo-top-0': {property: 'top', value: '0px'},
    'neo-right-0': {property: 'right', value: '0px'},
    'neo-bottom-0': {property: 'bottom', value: '0px'},
    'neo-left-0': {property: 'left', value: '0px'},
    'neo-inset-0': {property: 'inset', value: '0px'}, 

    'neo-z-0': {property: 'zIndex', value: '0'},
    'neo-z-10': {property: 'zIndex', value: '10'},
    'neo-z-50': {property: 'zIndex', value: '50'},
    'neo-z-matrix': {property: 'zIndex', value: '9999'}
};

export default layout;