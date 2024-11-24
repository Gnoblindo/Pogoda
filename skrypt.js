function fetchData() {
	fetch('http://api.weatherapi.com/v1/current.json?key=12c455b685114ca09cd163336242411&q=Zabrze&lang=pl', {
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
          document.getElementById("Wynik1").innerHTML = "Temperatura: " + data.current.temp_c + "°C";
          document.getElementById("Wynik2").innerHTML = "Prędkość wiatru: " + data.current.wind_kph + "km/h";
          document.getElementById("Wynik3").innerHTML = "http" + data.current.icon;
        })
        .catch(error => {
          document.getElementById("Wynik1").innerHTML="Błąd" + error;
        });
    }