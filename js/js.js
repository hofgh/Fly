 var i=0;
 var image=document.getElementById("image");
        // Добавьте свои картинки в массив через запятую
 var imgs=new Array('../images/free-icon-love-4196737.png','../images/free-icon-add-to-favorites-4989206.png');
 function imgsrc() {
  i++;i%=imgs.length;
  image.src = imgs[i];
}
var j=0;
var images=document.getElementById("image1");
        // Добавьте свои картинки в массив через запятую
var imgss=new Array('../images/free-icon-love-4196737.png','../images/free-icon-add-to-favorites-4989206.png');
function imgsrc1() {
  j++;j%=imgss.length;
  images.src = imgs[j];
}
var p=0;
var imagess=document.getElementById("image2");
        // Добавьте свои картинки в массив через запятую
var imgsss=new Array('../images/free-icon-love-4196737.png','../images/free-icon-add-to-favorites-4989206.png');
function imgsrc2() {
  p++;p%=imgsss.length;
  imagess.src = imgs[p];
}

let passengers = 1;
let basePrice = 3983;
// Функция добавления нового пассажира
function addPassenger() {
  passengers++;
  const passengerDiv = document.createElement("div");
  passengerDiv.classList.add("passenger");

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.classList.add("test-5-name");
  nameInput.placeholder = "Имя";

  const lastNameInput = document.createElement("input");
  lastNameInput.type = "text";
  lastNameInput.classList.add("test-5-last");
  lastNameInput.placeholder = "Фамилия";

  const dobInput = document.createElement("input");
  dobInput.type = "text";
  dobInput.classList.add("test-5-dob");
  dobInput.placeholder = "дата рождения";

  const docInput = document.createElement("input");
  docInput.type = "text";
  docInput.classList.add("test-5-doc");
  docInput.placeholder = "Номер документа";

  const removeButton = document.createElement("button");
  removeButton.classList.add("test-5-remove");
  removeButton.textContent = "Удалить";
  removeButton.onclick = function () {
    removePassenger(removeButton);
  };

  passengerDiv.appendChild(nameInput);
  passengerDiv.appendChild(lastNameInput);
  passengerDiv.appendChild(dobInput);
  passengerDiv.appendChild(docInput);
  passengerDiv.appendChild(removeButton);

  const passengerForm = document.querySelector("#passenger-form");
  passengerForm.insertBefore(passengerDiv, passengerForm.lastElementChild);
  updatePrice();
}
// Функция удаления пассажира
function removePassenger(button) {
  const passengerDiv = button.parentElement;
  passengerDiv.remove();
  passengers--;
  updatePrice();
}
// Функция бронирования бронирования
function bookReservation() {
  window.location.href = "login.html"; // Redirect to login page
}
// Функция обновления окончательной цены
function updatePrice() {
  const price = passengers * basePrice;
  document.querySelector(".test-5-price").textContent = "Финальная стоимость:"+"₽" + price;
}     



//3 рейс
let passengerser = 1;
let basePricesr = 3983;
// Функция добавления нового пассажира
function addPassenger1() {
  passengerser++;
  const passengerDiv = document.createElement("div");
  passengerDiv.classList.add("passenger");

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.classList.add("test-5-name");
  nameInput.placeholder = "Имя";

  const lastNameInput = document.createElement("input");
  lastNameInput.type = "text";
  lastNameInput.classList.add("test-5-last");
  lastNameInput.placeholder = "Фамилия";

  const dobInput = document.createElement("input");
  dobInput.type = "text";
  dobInput.classList.add("test-5-dob");
  dobInput.placeholder = "дата рождения";

  const docInput = document.createElement("input");
  docInput.type = "text";
  docInput.classList.add("test-5-doc");
  docInput.placeholder = "Номер документа";

  const removeButton = document.createElement("button");
  removeButton.classList.add("test-5-remove");
  removeButton.textContent = "Удалить";
  removeButton.onclick = function () {
    removePassenger(removeButton);
  };

  passengerDiv.appendChild(nameInput);
  passengerDiv.appendChild(lastNameInput);
  passengerDiv.appendChild(dobInput);
  passengerDiv.appendChild(docInput);
  passengerDiv.appendChild(removeButton);

  const passengerForm = document.querySelector("#passenger-form2");
  passengerForm.insertBefore(passengerDiv, passengerForm.lastElementChild);
  updatePrice();
}
// Функция удаления пассажира
function removePassenger2(button) {
  const passengerDiv = button.parentElement;
  passengerDiv.remove();
  passengerse--;
  updatePrice();
}
// Функция бронирования 
function bookReservation2() {
  window.location.href = "login.html"; // Redirect to login page
}
// Функция обновления окончательной цены
function updatePrice2() {
  const prices = passengerses * basePricese;
  document.querySelector(".test-5-price").textContent = "Финальная стоимость:"+"₽" + prices;
}    

let passengerse = 1;
let basePrices =3983;
// Функция добавления нового пассажира
function addPassenger2() {
  passengerse++;
  const passengerDiv = document.createElement("div");
  passengerDiv.classList.add("passenger");

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.classList.add("test-5-name");
  nameInput.placeholder = "Имя";

  const lastNameInput = document.createElement("input");
  lastNameInput.type = "text";
  lastNameInput.classList.add("test-5-last");
  lastNameInput.placeholder = "Фамилия";

  const dobInput = document.createElement("input");
  dobInput.type = "text";
  dobInput.classList.add("test-5-dob");
  dobInput.placeholder = "дата рождения";

  const docInput = document.createElement("input");
  docInput.type = "text";
  docInput.classList.add("test-5-doc");
  docInput.placeholder = "Номер документа";

  const removeButton = document.createElement("button");
  removeButton.classList.add("test-5-remove");
  removeButton.textContent = "Удалить";
  removeButton.onclick = function () {
    removePassenger(removeButton);
  };

  passengerDiv.appendChild(nameInput);
  passengerDiv.appendChild(lastNameInput);
  passengerDiv.appendChild(dobInput);
  passengerDiv.appendChild(docInput);
  passengerDiv.appendChild(removeButton);

  const passengerForm = document.querySelector("#passenger-form1");
  passengerForm.insertBefore(passengerDiv, passengerForm.lastElementChild);
  updatePrice();
}
// Функция удаления пассажира
function removePassenger2(button) {
  const passengerDiv = button.parentElement;
  passengerDiv.remove();
  passengerser--;
  updatePrice();
}
// Функция бронирования 
function bookReservation2() {
  window.location.href = "login.html"; // Redirect to login page
}
// Функция обновления окончательной цены
function updatePrice2() {
  const pricesr = passengersesr * basePriceser;
  document.querySelector(".test-5-price").textContent = "Финальная стоимость:"+"₽" + pricesr;
} 