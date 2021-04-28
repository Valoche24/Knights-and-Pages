var coin = -1; // Compteur pair & impair

//DEFINITION DES BALISE HTML KNGHTS & Pages
// const KR = "<img class="base" draggable="true" src="image/knight-red.svg" alt="" data-humain="knight" data-color="red">";
// const PR = "<img class="base" draggable="true" src="image/page-red.svg" alt="" data-humain="page" data-color="red">";
// const KB = "<img class="base" draggable="true" src="image/knight-blue.svg" alt="" data-humain="knight" data-color="blue">";
// const PB = "<img class="base" draggable="true" src="image/page-blue.svg" alt="" data-humain="page" data-color="blue">";
// const PY = "<img class="base" draggable="true" src="image/knight-yellow.svg" alt="" data-humain="knight" data-color="yellow">";
// const PY = "<img class="base" draggable="true" src="image/page-yellow.svg" alt="" data-humain="page" data-color="yellow">";


var attr = ["class", "draggable", "src", "data-humain", "data-color"];

var valKR = ["base", "true", "image/knight-red.svg", "knight", "red"];
var valPR = ["base", "true", "image/page-red.svg", "page", "red"];
var valKB = ["base", "true", "image/knight-blue.svg", "knight", "blue"];
var valPB = ["base", "true", "image/page-blue.svg", "page", "blue"];
var valKY = ["base", "true", "image/knight-yellow.svg", "knight", "yellow"];
var valPY = ["base", "true", "image/page-yellow.svg", "page", "yellow"];


const leftTable11 = document.getElementById("111");
const leftTable21 = document.getElementById("121");
const leftTable12 = document.getElementById("112");
const leftTable22 = document.getElementById("122");
const leftTable13 = document.getElementById("113");
const leftTable23 = document.getElementById("123");

const rightTable11 = document.getElementById("211");
const rightTable21 = document.getElementById("221");
const rightTable22 = document.getElementById("222");
const rightTable12 = document.getElementById("212");
const rightTable23 = document.getElementById("223");
const rightTable13 = document.getElementById("213");



const listIdTable = ["111", "121", "112", "122", "113", "123", "firstCaseBoat", "secondCaseBoat", "211", "221", "222", "212", "223", "213"];
const listIdTable2 = ["211", "221", "222", "212", "223", "213"];


//INITIALISATION !!! 1er chiffre = Droite ou gauche; 2e chiffre = Column; 3e chiffre = Rangée
var intialPositionKP = function() {

  var caseTable = document.getElementsByTagName("td");

  for (var i = 0; i < caseTable.length; i++) {
    caseTable[i].innerHTML = "";
  }


  var KR = document.createElement("img");
  for (let v = 0; v < attr.length; v++) {
    KR.setAttribute(attr[v], valKR[v]);
  }
  leftTable11.append(KR);

  var PR = document.createElement("img");
  for (let v = 0; v < attr.length; v++) {
    PR.setAttribute(attr[v], valPR[v]);
  }
  leftTable21.append(PR);

  var KB = document.createElement("img");
  for (let v = 0; v < attr.length; v++) {
    KB.setAttribute(attr[v], valKB[v]);
  }
  leftTable12.append(KB);

  var PB = document.createElement("img");
  for (let v = 0; v < attr.length; v++) {
    PB.setAttribute(attr[v], valPB[v]);
  }
  leftTable22.append(PB);

  var KY = document.createElement("img");
  for (let v = 0; v < attr.length; v++) {
    KY.setAttribute(attr[v], valKY[v]);
  }
  leftTable13.append(KY);

  var PY = document.createElement("img");
  for (let v = 0; v < attr.length; v++) {
    PY.setAttribute(attr[v], valPY[v]);
  }
  leftTable23.append(PY);
}

//ACTIVATION DE L'INITIALISATION
intialPositionKP();



//GAMEOVER

var debbugSelector = document.getElementById("window-debbug");
var gameOver = function(){
  document.getElementById("gameOver").style.display = "flex";
  overlay.classList.add("active");
}

//CHECKER TABLE

