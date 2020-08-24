import { Injectable } from '@angular/core';
import { Cards } from '../interface/pokemon'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {
  urlBase: String = 'https://api.pokemontcg.io/v1/'
  constructor(private http:HttpClient) { }
  getPokemon():Observable<Cards>{
    const api =  `${this.urlBase}/cards`
    return this.http.get<Cards>(api)

  }
  getPokemonById(id):Observable<Cards>{
    const api =  `${this.urlBase}/cards/${id}`
    return this.http.get<Cards>(api)

  }
  getPokemonByName(name):Observable<Cards>{
  const api =  `${this.urlBase}/cards?name=${name}`
  return this.http.get<Cards>(api)

  }
}
  
