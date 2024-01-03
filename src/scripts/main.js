import { greet } from "./greet";
import { hamburger } from "./hamburger";

const greetKrzysiek = greet("Krzysiek", 30);
console.log(greetKrzysiek);

const emptyArticle = document.querySelector('.article__content--js');
emptyArticle.innerHTML = 'Ten tekst pojawił się dzięki JS';