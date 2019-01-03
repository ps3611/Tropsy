//https://www.flashscore.com/tennis/rankings/atp/
var links = [];
var l = document.links;
for(var i=0; i<l.length; i++) links.push(l[i].href);
playerLinks = links.filter(link => link.includes('player')).slice(0,200);
playerLinks;

var nameDiv = document.getElementsByClassName("team-name");
var name = nameDiv[0]['innerText'].trim();
var imgDiv = document.getElementsByClassName("team-logo");
var imgExt = imgDiv[0]['style']['backgroundImage']
var imgUrl = "https://www.flashscore.com" + imgExt.substring(imgExt.indexOf('"') + 1,imgExt.lastIndexOf('"'));
imageDictionary[name] = imgUrl;
