const getImgSrc = (src,size=80) => {
  let url;
  const hash = [src.slice(0, 1), src.slice(1, 3), src.slice(3)].join("/");
  if (src.slice(-3) === "png") {
    url = `http://fuss10.elemecdn.com/${hash}.png%3FimageMogr/format/webp/thumbnail/!${size}x${size}r/gravity/Center/crop/${size}x${size}/`;
  } else {
    url = `http://fuss10.elemecdn.com/${hash}.jpeg%3FimageMogr/format/webp/thumbnail/!${size}x${size}r/gravity/Center/crop/${size}x${size}/`;
  }
  return url;
};

export default getImgSrc;
