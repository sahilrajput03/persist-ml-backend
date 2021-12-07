const publicVapidKey =
  "BFugdzk0UG7lreiOS3NFxUTmlDJbfBMVmP1awqUO2bxKSeG9Svj2n-yUQv1PUOEdtGiSDQ2cHJLunHts0_zNB5I";
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

//check if the serveice worker can work in the current browser
if ("serviceWorker" in navigator) {
  // ^^ this evaulates as false in non-secure contexts: read more about it in readme file.
  // if (true) {
  console.log("hell 1.5");
  send().catch((err) => console.error(err));
} else {
  alert(
    "Please consider switching to a secure context i.e., https based domain or using via localhost if possible or enable Insecure origins treated as secure for this domain only possible in chrome browser ~sahil."
  );
}

console.log("hell1");
//register the service worker, register our push api, send the notification
async function send() {
  console.log("hell2");
  //register service worker
  const register = await navigator.serviceWorker.register("/worker.js", {
    scope: "/",
  });

  //register push
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,

    //public vapid key
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
  });

  //Send push notification
  await fetch("/subscribe", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json",
    },
  });
}
