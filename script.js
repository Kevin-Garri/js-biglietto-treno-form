//Dati di partenza
const priceKm = 0.21;
const discountYoung = 20;
const discountSenior = 40;

//Elementi del DOM
const buttoneGenera = document.getElementById('genera')
const buttonReset = document.getElementById('reset')

//Eventi
buttoneGenera.addEventListener('click', handleClickGenera)
buttonReset.addEventListener('click', handleClickReset)

//FUNZIONI
function handleClickGenera() {


  const nome = document.getElementById('nome').value;
  const km = document.getElementById('km').value;
  const eta = document.getElementById('eta').value;

  //Calcolo biglietto di Default
  const prezzo = km * priceKm;
  let prezzoFinale = prezzo;
  let tipoBiglietto = 'biglietto Standard'; //valore di default

  //calcolo eventuale sconto
  if (eta === 'minorenne') {
    prezzoFinale *= 1 - discountYoung / 100;
    tipoBiglietto = 'sconto junior'
  } else if (eta === 'over65') {
    prezzoFinale *= 1 - discountSenior / 100;
    tipoBiglietto = 'Sconto Silver'
  }

  //genero gli elementi random
  const numCarrozza = getRandomNumber(1, 12);
  const codiceCP = getRandomNumber(1000000, 10000000);

  //stampo biglietto
  document.getElementById('nome-passeggero').innerHTML = nome;
  document.getElementById('offerta-applicata').innerHTML = tipoBiglietto;
  document.getElementById('carrozza').innerHTML = numCarrozza;
  document.getElementById('codice-cp').innerHTML = codiceCP;
  document.getElementById('costo').innerHTML = '€ ' + prezzoFinale;

}


function handleClickReset() {

  document.getElementById('nome').value = '';
  document.getElementById('km').value = '';
  document.getElementById('eta').value = '';

}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}