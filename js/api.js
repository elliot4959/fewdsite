"use strict";

(function () {
  // creates a new object called xhr
  // this will handle the API call
  let xhr = new XMLHttpRequest();
  // get elements to print data
  let tempOutput = document.getElementById("track-temp");
  let weatherOutput = document.getElementById("track-weather");
  
  // construct base for request URL
  let baseURL = "https://api.worldweatheronline.com/premium/v1/weather.ashx?key=6e5bf6c426e3464d831142025172411" +
                "&q=Silverstone,UnitedKingdom" +
                "&num_of_days=1" +
                "&fx=no" +
                "&mca=no" +
                "&format=json";

  function gatherData(data) {
    // Get the data from the API call
    let currentCondition = data.data.current_condition[0];
    tempOutput.innerHTML = currentCondition.temp_C + "ºC";
    weatherOutput.innerHTML = currentCondition.weatherDesc[0].value;
  }

  // open a connection to the API
  console.log(baseURL);
  xhr.open("GET", baseURL, true);
  // send the request
  xhr.send();
  // if response OK, handle data
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // parse the JSON
      let response = JSON.parse(xhr.responseText);
      // deal with parsed JSON data
      gatherData(response);
    }
  };

}());
