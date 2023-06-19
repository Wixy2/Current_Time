function getCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var formattedTime = hours + ":" + minutes + ":" + seconds;
    document.getElementById("current-time").textContent = formattedTime;
  }
  
  function getCurrentDate() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var day = currentDate.getDate();
    var formattedDate = day + "/" + month + "/" + year;
    document.getElementById("date").textContent = formattedDate;
  }
  
  // Ide kell majd a Nyíregyházi időjárás API hívás és az eredmény megjelenítése
  
  setInterval(getCurrentTime, 100);
  getCurrentDate();
  