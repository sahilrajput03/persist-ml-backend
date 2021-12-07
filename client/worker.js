self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log("-service-worker-");
  console.log("title:", data.title);
  console.log("title:", data);
  // If you use alert, you would see that it'll throw error in th console.

  // alert("title: " + data.title);
  // alert("body: " + data.body);

  self.registration.showNotification(
    data.title, // title of the notification
    {
      ...data,
      // body: "Have nice day1 ~ Sahil Rajput", //the body of the push notification
      // image: "img.jpg",
      // icon: "img.jpg", // icon
    }
  );
});
