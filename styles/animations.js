
const animations = {
    'neo-transition': {property: 'transitionProperty', value: 'color, background-color, border-color, opacity, box-shadow, transform'},
    'neo-transition-colors': {property: 'transitionProperty', value: 'color, background-color, border-color'},
    'neo-transition-opacity': {property: 'transitionProperty', value: 'opacity'},
    'neo-transition-transform': {property: 'transitionProperty', value: 'transform'},

    'neo-duration-75': {property: 'transitionDuration', value: '75ms'},
    'neo-duration-150': {property: 'transitionDuration', value: '150ms'},
    'neo-duration-300': {property: 'transitionDuration', value: '300ms'},
    'neo-duration-500': {property: 'transitionDuration', value: '500ms'},
    'neo-duration-1000': {property: 'transitionDuration', value: '1000ms'},
    'neo-duration-bullet-time': {property: 'transitionDuration', value: '1500ms'},

    'neo-ease-linear': {property: 'transitionTimingFunction', value: 'linear'},
    'neo-ease-in': {property: 'transitionTimingFunction', value: 'cubic-bezier(0.4, 0, 1, 1)'},
    'neo-ease-out': {property: 'transitionTimingFunction', value: 'cubic-bezier(0, 0, 0.2, 1)'},
    'neo-ease-in-out': {property: 'transitionTimingFunction', value: 'cubic-bezier(0.4, 0, 0.2, 1)'},
    'neo-ease-dodge': {property: 'transitionTimingFunction', value: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'},

    'neo-scale-90': {property: 'transform', value: 'scale(0.9)'},
    'neo-scale-95': {property: 'transform', value: 'scale(0.95)'},
    'neo-scale-100': {property: 'transform', value: 'scale(1)'},
    'neo-scale-105': {property: 'transform', value: 'scale(1.05)'},
    'neo-scale-110': {property: 'transform', value: 'scale(1.1)'},

    'neo-translate-y-up': {property: 'transform', value: 'translateY(-0.5rem)'},
    'neo-translate-y-down': {property: 'transform', value: 'translateY(0.5rem)'},

    'neo-opacity-0': {property: 'opacity', value: '0'},
    'neo-opacity-25': {property: 'opacity', value: '0.25'},
    'neo-opacity-50': {property: 'opacity', value: '0.5'},
    'neo-opacity-75': {property: 'opacity', value: '0.75'},
    'neo-opacity-100': {property: 'opacity', value: '1'}
};

export default animations;