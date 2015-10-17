'use strict';

import { Person } from './person';
import { render } from './render';
import { battle } from './battle';

const people = location.search
  .substr(1).split(',')
  .map(name => new Person(name));

const [ personA, personB ] = people;

battle(personA, personB)
  .then(winner => render(personA, personB, winner))
  .catch(err => console.error(':(', err));
