//Deck

let deck = [
  {
    id: 1,
    name: "Alcatraz",
    color: "#84CFFA",
    imagem: "/jogo_da_memoria_aves_marinhas/assets/Alcatraz.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 2,
    name: "Cagarra",
    color: "#FA8484",
    imagem: "/jogo_da_memoria_aves_marinhas/assets/Cagarra.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 3,
    name: "Fragata",
    color: "#E984FA",
    imagem: "/jogo_da_memoria_aves_marinhas/assets/Fragata.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 4,
    name: "Gongon",
    color: "#84FAAC",
    imagem: "/jogo_da_memoria_aves_marinhas/assets/Gongon.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 5,
    name: "JoaoPreto",
    color: "#8684FA",
    imagem: "/jogo_da_memoria_aves_marinhas/assets/JoaoPreto.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 6,
    name: "Pedreirinho",
    color: "#F7FA84",
    imagem: "/jogo_da_memoria_aves_marinhas/assets/Pedreirinho.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 6,
    name: "PedreiroAzul",
    color: "#F7FA84",
    imagem: "/jogo_da_memoria_aves_marinhas/assets/PedreiroAzul.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 6,
    name: "Pedreiro",
    color: "#F7FA84",
    imagem: "/jogo_da_memoria_aves_marinhas/assets/Pedreiro.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 6,
    name: "RaboDeJunco",
    color: "#F7FA84",
    imagem: "/jogo_da_memoria_aves_marinhas/assets/RaboDeJunco.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
];

const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let movements = 0;
let winContador = 0;

function flipCard() {
  //this.classList.toggle('flip');
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

   if (!hasFlippedCard) {
     hasFlippedCard = true;
     firstCard = this;
     return;
    }

    console.log(winContador)
     
    secondCard = this;
 
    checkForMatch();
}
 
  //Conferindo se é igual

  function checkForMatch() {
    if(firstCard.dataset.nome !== secondCard.dataset.nome) {
      movements++;
    }
    document.getElementById("movimentos").innerHTML = `${movements}`;
    document.getElementById("movimentos2").innerHTML = `${movements}`;
      
    if (firstCard.dataset.nome === secondCard.dataset.nome) {
      winContador++;
      disableCards();
      //ALTERAÇÃO* Confere se o "winContador" é igual a "9", que é o número máximo de vitórias que pode haver no jogo!
      if(winContador == 9) {
        setTimeout(() => {
          document.querySelector('#vitoria').style.display = 'block'
          document.querySelector('#movimentosvitoria').innerHTML = movements
        }, 1000);
      }
      //FIM-ALTERAÇÃO*
      return;
    }

 
    unflipCards();

    console.log(movements);

  }
 
  //Desabilitando o clique nas cartas viradas

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }
 
  //Virando as cartas erradas de volta

  function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();

    }, 1500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  //Embaralhando cartas (IIFE) Vai ser executada assim que for lida

  (function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 18);
      card.style.order = ramdomPos;
    });
  })();

cards.forEach(card => card.addEventListener('click', flipCard));


