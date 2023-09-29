import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  protected characters$: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);

  constructor(private httpClient: HttpClient) {
    this.loadPage();
  }

  loadPage(page=1){
    this.httpClient.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .subscribe(({results}:any) => this.characters$.next(this.characters$.getValue().concat(results))
    );
  }

  get characters(): Observable<any[]> {
    return this.characters$.asObservable();
  }

  get count(): Observable<number> {
    return this.characters.pipe(map((characters: any[]) => characters.length));
  }

}
