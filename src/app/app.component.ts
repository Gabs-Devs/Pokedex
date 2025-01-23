import { Component } from '@angular/core';
import { Pokemon } from 'src/modules/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex';
  logo = "../assets/logo.png";
  imgProfile: String = "../assets/imgProfile.png";
  links: String[] = ['Home', 'Pokedex', 'Video Game', 'Card Games', 'Eventos'];
  pokemons: Pokemon[] = [
    new Pokemon(1, 'Pikachu', ['Eletrico'], 'Pikachu é um tipo de Pokémon elétrico os bolsos em suas bochechas, identificado por discos vermelhos que decoram, são capazes de gerar choques elétricos de intensidade variável, chegando até o nível de poder de um raio. Eles também o usam para se defender.', '../assets/pikachu.png'),
    new Pokemon(2, 'Bulbassauro', ['Grama', 'Veneno'], 'Bulbasaur é um Pokémon bonito nascido com uma grande semente solidamente fixado à sua volta, a semente cresce em tamanho como o Pokémon tem.', '../assets/Bulbasaur.webp'),
    new Pokemon(3, 'Charmander', ['Fogo'], 'A chama que arde na ponta da cauda é uma indicação das suas emoções. A chama vacila quando Charmander está desfrutando de si mesmo. Se o Pokémon fica furioso, a chama queima ferozmente.', '../assets/charmander.png'),
    new Pokemon(4, 'Gengar', ['Fantasma', 'Veneno'], 'Para roubar a vida do seu alvo, ele se esconde na sombra da presa e espera silenciosamente por uma oportunidade.', '../assets/Gengar.jpg'),
    new Pokemon(5, 'Mimikyu', ['Fantasma', 'Fada'], 'Um Pokémon solitário, Mimikyu está sempre coberto por seu disfarce. Não se sabe como é a verdadeira aparência de Mimikyu. Como este Pokémon é enfraquecido pela luz do sol, há rumores de que o véu é usado para proteção.', '../assets/Mimikyu.png'),
    new Pokemon(6, 'Dragapult', ['Fantasma', 'Dragao'], 'Dragapult pode tornar todo o seu corpo transparente, limpando sua mente e concentrando-se. Até mesmo o Dreepy nos chifres do Dragapult fica invisível.', '../assets/Dragapult.webp'),
    new Pokemon(7, 'Mudkip', ['Agua'], 'A barbatana na cabeça do Mudkip funciona como um radar altamente sensível. Usando esta barbatana para sentir os movimentos da água e do ar, este Pokémon pode determinar o que está acontecendo ao seu redor sem usar os olhos.', '../assets/Mudkip.jpg'),
    new Pokemon(8, 'Swampert', ['Agua', 'Terra'], 'Swampert é muito forte. Tem potência suficiente para arrastar facilmente uma pedra pesando mais de uma tonelada. Este Pokémon também possui uma visão poderosa que lhe permite enxergar mesmo em águas turvas.', '../assets/Swampert.webp'),
    new Pokemon(9, 'Torchic', ['Fogo'], 'Torchic segue seu treinador, seguindo atrás com passos instáveis. Este Pokémon cospe fogo a mais de 1.800 graus Fahrenheit, incluindo bolas de fogo que deixam o inimigo chamuscado de preto.', '../assets/Torchic.png'),
    new Pokemon(10, 'Blaziken', ['Fogo', 'Lutador'], 'Na batalha, Blaziken solta chamas intensas de seus pulsos e ataca os inimigos com coragem. Quanto mais forte o inimigo, mais intensamente os pulsos deste Pokémon queimam.', '../assets/Blaziken.webp'),
    new Pokemon(11, 'Ratata', ['Normal'], 'Mastigará qualquer coisa com suas presas. Se você vir um, pode ter certeza de que mais 40 vivem na área.', '../assets/Rattata.webp'),
    new Pokemon(12, 'Mankey', ['Lutador'], 'Vive em grupos nas copas das árvores. Se perder de vista o seu grupo, ficará furioso com a sua solidão.', '../assets/Mankey.webp'),
    new Pokemon(13, 'Rayquaza', ['Dragao', 'Voador'], 'Diz-se que Rayquaza viveu centenas de milhões de anos. Permanecem lendas sobre como isso pôs fim ao confronto entre Kyogre e Groudon.', '../assets/Rayquaza.png'),
    new Pokemon(14, 'Groudon', ['Terra'], 'Dizem que Groudon é a personificação da própria terra. As lendas contam sobre seus muitos confrontos contra Kyogre, enquanto cada um procurava obter o poder da natureza.', '../assets/Groudon.png'),
    new Pokemon(15, 'Kyogre', ['Agua'], 'Através da Reversão Primal e com todo o poder da natureza, ele recuperará sua verdadeira forma. Pode convocar tempestades que fazem com que o nível do mar suba.', '../assets/Kyogre.png'),
    new Pokemon(16, 'Deoxys', ['Psiquico'], 'O DNA de um vírus espacial sofreu uma mutação repentina após exposição a um raio laser e resultou em Deoxys. O órgão cristalino no peito deste Pokémon parece ser o seu cérebro.', '../assets/Deoxys.webp'),
    new Pokemon(17, 'Mew', ['Psiquico'], 'Quando visto através de um microscópio, o cabelo curto, fino e delicado deste Pokémon pode ser visto.', '../assets/Mew.png'),
    new Pokemon(18, 'Mewtwo', ['Psiquico'], 'Seu DNA é quase igual ao de Mew. No entanto, seu tamanho e disposição são muito diferentes.', '../assets/Mewtwo.jpg'),
    new Pokemon(19, 'Victini', ['Fogo', 'Psiquico'], 'Este Pokémon traz vitória. Diz-se que os Treinadores com Victini sempre vencem, independente do tipo de encontro.', '../assets/Victini.jpg'),
    new Pokemon(20, 'Celebi', ['Psiquico', 'Grama'], 'Este Pokémon veio do futuro atravessando o tempo. Pensa-se que enquanto Celebi aparecer, um futuro brilhante e brilhante nos aguarda.', '../assets/Celebi.png'),
  ];
  selectedPokemon?: Pokemon;

  showDetails(pokemon: Pokemon){
    this.selectedPokemon = pokemon
  }
  closeModal(){
    this.selectedPokemon = undefined;
  }

  filterValue: string= '';
  filteredPokemons(): Pokemon[] {
    if (!this.filterValue){
      return this.pokemons;
    }
    return this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.filterValue.toLowerCase()));
  }
}


