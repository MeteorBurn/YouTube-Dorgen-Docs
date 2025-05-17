import lunr from "/home/ubuntu/repos/YouTube-Dorgen-Docs/node_modules/lunr/lunr.js";
require("/home/ubuntu/repos/YouTube-Dorgen-Docs/node_modules/lunr-languages/lunr.stemmer.support.js")(lunr);
require("/home/ubuntu/repos/YouTube-Dorgen-Docs/node_modules/lunr-languages/lunr.ru.js")(lunr);
export const removeDefaultStopWordFilter = false;
export const language = ["ru"];
export const searchIndexUrl = "search-index{dir}.json?_=5341ed45";
export const searchResultLimits = 8;
export const fuzzyMatchingDistance = 1;