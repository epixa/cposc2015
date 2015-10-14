'use strict';

import getJSON from './get-json';

export class Person {
  constructor(name) {
    this.name = name;
    this.repos = [];
  }

  get repoUrl() {
    return `https://api.github.com/users/${this.name}/repos?per_page=100`;
  }

  toString() {
    return this.name;
  }

  load() {
    return getJSON(this.repoUrl).then(repos => {
      this.repos = repos;
      return this;
    });
  }

  rank() {
    return this.repos.length;
  }

  ties(person) {
    return this.rank() === person.rank();
  }

  beats(person) {
    return this.rank() > person.rank();
  }
}
