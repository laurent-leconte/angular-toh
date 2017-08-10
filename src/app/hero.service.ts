import { Injectable } from '@angular/core';

import { Hero } from './hero'
import {HEROES} from './mock-heroes'

@Injectable()
export class HeroService {

  constructor() {
    console.log('inside hero service constructor');
    for (let hero of HEROES) {
      hero.power = Math.floor(Math.random()*100) + 1;
    }
    console.log('heroes : ' + JSON.stringify(HEROES));
  }

  ngOnInit(): void {
    for (let hero of HEROES) {
      hero.power = Math.floor(Math.random()*100) + 1;
      console.log('hero: ' + JSON.stringify(hero));
    }
  }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}
