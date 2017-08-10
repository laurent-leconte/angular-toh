import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  power:0, name: 'Zero', superpower: 'creates NaNs when he gets divisive' },
      { id: 11, power:0, name: 'Mr. Nice', superpower: 'Too nice for his own good' },
      { id: 12, power:0, name: 'Narco', superpower: 'Sleeps the night away' },
      { id: 13, power:0, name: 'Bombasto' },
      { id: 14, power:0, name: 'Celeritas' },
      { id: 15, power:0, name: 'Magneta' },
      { id: 16, power:0, name: 'RubberMan' },
      { id: 17, power:0, name: 'Dynama' },
      { id: 18, power:0, name: 'Dr IQ', superpower: 'Smarter than you' },
      { id: 19, power:0, name: 'Magma', superpower: 'Damned if I know' },
      { id: 20, power:0, name: 'Tornado', superpower: 'Farts of steel' }
      { id: 21, power:0, name: 'Even Dozen', superpower: 'Likes round numbers'}
    ];
    return {heroes};
  }
}