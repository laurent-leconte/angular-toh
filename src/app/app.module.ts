import { NgModule, APP_INITIALIZER }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import {FormsModule }           from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroService }          from './hero.service';
import { AppRoutingModule }     from './app-routing.module';
import { HeroSearchComponent }  from './hero-search.component';


function initHeroService(heroService: HeroService) {
  console.log('inside initHeroService');
  return () => heroService.initHeroes();
}

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [ 
    HeroService,
    { provide: APP_INITIALIZER,
      useFactory: initHeroService,
      deps: [HeroService],
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
