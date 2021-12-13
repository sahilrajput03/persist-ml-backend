const https = require("https");
const fs = require("fs");
// src: https://www.section.io/engineering-education/push-notification-in-nodejs-using-service-worker/

//Express
const express = require("express");
const port = 3001;

//web-push
const webpush = require("web-push");

//body-parser
const bodyParser = require("body-parser");

//path
const path = require("path");

//using express
let app = express();

//using bodyparser
app.use(bodyParser.json());

//set the static path
app.use(express.static(path.join(__dirname, "client")));

//storing the keys in variables
const publicVapidKey =
  "BFugdzk0UG7lreiOS3NFxUTmlDJbfBMVmP1awqUO2bxKSeG9Svj2n-yUQv1PUOEdtGiSDQ2cHJLunHts0_zNB5I";
const privateVapidKey = "ebJBIsTcClTBumIXHqZ9b-BS-RnU9Gf5iuBpGv42Vnw";

webpush.setVapidDetails(
  "mailto:mercymeave@section.com",
  publicVapidKey,
  privateVapidKey
);

//subscribe route
app.post("/subscribe", async (req, res) => {
  // console.log(req);
  //get push subscription object from the request
  const subscription = req.body;
  // console.log("subscr", subscription);

  //send status 201 for the request
  res.status(201).json({});

  //create paylod: specified the detals of the push notification
  const payload = JSON.stringify({
    title: "Today is too big!!!",
    body: "This is body sent from the server.",
    image: "img.jpg",
    icon: "img.jpg", // icon
  });

  //pass the object into sendNotification fucntion and catch any error
  console.log("queued notification...");
  await new Promise((res) => {
    setTimeout(() => {
      res();
    }, 3 * 1_000);
    // }, 5 * 60 * 1_000);
  }); // 10 seconds.
  console.log("send notification executed...");
  webpush
    .sendNotification(subscription, payload)
    .catch((err) => console.error(err));

  // for (let i = 0; i < 10; i++) {
  //   i++;
  // }
});

// app = https.createServer(
//   {
//     key: fs.readFileSync("sslcert/server.key", "utf8"),
//     cert: fs.readFileSync("sslcert/server.crt", "utf8"),
//     passphrase: "abcd",
//   },
//   app
// );
// ! If you want to run without https then simply comment above line ~Sahil.

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
