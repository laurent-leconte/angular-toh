import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero'
import {HEROES} from './mock-heroes'

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(private http: Http) {
    console.log('inside hero service constructor');
    for (let hero of HEROES) {
      hero.power = Math.floor(Math.random()*100) + 1;
    }
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
                .toPromise()
                .then(response => response.json().data as Hero[])
                .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Oopsy daisies, I fell on my ass', error);
    return Promise.reject(error.message || error);
  }


  getStaticHeroes(): Promise<Hero[]> {
    HEROES.sort(function (h1, h2) {return h2.power - h1.power});
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
