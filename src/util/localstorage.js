export const setItem = (key,value) => {
    if(!window.localStorage){
        console.warn("浏览器不支持localstorage");
    }else{
        const storage=window.localStorage;
        storage.setItem(key,value);
    }
}

export const getItem = (key) => {
    let value = ""
    if(!window.localStorage){
        console.warn("浏览器不支持localstorage");
    }else{
        const storage=window.localStorage;
        value=storage.getItem(key);
    } 
    return value
}