let inputTotalPrice = document.getElementById('totalPrice'),
  inputDays = document.getElementById('days'),
  inputInflation = document.getElementById('inflation'),
  buttonCalculate = document.getElementById('calculate'),
  buttonClean = document.getElementById('clean'),
  tableResults = document.getElementById('tableResults');

/**
 * calculate and render the table
 */
calculate.onclick = function () {
  // get the actual value on inputs
  totalPrice = inputTotalPrice.value;
  days = inputDays.value;
  inflation = inputInflation.value;
  inflationPercent = inflation / 100 + 1;

  // reset table
  tableResults.innerHTML = "";

  /**
   * Render head table
   */
  tableResults.innerHTML = "<tbody id='tableResultsBody' class='tableResultsBody'> </tbody></thead>";
  tableResultsBody = document.getElementById('tableResultsBody');

  let tableFragment = document.createDocumentFragment();

  for (let i = 1; i <= days; i++) {
    // console.log("dia: " + i + " valor del proyecto: " + totalPrice);
    /**
     * Calculate Day's Price
     */
    totalPrice = totalPrice * inflationPercent;

    /**
     * Render Table
     */
    let row = document.createElement('tr');
    let cell = document.createElement('td');
    cell.appendChild(document.createTextNode(i.toString()));
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(totalPrice.toFixed(2).toString()));
    row.appendChild(cell);

    tableFragment.appendChild(row);
  }

  tableResultsBody.appendChild(tableFragment);
}


/**
 * Clean all inputs
 */
buttonClean.onclick = function () {
  inputTotalPrice.value = null;
  inputDays.value = null;
  inputInflation.value = null;
  tableResults.innerHTML = "";
}