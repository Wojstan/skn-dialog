const homeData = require("./data/homeData.json");
const aboutData = require("./data/aboutData.json");
const joinData = require("./data/joinData.json");

export function getHomeData() {
  return homeData;
}

export function getAboutData() {
  return aboutData;
}

export function getJoinData() {
  return joinData;
}
