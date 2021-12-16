json = {"provo-events": [
  {
    "date": "12/25/2021",
    "name": "Christmas"
  },
  {
    "date": "12/31/2021",
    "name": "New Years Eve"
  },
  {
    "date": "1/1/2022",
    "name": "New Years"
  },
  {
    "date": "1/11/2022",
    "name": "United Ways of Utah"
  },
  {
    "date": "1/12/2022",
    "name": "General Membership Luncheon"
  },
  {
    "date": "3/22/2022",
    "name": "Utah Valley Job Fair"
  },
  {
    "date": "5/19/22",
    "name": "DigiMarCon Rocky Mountains 2022 - Digital Marketing, Media and Advertising Conference & Exhibition"
  },
  {
    "date": "5/20/22",
    "name": "DigiMarCon Rocky Mountains 2022 - Digital Marketing, Media and Advertising Conference & Exhibition"
  },
  {
    "date": "6/12/2021",
    "name": "General Membership Luncheon"
  },
]}
let events = json['provo-events'];
console.log("events: ", events);
let header = document.createElement('h1');
let eventsHolder = document.getElementById('upcoming-events');
header.innerHTML = "Upcoming Events";
header.classList.add('first-header');
eventsHolder.appendChild(header);

for (eachEvent in events) {
  let event = document.createElement('p');
  event.innerHTML = `${events[eachEvent].date}: ${events[eachEvent].name}`;
  eventsHolder.appendChild(event);
  console.log("event added!!!!");
}

