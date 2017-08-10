import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  power:0, name: 'Zero' },
      { id: 11, power:0, name: 'Mr. Nice' },
      { id: 12, power:0, name: 'Narco' },
      { id: 13, power:0, name: 'Bombasto' },
      { id: 14, power:0, name: 'Celeritas' },
      { id: 15, power:0, name: 'Magneta' },
      { id: 16, power:0, name: 'RubberMan' },
      { id: 17, power:0, name: 'Dynama' },
      { id: 18, power:0, name: 'Dr IQ' },
      { id: 19, power:0, name: 'Magma' },
      { id: 20, power:0, name: 'Tornado' }
      { id: 21, power:0, name: 'Even Dozen'}
    ];
    return {heroes};
  }
}