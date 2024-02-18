import { greet } from "./greet";
import { DateTime } from "luxon";
import { hamburger } from "./hamburger";
import { substractNumbers as substract } from "./substract";
import { arrayElementsAddition } from "./array";
import { fetch } from "./fetch";
import { checkTime } from './confetti.js';


/* funkcja powitalna */
const greetKrzysiek = greet("Krzysiek", 30);
console.log(greetKrzysiek);

/* funkcja uzupełniająca treść elementu */
const emptyArticle = document.querySelector('.article__content--js');
emptyArticle.innerHTML = 'Ten tekst pojawił się dzięki JS';

/* wykorzystanie zaimportowanej funkcji */
console.log(substract(4, 2))

/* obsługa zegarów - biblioteka luxon */
document.querySelectorAll('.timezone').forEach((element) => {
  const timezone = element.getAttribute('data-timezone');
  const filledSpace = element.querySelector('.timezone__data');

  function updateTime() {
    let date;
    if (timezone === 'local') {
      date = DateTime.local();
    } else {
      date = DateTime.local().setZone(timezone);
    }
    filledSpace.innerHTML = date.toLocaleString(DateTime.TIME_24_WITH_SECONDS);
  }

  updateTime();
  setInterval(updateTime, 1000);
});

/* funkcja wykorzystujące pętle i tablice */
const functionArray = [1, 2, 56, 91, 4];
arrayElementsAddition(functionArray);

/*Confetti*/

setInterval(checkTime, 1000);