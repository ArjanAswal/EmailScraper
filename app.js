const fs = require("fs");
const googleIt = require("google-it");

var profile = process.argv.slice(2);
profile = JSON.stringify(profile);

var profile = profile.split("[").join("");
var profile = profile.split("]").join("");
var profile = profile.split('"').join("");
var profile = profile.split("'").join("");

var term1 =
  profile +
  ' ( "@gmail.com" OR "@hotmail.com" OR "@yahoo.com") AND  site:instagram.com/';
var term2 =
  profile +
  ' ( "@gmail.com" OR "@hotmail.com" OR "@yahoo.com") AND  site:linkedin.com';
var term3 =
  profile +
  ' ( "@gmail.com" OR "@hotmail.com" OR "@yahoo.com") AND  site:facebook.com/';
var term4 =
  profile +
  ' ( "@gmail.com" OR "@hotmail.com" OR "@yahoo.com") AND  site:twitter.com/';
var term5 =
  profile +
  ' ( "@gmail.com" OR "@hotmail.com" OR "@yahoo.com") AND  site:reddit.com/';
var term6 =
  profile +
  ' ( "@gmail.com" OR "@hotmail.com" OR "@yahoo.com") AND  site:quora.com/';
var term = [term1, term2, term3, term4, term5, term6];
console.log("\n\n");
for (var x = 1; x <= 6; x++) {
  for (var i = 1; i <= 10; i++) {
    var num = Number(i * 100);
    var str = num.toString();
      googleIt({
        query: term[x - 1],
        output: "./TEMP__DUMP/List_" + profile + x + "--" + i + ".json",
        start: str,
        limit: "10000",
        // "no-display": "true",
        // disableConsole: "true",
      })
        .then((results) => {
          // access to results object here
        })
        .catch((e) => {
          // any possible errors that might have occurred (like no Internet connection)
        });
  }
}
console.log("Preparing to write.....\n");
console.log("Please Be Patient.....\n");