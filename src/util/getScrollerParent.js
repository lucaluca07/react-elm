const getScrollParent = (node) => {
    if(!node){
        return document.documentElement
    }

    let parent = node ;
    const overflowReg = /(scroll|auto)/
    while(parent){
        if(!parent.parentNode){
            return document.documentElement 
        }
        const {overflow} = window.getComputedStyle(parent)
        if(overflowReg.test(overflow)){
            return parent
        }
        parent = parent.parentNode
    }
    return document.documentElement
}

export default getScrollParent