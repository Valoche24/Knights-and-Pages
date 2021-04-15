var coin = -1; // Compteur pair & impair

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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  EN TRAVAUX  ///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
// Bonton "Traverser"

var buttonTraverser = document.getElementById("traverser");

var leftTable = document.getElementById("leftTable");
var rightTable = document.getElementById("rightTable");

var idBoat = document.querySelector("#boat");
var idCanvas = document.querySelector("#canvasBlock");

var firstCaseBoat = document.getElementById("firstCaseBoat");
var secondCaseBoat = document.getElementById("secondCaseBoat");

var firstEmptyCellLeftTable = $('#leftTable td:empty:eq(0)'); // trouver la 1er case vide
var firstEmptyCellRightTable = $('#rightTable td:empty:eq(0)'); // trouver la 1er case vide


//checker tableau bateau
var checkerBoat = function(){
  if(firstCaseBoat.dataset.data-humain === secondCaseBoat.dataset.data-humain){
    break;
  }
  else {
    if(firstCaseBoat.dataset.data-color === secondCaseBoat.dataset.data-color){
      break;
    }
    else {
      gameOver();
    }
  }
}


var moveHumain = function(){
  var

  }
}



var cross = function(){ // Traverser + CHECKER
  coin += 1;
  if(coin%2 == 0){
    //Checker tableau gauche


    //checker tableau bateau
    function checkerBoat();

    //Transfert


    //chercker tableau de gauche

    // déplacer le canvasBlock
    idBoat.style.left = "30vw";


  }
  else {

  }

    idBoat.style.left = "50vw";
};

buttonTraverser.addEventListener("click", cross);


var gameOver = function() {
  idGameOver.style.display = "block";
}

var idGameOver = document.querySelector("#gameOver");

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Compteur de traversé



// Animation fleuve + arbres


// Chrono

var seconds = document.getElementById("seconds");
var countUp = function() {
    var ti = parseFloat(seconds.textContent);
if (ti >= 0){
    seconds.textContent = ti + 1;
  }
};

var timer = window.setInterval(countUp, 1000);

var stopCountUp = function() {
  seconds.textContent = 0; //Remet le compteur à 0
};


//RESET

var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", stopCountUp);

//traverserFleuve

var boatCurrentPosition = 0; // 0 : left, 1 : right
var boat = document.getElementById("boat");

var traverserFleuve = function(){

    if (boatCurrentPosition == 0){
	boat.classList.add('horizTranslateToRight');
	boat.classList.remove('horizTranslateToLeft');
	boatCurrentPosition = 1;
    }
    else{
	boat.classList.add('horizTranslateToLeft');
	boat.classList.remove('horizTranslateToRight');
	boatCurrentPosition = 0;
    }



};


var traverserButton = document.getElementById("traverser");
traverserButton.addEventListener("click", traverserFleuve);
