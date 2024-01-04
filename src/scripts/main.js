import { greet } from "./greet";
import { hamburger } from "./hamburger";
import { DateTime } from "luxon";

const greetKrzysiek = greet("Krzysiek", 30);
console.log(greetKrzysiek);

const emptyArticle = document.querySelector('.article__content--js');
emptyArticle.innerHTML = 'Ten tekst pojawił się dzięki JS';

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