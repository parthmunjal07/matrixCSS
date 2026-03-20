import combineStyle from "./stylesCombined.js";

const applyStyles = (element, styleDef) => {
    element.style[styleDef.property] = styleDef.value;
}

const parseDOM = () => {
    const elements = document.querySelectorAll('*')
    for (let i=0; i<elements.length; i++) {

        
        for (let j=0; j<elements[i].classList.length; j++){
            let currClass = elements[i].classList[j]

            if (combineStyle.hasOwnProperty(currClass)) {
                applyStyles(elements[i], combineStyle[currClass])
            }
            
        }
    }
}

export default parseDOM