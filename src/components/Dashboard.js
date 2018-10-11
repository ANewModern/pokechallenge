import React from 'react'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            poke = {}
        };
    }
    componentDidMount() {
        this.genList();
    }
    genList = () => {
        let list = [];
        let i = 1;
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then(res => res.json())
            .then(data => {
                const pokemon = data;
                // console.log(pokemon.results);
                pokemon.results.forEach(poke => {
                    // console.log(poke.name);
                    list.push(<li key={i} className='list__item'><button className='poke__button' onClick={(i) => this.handleClick(i)}>{poke.name}</button></li>);
                    i++;
                });
                this.setState({ pokemon: list });
            })
            .catch(err => console.log(err));

    }
    handleClick = (num) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
            .then(res => res.json())
            .then(data => {

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

                </div>
            </div>
        );
    }
}