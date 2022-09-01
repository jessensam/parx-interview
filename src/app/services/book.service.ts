import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import JsonData from '../../assets/example.json';
import { Nodes } from '../models/nodes.model';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  state$: Observable<Nodes[]>;
  private _state$: BehaviorSubject<Nodes[]>;
  constructor() {
    this._state$ = new BehaviorSubject([] as Nodes[]);
    this.state$ = this._state$.asObservable();
  }

  public getNodes(): Nodes[] {
    const data: Nodes[] = JsonData.data;
    this._state$.next(data);
    return this._state$.getValue();
  }
}
