const greet = (name, age) => `Witaj, nazywam się ${name} i mam ${age} lat`;
      const greetKrzysiek = greet("Krzysiek", 30);
      console.log(greetKrzysiek);

      const emptyArticle = document.querySelector('.article__content--js');
      emptyArticle.innerHTML = 'Ten tekst pojawił się dzięki JS';