// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChHO98tBWqftrYA-Sh9X7LCnd0myaHim4",
  authDomain: "portfolio-c12fb.firebaseapp.com",
  projectId: "portfolio-c12fb",
  storageBucket: "portfolio-c12fb.appspot.com",
  messagingSenderId: "12456292016",
  appId: "1:12456292016:web:5e694f446a8ea208d25575",
  measurementId: "G-9F9KLZPNH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

  }

  showTime();

  // Script to open and close sidebar
  function myFunction() {
    var txt;
    if (confirm(" Error! The message couldn't be delivered!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }

  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }

  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  function openNewTab() {
    // Replace with the URL of the page you want to open
    const url = "https://drive.google.com/drive/u/0/folders/1wL4Frkba7of4vlRoOOmRrhgrz32IMHVM";
    const newTab = window.open(url, "_blank");
    newTab.opener = null;
  }

  function openNewTab1() {
    // Replace with the URL of the page you want to open
    const url = "https://mail.google.com/mail/u/2/?fs=1&to=zahidullah.halimi14@gmail.com&tf=cm";
    const newTab = window.open(url, "_blank");
    newTab.opener = null;
  }


  window.dataLayer = window.dataLayer || [];
  function gtag() {dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-C6D84NEB65');
