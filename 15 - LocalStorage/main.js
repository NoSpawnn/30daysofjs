const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];
const deleteButton = document.querySelector("button.delete");
const checkButton = document.querySelector("button.check");
const uncheckButton = document.querySelector("button.uncheck");

function addItem(e) {
  e.preventDefault();

  const item = {
    text: this.querySelector("[name=item]").value,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));

  this.reset();
}

function populateList(entries = [], list) {
  list.innerHTML = entries
    .map((plate, idx) => {
      return `
    <li>
      <input type="checkbox" data-index=${idx} id="item${idx}" ${
        plate.done ? "checked" : ""
      } />
        <label for="item${idx}">${plate.text}</label>
        </li>
        `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;

  const index = e.target.dataset.index;
  items[index].done = !items[index].done;

  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function deleteAll() {
  items.splice(0, items.length);
  localStorage.removeItem("items");
  populateList(items, itemsList);
}

function setAllCheckedStateTo(state) {
  for (let i = 0; i < items.length; i++) items[i].done = state;

  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
deleteButton.addEventListener("click", deleteAll);
checkButton.addEventListener("click", () => setAllCheckedStateTo(true));
uncheckButton.addEventListener("click", () => setAllCheckedStateTo(false));

populateList(items, itemsList);
