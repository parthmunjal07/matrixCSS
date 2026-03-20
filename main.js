import parseDOM from "./core/parser.js"

export const initMatrix = () => {
    document.addEventListener('DOMContentLoaded', parseDOM);
};

document.addEventListener('DOMContentLoaded', parseDOM() )