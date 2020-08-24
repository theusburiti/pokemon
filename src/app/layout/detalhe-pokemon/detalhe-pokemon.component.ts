import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiPokemonService } from 'src/app/service/api-pokemon.service';
import { Cards, Card } from 'src/app/interface/pokemon';

@Component({
  selector: 'app-detalhe-pokemon',
  templateUrl: './detalhe-pokemon.component.html',
  styleUrls: ['./detalhe-pokemon.component.css']
})
export class DetalhePokemonComponent implements OnInit {

  id
  card: any
  constructor(private activeRoute:ActivatedRoute,private pokemonService:ApiPokemonService) {
    this.id = this.activeRoute.snapshot.params.id
    this.getPokemonById(this.id)
   }

  ngOnInit(): void {
    
  }
  getPokemonById(id){
    this.pokemonService.getPokemonById(id).subscribe((card: any)=>{
    this.card = card.card
    
      
    })
  }

}
