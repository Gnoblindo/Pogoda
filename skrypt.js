function fetchData() {
  const miasto = document.getElementById("miasto").value;
  if(!miasto)  {
    alert("Wpisz miasto");
    return;
  }

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
          document.getElementById("Wynik1").innerHTML = "Temperatura: " + data.current.temp_c + "°C";
          document.getElementById("Wynik2").innerHTML = "Prędkość wiatru: " + data.current.wind_kph + "km/h";
          document.getElementById("Text").innerHTML = "Niebo:" + data.current.condition.text;
          //debugger;
          var Wynik3 = document.getElementById("Wynik3");
          Wynik3.src = "https:" + data.current.condition.icon;
        })
        .catch(error => {
          document.getElementById("Wynik1").innerHTML="Błąd" + error;
        });
    }