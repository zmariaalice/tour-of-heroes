import { Injectable } from '@angular/core';
import { Hero } from 'src/app/hero'
import { HEROES } from 'src/app/mock-heroes'
import { Observable, of } from 'rxjs';
import { MessageService } from 'src/app/services/message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
