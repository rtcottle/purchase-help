var lastPurchaseOptions = [];

const rowButton = document.getElementById('new-row');
const columnButton = document.getElementById('new-column');
const values = document.querySelectorAll('score');

function row() {
  for (var i = 0; i <= 6; i++) {
    var x = "<input placeholder='score'/>";
    var cell = document.createElement('td');
    newRow.appendChild('cell');
    cell.innerHTML = x;
  }
  return;
}

function addRow(row) {
  console.log('you clicked the button!!');
  const table = document.getElementById('purchase-table');
  const newRow = document.createElement('tr');
  const lastRow = document.getElementById('last');
  // TODO: should this be append of append child?
  table.insertBefore(row, lastRow);
  // document.getElementById('last').classList.remove('last');
  // newRow.id = 'last';
  // TODO: make this function to create multiple elements.
  // TODO: make this dynamically add the class name for the columns 1-6.

  var newLastRow = document.getElementById('last');
  newLastRow.append(row);
}

// function addColumn() {
//   console.log('add column');
// }

function columnTotals(columns) {
  let result = [];
  for (let i = 0; i < columns.length; i++) {
    if (i % 2 == 0 && i < arr.length - 1) {
      result.push(arr[i] + arr[i + 1]);
      i++;
    }
  }

  return result;
}

function sumItems() {
  const rank = document.querySelector('rank').value;
  const score = document.querySelector('column-3').value;
  const x = [];
  const multiple = rank * score;
  const total = x.push(multiple);
  console.log(total);
  // COLUMN 1 MULTIPLY ITEMS BY THE NUMBER IN THE RANKING COLUMN
  // STORE THAT NUMBER IN AN ARRAY FOR THE COLUMN
  // TOTAL THE ARRAY
  // DISPLAY THE TOTALLED AMOUNT IN THE TOTAL BOX
}

// values.addEventListener('input', sumItems);
rowButton.addEventListener('click', sumItems);
// columnButton.addEventListener('click', addColumn);
