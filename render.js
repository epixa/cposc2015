'use strict';

// render the results
export function render(element, a, b, winner) {
  const loading = document.getElementById('loading');
  const tie = document.getElementById('tie');
  const people = document.getElementById('people');
  const personA = document.getElementById('person-a');
  const personB = document.getElementById('person-b');

  renderPerson(personA, a, winner === a);
  renderPerson(personB, b, winner === b);

  if (!winner) {
    tie.style.display = 'block';
  }

  people.style.display = 'block';
  loading.style.display = 'none';

  console.log(`The winner is ${winner}!`);
  console.log(`${a}:${a.rank()} ${b}:${b.rank()}`);
}

// render an individual person
export function renderPerson(element, person, isWinner) {
  const img = document.createElement('img');
  img.src = person.avatar_url;
  element.getElementsByTagName('avatar')[0].appendChild(img);
  element.getElementsByTagName('name')[0].innerHTML = person.name;
  element.getElementsByTagName('rank')[0].innerHTML = person.rank();

  if (isWinner) {
    element.className = 'winner';
  }
}
