function generate() {
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  for (let i = 0; i < 4; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`row ${i} and column ${j}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  document.body.appendChild(tblBody);
  tblBody.setAttribute("border", "5");
}

function clearTable() {
  const tbl = document.createElement("table");

  tbl.textContent = " ";
}
