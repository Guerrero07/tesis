importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp(
  {
    apiKey: "AIzaSyAQoN-DsMCIRDIz-dwm1UcEZ_3kdIaGBsU",
    authDomain: "cardenal-cushing.firebaseapp.com",
    projectId: "cardenal-cushing",
    storageBucket: "cardenal-cushing.appspot.com",
    messagingSenderId: "96674615258",
    appId: "1:96674615258:web:2d5b239761e93c56bcbae3"
  }
)

  const messaging =firebase.messaging();
  messaging.onBackgroundMessage(function(payload) {
    console.log('datos', payload);
    // Customize notification here
    const notificationTitle = 'Colegio Avengers';
    const notificationOptions = {
      body: 'hay un nuevo comunicado',
      icon: '../assets/Imagenes/logo.jpg'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
