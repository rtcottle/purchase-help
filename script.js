var lastPurchaseOptions = [];

const rowButton = document.getElementById('new-row');

const columns = 6;

function addRow() {
  console.log('you clicked the button!!');
  const newRow = document.createElement('tr');
  const lastRow = document.getElementById('last');
  lastRow.append(newRow);
  document.getElementById('last').classList.remove('last');
  newRow.id = 'last';
  function row(columns) {
    for (var i = 0; i <= columns; i++) {
      var x = "<input placeholder='score'/>";
      var cell = document.createElement('td');
      cell.innerHTML = x;
    }
  }

  var newLastRow = document.getElementById('last');
  newLastRow.append(row);
}

// renderCities();
// //this saves past searches into local storage
// function renderCities() {
//   recentCities = [];
//   previousCities.innerHTML = '';
//   var pastCities = JSON.parse(localStorage.getItem('pastCities'));
//   if (pastCities) {
//     recentCities.push(...pastCities);
//   }
//   if (recentCities.length) {
//     recentCities.forEach((e) => {
//       var listCity = document.createElement('button');
//       previousCities.appendChild(listCity);
//       listCity.textContent = e;
//       listCity.setAttribute('class', 'past btn btn-secondary w-100 mb-1');
//       listCity.setAttribute('id', 'previous-cities');
//     });
//   }
//   console.log(pastCities);
// }

rowButton.addEventListener('click', addRow);

// searchBtn.addEventListener('click', getApi);
// //TODO: fix this so that the selected item is put in the search bar.
// previousCities.addEventListener('click', function () {
//   citySearch.value = previousCities.this.textContent;
//   getApi();
// });
