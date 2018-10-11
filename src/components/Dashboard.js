import React from 'react';
import Pokemon from '../classes/PokemonClass';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            poke: {}
        };
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        this.genList();
        this.handleClick(1);
    }
    genList = () => {
        // let list = [];
        // let i = 1;
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then(res => res.json())
            .then(data => {
                const pokemon = data;
                // console.log(pokemon.results);
                // pokemon.results.forEach(poke => {
                //     // console.log(poke.name);
                //     list.push(<li key={i} className='list__item'><button className='poke__button' onClick={(i) => this.handleClick(i)}>{poke.name}</button></li>);
                //     i++;
                // });
                let list = pokemon.results.map((poke, i) => {
                    if (i < 802) {
                        return <li key={i} className='list__item'><button className='poke__button' onClick={(e) => this.handleClick(i+1)}>{poke.name}</button></li>
                    } else {
                        console.log(i+9198);
                        return <li key={i} className='list__item'><button className='poke__button' onClick={(e) => this.handleClick(i+9199)}>{poke.name}</button></li>
                    }
                    
                })
                this.setState({ pokemon: list });
            })
            .catch(err => console.log(err));

    }
    handleClick = (num) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
            .then(res => res.json())
            .then(data => {
                const pokemon = new Pokemon(data);
                this.setState({ poke: pokemon });
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div className='dashboard'>
                <h1 className='dashboard__title'>PokeChallenge</h1>
                <div className='dashboard__container--list'>
                    <ul className='dashboard__list'>
                        {this.state.pokemon}
                    </ul>
                </div>
                <div className='dashboard__container--pokemon'>
                    <img src={this.state.poke.sprite} alt='pokemon' />
                </div>
            </div>
        );
    }
}