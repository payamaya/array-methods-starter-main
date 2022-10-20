// Select DOM elements
const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showMillionairesBtn = document.getElementById('show-millionaires')
const sortBtn = document.getElementById('sort')
const calculateWealthBtn = document.getElementById('calculate-wealth')

// initialize array
let data = []
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api')

  const data = await res.json()
  //console.log(data)
  const user = data.results[0]
  // vi vill ha första item i arrayen vi får tillbaka som result
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    // vi får förnamn och efternamn på vår user
    money: Math.floor(Math.random() * 1000000),
  }
  //console.log(newUser)

  addData(newUser)
}
//getRandomUser()
// get random user from API

function doubleMoney() {
  // alla users property money ska dubblas
  // TIPS: använd spread operator för att se till att all tidigare data inte
  // körs över
}

function sortByRichest() {
  // sortera listan med den rikaste personen först
}

function showMillionaires() {
  // visa endast users som är miljonärer
}

function calculateWealth() {
  // räkna ihop allas pengar, alltså totala förnögenheten
  // den här är svårast och använder en lite mer komplicerad array metod
}

// add new user to data array
function addData(obj) {
  data.push(obj)
  // använder push för att lägga till objektet på den tomma arrayen

  // uppdatera DOM
  uppdateDOM()
  //update the DOM

  function uppdateDOM(providedData = data) {
    // clear main div
    main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`
    // loppa genom data arrayen
    providedData.forEach((person) => {
      const element = document.createElement('divs')
      element.classList.add('person')
      element.innerHTML = `<strong>${person.name}</strong> ${formatMoney(
        person.money
      )}`
      main.appendChild(element)
    })
  }
}
// update the DOM

// format money
// https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

// event listeners
// här lägger ni eventlisteners till alla knappar i menyn

addUserBtn.addEventListener('click',getRandomUser)