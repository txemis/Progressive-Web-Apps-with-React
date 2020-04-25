//firebase-messagig-sw.js
importScripts('https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.1/firebase-auth.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.1/firebase-messaging.js');

firebase.initializeApp({
    'messagingSenderId': '82686351080'
})

console.log(firebase.messaging());

console.log("Service worker running!");

self.addEventListener('install', function() {
    console.log('Install!');
});
self.addEventListener('activate', function() {
    console.log('Activate!');
});
self.addEventListener('fetch', function(event) {
    console.log('Fetch!', event.request);
});

