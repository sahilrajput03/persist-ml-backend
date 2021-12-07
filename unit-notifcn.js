//web-push
const webpush = require("web-push");

//storing the keys in variables
const publicVapidKey =
  "BFugdzk0UG7lreiOS3NFxUTmlDJbfBMVmP1awqUO2bxKSeG9Svj2n-yUQv1PUOEdtGiSDQ2cHJLunHts0_zNB5I";
const privateVapidKey = "ebJBIsTcClTBumIXHqZ9b-BS-RnU9Gf5iuBpGv42Vnw";

const subscriptionD = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/c1zWkBM6v7I:APA91bE8GuF7KrN2x1Cwwx3aoXD-W4UPhyl_H-ZZ5Isi4AqzkrPWN7423e4W1rm06aEZlt4eksD7Z4DbNz3lDwIdcwHr-MeGr6hrp0Zh_VdM1AnyMDJOhER0FJ2WNd_SKsYdMLS24TDr",
  expirationTime: null,
  keys: {
    p256dh:
      "BH_RDlFzOeySN3B1J-MdvCjX8QQBXPs-Daw51XnPBf_wWEobE8q5FcHPSS-3N_9nQl-rZBDXw7TU8V7w03SubRM",
    auth: "JVvv8gp1zZI9D4oPG6P18g",
  },
};
const subscriptionM = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cbjvh_rYgtQ:APA91bEcEQUXI1Lqm-4lJyVA5Tq44Wzj9jE46uAm2zDATUsGfq-YuFcBCwbQOKYvJND5yCaEwquxxlF6nhGJjjOf4u9urNesfVwBGpyKMLaNBey2B8GCpNzFW9uUmgt6pOXzzWsxpSdm",
  expirationTime: null,
  keys: {
    p256dh:
      "BKlaak4nea4gwfqM-kC6Q5NQeauNLZwG9oPGwzlG74sJvZ6Q7PikZ39xay7aqHypy8jkfSgwqhU-S1LJACn3ntw",
    auth: "uOsz_G_a0C1VbdP6520hIw",
  },
};

webpush.setVapidDetails(
  "mailto:mercymeave@section.com",
  publicVapidKey,
  privateVapidKey
);

const payload = JSON.stringify({
  title: "Static Random Image", // this is must or you give empty string.
  body: "Get the same random image every time based on a seed, by adding /seed/{seed} to the start of the url.",
  // image: "img2.jpg",// these type of images doesn't work good when url is send from image/icon path is sent from server side. Idky why.. but anyhow the fullpath urls work very amazingly ~sahil.
  // image:
  //   "https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
  icon: "https://picsum.photos/id/237/536/354",
  /**
   * Best combination of payloads is to use very good icon so the user don't just try to magnify the screen to see the icon.
   * You must only body or image coz either one of these should be main part of the notification IMO ~ sahil.
   */
});

webpush
  .sendNotification(subscriptionM, payload)
  .catch((err) => console.error(err));
