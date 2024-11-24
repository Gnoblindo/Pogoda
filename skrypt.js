var przy1 = document.getElementById('Pogoda');
var Wynik = document.getElementById("Wynik")
przy1.addEventListener("click", fetchData());
function fetchData() {
	fetch('http://api.weatherapi.com/v1/search.json?key=<12c455b685114ca09cd163336242411>&q=Zabrze', {
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
          Wynik.innerHTML(data);
        })
        .catch(error => {
            Wynik.innerHTML=("Błąd", error);
        });
    }