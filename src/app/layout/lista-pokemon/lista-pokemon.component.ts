import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from '../../service/api-pokemon.service'
import { Cards } from '../../interface/pokemon'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {
  cards:Cards
  formSearch: FormGroup
  constructor(private pokemonService:ApiPokemonService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formSearch = this.fb.group({
      search: ['',Validators.required] 
    })
    this.getPokemon()
  }
  getPokemon(){
    this.pokemonService.getPokemon().subscribe((cards:Cards)=>{
    this.cards = cards
    
      
    })
  }
  getPokemonByName(){
    this.pokemonService.getPokemonByName(this.formSearch.get('search').value).subscribe((cards:Cards)=>{
    this.cards = cards
    
      
    })
  }

}
