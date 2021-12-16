let rURL = 'https://matthe68.github.io/ChamberOfCommerce/json/board-of-directors.json';

fetch(rURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const board = jsonObject['board-of-directors'];
    var firstItem = true;
    for (let i = 0; i < board.length; i++ ) {
      console.log("card #", i,": ", board[i].business);
      let card = document.createElement('section');//card
      let image = document.createElement('img');//face picture
      let div = document.createElement('div');//board member info holder
      let p1 = document.createElement('p');//name
      let p2 = document.createElement('p');//info
      let image2 = document.createElement('img');//logo

      image.src = String(`${board[i].image}`);
      image.alt = String(`${board[i].name} - photo`);
      image.width = "150";
      image.height = "200";
      p1.innerHTML = String(`${board[i].name}`);
      p1.classList.add('bold');
      p2.innerHTML = String(`${board[i].titles}`);
      image2.src = String(`${board[i].icon}`);
      image2.alt = String(`${board[i].name} - icon`);
      image2.height = 25;
      card.classList.add("board-of-director-card")

      card.appendChild(image);
      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(image2);
      card.appendChild(div);

      card.classList.add('article');

      document.querySelector('#board-members').appendChild(card);
      firstItem = false;
    }
  });
