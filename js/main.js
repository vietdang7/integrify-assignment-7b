const btnAdd = document.getElementById("add");
btnAdd.addEventListener("click", addItem);
function addItem() {
  // get the values
  let itemValue = document.getElementById("inputItem").value;
  console.log(itemValue);
  let quanValue = document.getElementById("inputQuantity").value;
  console.log(quanValue);
  if (itemValue && quanValue) {
    let list = document.getElementById("todo");
    // create item
    let item = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "checkBtn");
    checkBox.addEventListener("click", checkedItem);

    item.innerHTML += `
      <div>
        ${itemValue}
      </div>
      <span> - </span>
      <div>
        ${quanValue} pcs
      </div>
        
      `;
    // reset the value of input
    document.getElementById("inputItem").value = "";
    document.getElementById("inputQuantity").value = "";
    // create list

    // create button
    let button = document.createElement("button");
    button.setAttribute("id", "deleteBtn");
    button.innerText = "Delete";
    button.addEventListener("click", removeItem);
    item.insertBefore(checkBox, item.childNodes[0]);
    item.appendChild(button);
    list.appendChild(item);
  } else {
    alert("Please fill both field!");
  }
}

function removeItem() {
  let item = this.parentNode;
  parent = item.parentNode;
  parent.removeChild(item);
}

function checkedItem() {
  let itemChecked = this.checked;
  let item = this.parentNode;
  parent = item.parentNode;
  let id = parent.id;
  let target =
    id === "todo"
      ? document.getElementById("complete")
      : document.getElementById("todo");
  // refactored
  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}
