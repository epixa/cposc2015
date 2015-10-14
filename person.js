'use strict';

import getJSON from './get-json';

export class Person {
  constructor(name) {
    this.name = name;
    this.repos = [];
  }

  static endpoint(path) {
    return `https://api.github.com${path}`;
  }

  get url() {
    return Person.endpoint(`/users/${this.name}`);
  }

  get repoUrl() {
    return Person.endpoint(`/users/${this.name}/repos?per_page=100`);
  }

  toString() {
    return this.name;
  }

  load() {
    return Promise.all([
      getJSON(this.url),
      getJSON(this.repoUrl)
    ]).then(([user, repos]) => {
      this.avatar_url = user.avatar_url;
      this.repos = repos;
      return this;
    });
  }

  rank() {
    return this.repos.reduce((prev, current) => current.watchers + prev, 0);
  }

  ties(person) {
    return this.rank() === person.rank();
  }

  beats(person) {
    return this.rank() > person.rank();
  }
}