var checkerTable = function(){
  if (coin%2 === 0) {
    var actualTable = leftTable;
  } else {
    var actualTable = rightTable;
  }

  for (let i = 0; i < actualTable.rows.length; i++){
    if (actualTable.rows[i].cells[1].firstChild === null) { //Peut-être double...
      //pass
    }
    else if (actualTable.rows[i].cells[0].firstChild !== null && actualTable.rows[i].cells[1].firstChild !== null) {
      //pass
    }
    else {
      for (let p = 0; p < actualTable.rows.length; p++) {
        if (actualTable.rows[p].cells[0].firstChild === null){
          //pass
        }
        else {
          gameOver();
          console.log("GameOVer");
        }
      }
    }
  }
}




//CHECKER BOAT

const firstCaseBoat = document.getElementById("firstCaseBoat");
const secondCaseBoat = document.getElementById("secondCaseBoat");


var checkerBoat = function(){
  if (firstCaseBoat.childElementCount === 1) {

    var firstElementBoat = firstCaseBoat.firstChild;
    var secondElementBoat = secondCaseBoat.firstChild;

    if (firstElementBoat === null || secondElementBoat === null) {
      //pass
    }
    else if (firstElementBoat.dataset.humain === secondElementBoat.dataset.humain) {
      //pass
    } else {
        if (firstElementBoat.dataset.color === secondElementBoat.dataset.color) {
          //pass
        } else {
          gameOver();
        }
      }
  } else {
    //pass
  }
}


//MOVE POSITION

var moveElement = function(){

  if (coin%2 === 0){
    var tableNumber = 1; // Voir avec actualTable pour optimiser
  } else {
    var tableNumber = 2;
  }

//////////////////////////////// A OPTIMISER ////////////////////////////////
  if (firstCaseBoat.firstChild !== null && secondCaseBoat.firstChild === null) {
    if (firstCaseBoat.firstChild.dataset.humain == "knight"){
      var tableColumn = 1;
    } else {
      var tableColumn = 2;
    }
    if (firstCaseBoat.firstChild.dataset.color == "red"){
      var tableRow = 1;
    }
    else if (firstCaseBoat.firstChild.dataset.color == "blue") {
      var tableRow = 2;
    }
    else {
      var tableRow = 3;
    }
    var idCellPosition = tableNumber.toString() + tableColumn.toString()+ tableRow.toString();
    var goToThere = document.getElementById(idCellPosition);
    goToThere.append(firstCaseBoat.firstChild);
  }

  else if (firstCaseBoat.firstChild === null && secondCaseBoat.firstChild !== null) {
    if (secondCaseBoat.firstChild.dataset.humain == "knight"){
      var tableColumn = 1;
    } else {
      var tableColumn = 2;
    }

    if (secondCaseBoat.firstChild.dataset.color == "red"){
      var tableRow = 1;
    }
    else if (secondCaseBoat.firstChild.dataset.color == "blue") {
      var tableRow = 2;
    }
    else {
      var tableRow = 3;
    }
    var idCellPosition = tableNumber.toString() + tableColumn.toString()+ tableRow.toString();
    var goToThere = document.getElementById(idCellPosition);
    goToThere.append(secondCaseBoat.firstChild);
  }

  else if (firstCaseBoat.firstChild !== null && secondCaseBoat.firstChild !== null) {
    if (firstCaseBoat.firstChild.dataset.humain == "knight"){
      var tableColumn = 1;
    } else {
      var tableColumn = 2;
    }
    if (firstCaseBoat.firstChild.dataset.color == "red"){
      var tableRow = 1;
    }
    else if (firstCaseBoat.firstChild.dataset.color == "blue") {
      var tableRow = 2;
    }
    else {
      var tableRow = 3;
    }
    var idCellPosition = tableNumber.toString() + tableColumn.toString()+ tableRow.toString();
    var goToThere = document.getElementById(idCellPosition);
    goToThere.append(firstCaseBoat.firstChild);

    if (secondCaseBoat.firstChild.dataset.humain == "knight"){
      var tableColumn = 1;
    } else {
      var tableColumn = 2;
    }

    if (secondCaseBoat.firstChild.dataset.color == "red"){
      var tableRow = 1;
    }
    else if (secondCaseBoat.firstChild.dataset.color == "blue") {
      var tableRow = 2;
    }
    else {
      var tableRow = 3;
    }
    var idCellPosition = tableNumber.toString() + tableColumn.toString()+ tableRow.toString();
    var goToThere = document.getElementById(idCellPosition);
    goToThere.append(secondCaseBoat.firstChild);
  }

  else { // sinon les deux cases sont vide IMPOSSIBLE
    console.log("Erreur movePosition : condition impossible !!!")
  }
}

