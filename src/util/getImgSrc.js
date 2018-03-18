const getImgSrc = (src) => {
    let url
    const hash = [src.slice(0,1),src.slice(1,3),src.slice(3)].join('/')
    if(src.slice(-3) === "png"){
        url = `http://fuss10.elemecdn.com/${hash}.png%3FimageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/`
    }else{
        url = `http://fuss10.elemecdn.com/${hash}.jpeg%3FimageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/`
    }
    return url
}

export default getImgSrc