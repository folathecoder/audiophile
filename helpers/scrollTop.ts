//TODO: Function that scrolls page to the top when triggered

const scrollTop = ():void => {
  document.getElementById("__next").scrollIntoView({ behavior: "smooth" });
};

export default scrollTop;
