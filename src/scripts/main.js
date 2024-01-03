import { greet } from "./greet";
import { hamburger } from "./hamburger";

const greetKrzysiek = greet("Krzysiek", 30);
console.log(greetKrzysiek);

const emptyArticle = document.querySelector('.article__content--js');
emptyArticle.innerHTML = 'Ten tekst pojawił się dzięki JS';

document.querySelectorAll('.timezone').forEach(function(element) {
  const timezone = element.getAttribute('data-timezone');
  if (timezone === 'local') {
    const filledSpace = element.querySelector('.timezone__data');

    // Funkcja aktualizująca czas
    function updateLocalTime() {
      const localDate = new Date();
      filledSpace.innerHTML = localDate.toLocaleTimeString(); // Formatowanie czasu do czytelnej formy
    }

    updateLocalTime(); // Pierwsze ustawienie czasu
    setInterval(updateLocalTime, 1000); // Aktualizacja czasu co 1 sekundę
  }
});