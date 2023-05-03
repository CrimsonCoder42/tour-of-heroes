import { Component } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero = null;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
