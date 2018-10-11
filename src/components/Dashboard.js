import React from 'react';
import Pokemon from '../classes/PokemonClass';
import RenderPokemon from './Pokemon';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [], // stores the list of pokemon currently available
            poke: {}, // specific pokemon clicked on
            // index: 1 // index of pokemon chosen
        };
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        this.genList(); // fetches the list  of pokemon
        this.handleClick(1); // fetches the first pokemon in the list
    }
    genList = () => { // function to fetch all pokemon data
        fetch(`https://pokeapi.co/api/v2/pokemon/`) 
            .then(res => res.json())
            .then(data => {
                const pokemon = data;
                let list = pokemon.results.map((poke, i) => {
                    if (i < 802) { // the api just from 802 to 10001  here
                        return <li key={i} className='list__item'><button className='poke__button' onClick={(e) => this.handleClick(i+1)}>{poke.name}</button></li>
                    } else {
                        return <li key={i} className='list__item'><button className='poke__button' onClick={(e) => this.handleClick(i+9199)}>{poke.name}</button></li>
                    }
                    
                })
                this.setState({ pokemon: list });
            })
            .catch(err => console.log(err));

    }
    handleClick = (num) => { // fetches the pokemon clicked on here
        fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
            .then(res => res.json())
            .then(data => {
                const pokemon = new Pokemon(data);
                console.log(pokemon);
                this.setState({ poke: pokemon });
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div className='dashboard'>
                <div className='dashboard__container--list'>
                    <ul className='dashboard__list'>
                        {this.state.pokemon}
                    </ul>
                </div>
                <div className='dashboard__container--pokemon'>
                    <RenderPokemon pokemon={this.state.poke} />
                </div>
            </div>
        );
    }
}