var moveBoat = function(){
  if (coin%2 === 0) {
    idBoat.style.left = "25vw";
    idBoat.style.transform = "scaleX(1)";
  } else {
    idBoat.style.left = "45vw";
    idBoat.style.transform = "scaleX(-1)";
  }
}

var moveCanvasBlock = function(){
  if (coin%2 === 0) {
    idCanvas.style.right = "O";
    idCanvas.style.left = "";
  }
  else {
    idCanvas.style.right = "";
    idCanvas.style.left = "0";
  }
}


var movePosition = function(){
  moveCanvasBlock();
  moveBoat();
  moveElement();
}

// Fenêtre POPup https://www.youtube.com/watch?v=MBaw_6cPmAw

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


// Slider https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


// Drag & Drop https://www.youtube.com/watch?v=-ah4LbthfYc
//https://www.youtube.com/watch?v=tZ45HZAkbLc


const bases = document.querySelectorAll('.base');
const lists = document.querySelectorAll('.case_table');

let draggedItem = null;

for (let i = 0; i < bases.length; i++) {
	const item = bases[i];

	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
		}, 0)
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})

	for (let j = 0; j < lists.length; j ++) {
		const case_table = lists[j];

		case_table.addEventListener('dragover', function (e) {
			e.preventDefault();
		});

		case_table.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});

		case_table.addEventListener('dragleave', function (e) {
      this.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
		});

		case_table.addEventListener('drop', function (e) {
			this.append(draggedItem);
      this.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
		});
	}
}


//TRAVERSER

var traverserButton = document.getElementById("traverser");



var TRAVERSER = function(){
  if (firstCaseBoat.firstChild === null && secondCaseBoat.firstChild === null ){
    console.log("Un des cases sont vides !!! Donc tu ne peux pas partir")
  } else {
  checkerTable();
  checkerBoat();
  movePosition();
  coin+=1;
  checkerTable();
  winCondition();
  }
}


traverserButton.addEventListener("click", TRAVERSER);


var leftTable = document.getElementById("leftTable");
var rightTable = document.getElementById("rightTable");

var idBoat = document.querySelector("#boat");
var idCanvas = document.querySelector("#canvasBlock");


// Win condition listIdTable2

var winCondition = function() {
  var compteurElement = 0;
  for(var w = 0; w < listIdTable2.length; w++){
    var actualCell = listIdTable2[w];

    if(document.getElementById(actualCell).firstChild !== null){
      compteurElement += 1;
      console.log(compteurElement);
    } else {
      //pass
    }
  }
  if(compteurElement == 6){
    document.getElementById("win").style.display = "flex";
    overlay.classList.add("active");

  } else {
    //pass
  }
}


// Chrono

var seconds = document.getElementById("seconds");
var countUp = function() {
    var ti = parseFloat(seconds.textContent);
if (ti >= 0){
    seconds.textContent = ti + 1;
  }
};

var timer = window.setInterval(countUp, 1000);



//////////RESET//////////

var resetButton = document.getElementById("reset");

//Remet le compteur à 0
var stopCountUp = function() {
  seconds.textContent = 0;
};

//Remet le bateau à ca position initial
var intialBoat = function() {
  idBoat.style.left = "25vw";
}

// Remet le BlockCanvas à ca position initial
var intialCanvasBlock = function() {
  idCanvas.style.right = "O";
  idCanvas.style.left = "";
}

// FONCTION CALL
var RESET = function() {
  //coin = 0;
  //intialPositionKP();
  //intialBoat();
  //intialCanvasBlock();
  //stopCountUp();
  //debbugSelector.style.backgroundColor = "";
  document.location.reload();
}

// auto show modal
// call the fucntion after 1 sec
setTimeout(show_modal, 1000);
// so modal will stay 3 sec
 function show_modal(){
 	 var popup_box = document.getElementById('popup-box');
 	 popup_box.style.display = "block";
 }
 function close_modal(){
 	 var popup_box = document.getElementById('popup-box');
 	 popup_box.style.display = "none";
 }

resetButton.addEventListener("click", RESET);
