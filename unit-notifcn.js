//web-push
const webpush = require("web-push");

//storing the keys in variables
const publicVapidKey =
  "BFugdzk0UG7lreiOS3NFxUTmlDJbfBMVmP1awqUO2bxKSeG9Svj2n-yUQv1PUOEdtGiSDQ2cHJLunHts0_zNB5I";
const privateVapidKey = "ebJBIsTcClTBumIXHqZ9b-BS-RnU9Gf5iuBpGv42Vnw";

const subscriptionD = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/eMZzZMJRfoI:APA91bG_0XZT96WdD6MEMNcAoSIPLn12RzAR8AGrbFa3BJaV2JsdlSxGfYmfzLWqih10pOhMcbL6a3kxUFIhv7eElNMitMxo1kBRoNTMcfVfm2RgmKwvB2zzOAxjoxroIk1R4Q0aoPUN",
  expirationTime: null,
  keys: {
    p256dh:
      "BP67rZ5lKxnn78GqF_u-1wMp4R8jZqj5tQAZ5EkaliBG4bmBO-SzgmsQCUOGxL2g_nSd8dJXokaQjnR1uljYuos",
    auth: "QmrV3vZIYZPnV-_OtQXRqw",
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

//? subscritpion docs: https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription
webpush
  .sendNotification(subscriptionD, payload)
  .catch((err) => console.error(err));
