/*
ao clicar no pokémon da listagem, temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.

pra isso, vamos precisar trabalhar com dois elemntos:
1 - listagem;
2 - cartão do pokémon.

precisamos criar duas variáveis no JS pra trabalhar com os elemntos da tela. 

vamos precisar trabalhar com um evento de clique feito pelo  usuário na listagem de pokémons.

- remover a classe aberto só do cartão que está aberto;
- ao clicar em pokémon da listagem, pegamos o id desse pokémo pra saber qual cartão mostrar;
- remover a classe ativa, que marca o pokémon selecionado;
- adicionar classe no intem da lista selecionado.
*/

// precisamos criar duas variáveis no JS pra trabalhar com os elemntos da tela.
const listaSelecaoPokemons =  document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    // vamos precisar trabalhar com um evento de clique feito pelo  usuário na listagem de pokémons.
    pokemon.addEventListener('click', () => {
        // remover a classe aberto só do cartão que está aberto;
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // ao clicar em pokémon da listagem, pegamos o id desse pokémo pra saber qual cartão mostrar;
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativa, que marca o pokémon selecionado;
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar classe no intem da lista selecionado.
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})