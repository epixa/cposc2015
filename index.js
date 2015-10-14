'use strict';

import { Person } from './person';
import battle from './battle';

const personA = new Person('epixa');
const personB = new Person('nicksergeant');

battle(personA, personB)
  .then(winner => console.log(`The winner is ${winner}!`))
  .catch(err => console.error(':(', err));
