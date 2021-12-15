let requestURL = 'https://matthe68.github.io/ChamberOfCommerce/json/home-businesses.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    const wantedBusinesses = ['Vivint, Inc.', 'Big Leap', 'Google Fiber'];
    var firstItem = true;
    for (let j = 0; j < wantedBusinesses.length; j++) {
      for (let i = 0; i < businesses.length; i++ ) {
        console.log(businesses[i].business);
        if(wantedBusinesses[j] == businesses[i].business) {
          let card = document.createElement('section');
          let div = document.createElement('div');
          let h2 = document.createElement('h2');
          let p1 = document.createElement('p');
          let p2 = document.createElement('p');
          let p3 = document.createElement('p');
          let image = document.createElement('img');

          h2.textContent = String(`${businesses[i].business}`);
          p1.innerHTML = String(`Contact Info`);
          p2.innerHTML = String(`Phone: ${businesses[i].telephone}`);
          p3.innerHTML = String(`Address: ${businesses[i].address}`);
          image.src = String(`./images/${businesses[i].logolocation}`);
          image.alt = String(`${businesses[i].business} - photo`);
          image.width = "250";

          div.appendChild(h2);
          div.appendChild(p1);
          div.appendChild(p2);
          div.appendChild(p3);
          card.appendChild(div);
          card.appendChild(image);
          let location =  String(`./${String(businesses[i].business).replace(' ', '-')}.html`);
          location = location.toLowerCase();
          console.log("location: ", location);
          function openLink(e) {
            e.preventDefault();
            window.location = location;
          }
          card.onclick = openLink;

          document.querySelector('#cards-container').appendChild(card);
          firstItem = false;
        }
      }
    }
  });

