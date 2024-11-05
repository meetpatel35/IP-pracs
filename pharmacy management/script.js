document.getElementById('medication-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the form
    const medicationName = document.getElementById('medication-name').value;
    const quantity = document.getElementById('quantity').value;
    const expiryDate = document.getElementById('expiry-date').value;

    // Create a new table row
    const table = document.getElementById('medication-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert new cells and add data
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    
    cell1.textContent = medicationName;
    cell2.textContent = quantity;
    cell3.textContent = expiryDate;

    // Clear the form
    document.getElementById('medication-form').reset();
});
