'use strict';

// load the given persons and fight!
export default function battle(a, b) {
  return Promise
    .all([ a.load(), b.load() ])
    .then(([ a, b ]) => winner(a, b));
}

// who is the winner?
// null means no one wins, it is a tie
function winner(a, b) {
  if (a.ties(b)) {
    return null;
  }
  return a.beats(b) ? a : b;
}
