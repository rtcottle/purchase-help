var lastPurchaseOptions = [];

const rowButton = document.getElementById('new-row');

function addRow() {
  console.log('you clicked the button!!');
  const newRow = document.createElement('tr');
  const lastRow = document.getElementById('last');
  // TODO: should this be append of append child?
  lastRow.appendChild(newRow);
  document.getElementById('last').classList.remove('last');
  newRow.id = 'last';
  // TODO: make this function to create multiple elements.
  // TODO: make this dynamically add the class name for the columns 1-6.
  function row() {
    for (var i = 0; i <= 6; i++) {
      var x = "<input placeholder='score'/>";
      var cell = document.createElement('td');
      newRow.appendChild('cell');
      cell.innerHTML = x;
    }
  }

  var newLastRow = document.getElementById('last');
  newLastRow.append(row);
}

rowButton.addEventListener('click', addRow);
