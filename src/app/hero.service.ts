import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero'
import {HEROES} from './mock-heroes'

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
    //this.initHeroes();
  }

  initHeroes(): void {
    console.log('initializing heroes');
    this.getHeroes().then(heroes => {
      for (let hero of heroes) {
        hero.power = Math.floor(Math.random()*100) + 1;
        this.update(hero);
        console.log('updated hero: ' + JSON.stringify(hero))  
      }
    });
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
                .toPromise()
                .then(response => {
                  let heroes = response.json().data as Hero[];
                  heroes.sort(function (h1, h2) {return h2.power - h1.power});
                  return heroes;
                })
                .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
                .toPromise()
                .then(response => response.json().data as Hero)
                .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    const power = Math.floor(Math.random()*100) + 1;
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name, power: power}), {headers: this.headers})
      .toPromise()
      .then(resp => resp.json().data as Hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Oopsy daisies, I fell on my ass', error);
    return Promise.reject(error.message || error);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
}

//previous code for reference
  getStaticHeroes(): Promise<Hero[]> {
    HEROES.sort(function (h1, h2) {return h2.power - h1.power});
    return Promise.resolve(HEROES);
  }

  getStaticHero(id: number): Promise<Hero> {
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
