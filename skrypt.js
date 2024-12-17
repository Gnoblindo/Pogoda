function sprawdzMiasto(){
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
    if(data.length == 0){
      wyswietlBlad("Nieznane miasto, wpisz ponownie");
    }
    else{
      wyswietlBlad("");
      wyswietlDaneMiasta();
    }
  })
  .catch(error => {
    wyswietlBlad("Błąd: " + error);
  })
}
function wyswietlDaneMiasta() {
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
          document.getElementById("temp").innerHTML = "Temperatura: " + data.current.temp_c + "°C";
          document.getElementById("wiatr").innerHTML = "Prędkość wiatru: " + data.current.wind_kph + "km/h";
          document.getElementById("text").innerHTML = "Niebo:" + data.current.condition.text;
          document.getElementById("ikona").style.display = "inline-block";
          document.getElementById("ikona").src = "https:" + data.current.condition.icon;          
        })
        .catch(error => {
          wyswietlBlad("Błąd: " + error);
        });
    }

function wyswietlBlad(tekstBledu){
  document.getElementById("blad").innerHTML=tekstBledu;
  document.getElementById("temp").innerHTML = "";
  document.getElementById("wiatr").innerHTML = "";
  document.getElementById("text").innerHTML = ""; 
  document.getElementById("ikona").style.display = "none";
}