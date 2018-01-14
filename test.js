var fs = require("fs");
var https = require("https");

fs.writeFile(__dirname + "/index.html","<h1>Html is amazing</h1>",function(error){
   if(error){
      return console.log(error);
   }
   else{
      return console.log("congrats");
   }
});

var photoLocation = "https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg";

https.get(photoLocation,function(response){
   response.pipe(fs.createWriteStream(__dirname + "/dog.jpg"));
});
