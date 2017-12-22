"use strict";

// Variables listenings for all sort events for constructor standings
let table = document.getElementById("driver-table");
let positionSort = document.getElementById("position").addEventListener("click", sortByPosition);
let driverSort = document.getElementById("team").addEventListener("click", sortByTeam);
let pointsSort = document.getElementById("points").addEventListener("click", sortByPoints);

// Fucntions called by event listeners - needed since can't pass parameters from event listener
// Passing the position of the sorting criteria's index in the table
function sortByPosition() {
  sortByNumber(0);
}

function sortByTeam() {
  sortByString(1); 
}
 
function sortByPoints() {
  sortByNumber(0);
}

// Helper methods - used to remove repeated code
function sortByString(tableIndex) {
  // Initialise variables to be used in sort method
  let rows, switching, i, x, y, shouldSwitch;
  // Assume table is not already sorted and switching will need to be done
  switching = true;
  while (switching) {
    // Set switching to false, we can re-enable later if table still needs ordering
    switching = false;
    // Get all table rows from HTML
    rows = table.getElementsByTagName("tr");
    // For each row, except first row which contains table headers
    for (i = 1; i < (rows.length - 1); i++) {
      // Assume we do not need to switch positions, good to keep a positive mental attitude!
      shouldSwitch = false;
      // Get the relevant data from the HTML table cells (current and next in table list)
      x = rows[i].getElementsByTagName("td")[tableIndex].innerHTML.toLowerCase();
      y = rows[i + 1].getElementsByTagName("td")[tableIndex].innerHTML.toLowerCase();
      // If the information in the current cell has greater value than information in next cell
      if (x > y) {
        // Make the switch to order the table
        shouldSwitch= true;
        // Break from loop to execute switching
        break;
      }
    }
    // If we are switching and the loop has not naturally concluded
    if (shouldSwitch) {
      // Switch the table rows to bring some order to this table madness
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      // Back to the beginning we go, continuing to bring order
      switching = true;
    }
  }
}

// Similar to method above, except we parse data read from table to integer for proper ordering
// if left as default, our numerical order would be: 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2, 20...
function sortByNumber(tableIndex) {
  let rows, switching, i, x, y, shouldSwitch;
  switching = true;
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      // Parse the string as an integer so we can use mathematical comparisons, rather than string comparison
      x = parseInt(rows[i].getElementsByTagName("td")[tableIndex].innerHTML);
      y = parseInt(rows[i + 1].getElementsByTagName("td")[tableIndex].innerHTML);
      // If we are ordering by position, leave as this comparison as we want lowest to highest numerical value
      if (x > y) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
