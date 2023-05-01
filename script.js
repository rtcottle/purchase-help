var recentCities = [];

renderCities();
//this saves past searches into local storage
function renderCities() {
  recentCities = [];
  previousCities.innerHTML = '';
  var pastCities = JSON.parse(localStorage.getItem('pastCities'));
  if (pastCities) {
    recentCities.push(...pastCities);
  }
  if (recentCities.length) {
    recentCities.forEach((e) => {
      var listCity = document.createElement('button');
      previousCities.appendChild(listCity);
      listCity.textContent = e;
      listCity.setAttribute('class', 'past btn btn-secondary w-100 mb-1');
      listCity.setAttribute('id', 'previous-cities');
    });
  }
  console.log(pastCities);
}

searchBtn.addEventListener('click', getApi);
//TODO: fix this so that the selected item is put in the search bar.
previousCities.addEventListener('click', function () {
  citySearch.value = previousCities.this.textContent;
  getApi();
});
