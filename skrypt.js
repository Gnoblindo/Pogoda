function fetchData1(){
  const miasto = document.getElementById("miasto").value;
  fetch('http://api.weatherapi.com/v1/search.json?key=12c455b685114ca09cd163336242411&q=' + miasto +'&lang=pl', {
    method: 'GET',
    heathers: {
      'Content-type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Błąd sieci');
    }
    return response.json();
  })
  .then(data => {
    console.log(JSON.stringify(data));
    if(data[0] = length0){

    }
  })
  .catch(error => {
    document.getElementById("coSzukam").innerHTML="Błąd" + error;
  })
}
function fetchData2() {
  const miasto = document.getElementById("miasto").value;
	fetch('http://api.weatherapi.com/v1/current.json?key=12c455b685114ca09cd163336242411&q=' + miasto +'&lang=pl', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Błąd sieci');
          }
          return response.json();
        })
        .then(data => {
          console.log(JSON.stringify(data));
          document.getElementById("wynik1").innerHTML = "Temperatura: " + data.current.temp_c + "°C";
          document.getElementById("wynik2").innerHTML = "Prędkość wiatru: " + data.current.wind_kph + "km/h";
          document.getElementById("text").innerHTML = "Niebo:" + data.current.condition.text;
          //debugger;
          var wynik3 = document.getElementById("wynik3");
          wynik3.src = "https:" + data.current.condition.icon;
        })
        .catch(error => {
          document.getElementById("wynik1").innerHTML="Błąd" + error;
        });
    }