import typography from "../styles/typography";

const applyStyles = (element, styleDef) => {
    element.style[styleDef.property] = styleDef.value;
}

const parseDOM = () => {
    const elements = document.querySelectorAll('*')
    for (let i=0; i<elements.length; i++) {

        
        for (let j=0; j<elements[i].classList.length; j++){
            let currClass = elements[i].classList[j]

            if (typography.hasOwnProperty(currClass)) {
                applyStyles(elements[i], typography[currClass])
            }
            
        }
    }
}