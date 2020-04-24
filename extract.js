const fs = require("fs");

var profile = process.argv.slice(2);
profile = JSON.stringify(profile);

var profile = profile.split("[").join("");
var profile = profile.split("]").join("");
var profile = profile.split('"').join("");
var profile = profile.split("'").join("");


for (var x = 1; x <= 6; x++) {
  console.log("\n Writing " + x + " of 6\n\n");

  for (var i = 1; i <= 10; i++) {
    var json = require("./TEMP__DUMP/List_" + profile + x + "--" + i + ".json");
    var emails = JSON.stringify(json);
    var emailsArray;

    function extractEmails(emails) {
      emailsArray =
        "'" + emails.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+com)/gi) + "'";

      var emailsArray = emailsArray.split(",").join("\n");
      var emailsArray = emailsArray.split('"').join("\n");
      var emailsArray = emailsArray.split("'").join("");
      var emailsArray = emailsArray.split("[").join("");
      var emailsArray = emailsArray.split("]").join("");

      return emailsArray;
    }

    if (extractEmails(emails) != "null") {
      console.log(extractEmails(emails));
      fs.writeFile(
        "./TEMP__DUMP/List_" + profile + x + "--" + i + ".txt",
        extractEmails(emails),
        (err) => {
          // In case of a error throw err.
          if (err) throw err;
        }
      );
    }
  }
}

console.log("\n\n Writing Complete!");
