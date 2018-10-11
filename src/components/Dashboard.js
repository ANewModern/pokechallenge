import React from 'react'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: {}
        };
    }
    genList = () => {
        let list = [];
        for (let i = 1; i <= 151; i++) {
            list.push(<li key={i} className='list__item'><button className='pokeButton'>{i}</button></li>);
        }
        return list;
    }
    render() {
        return (
            <div className='dashboard'>
                <h1 className='dashboard__title'>PokeChallenge</h1>
                <div className='dashboard__container--list'>
                    <ul className='dashboard__list'>
                        {this.genList()}
                    </ul>
                </div>
                <div className='dashboard__container--pokemon'>

                </div>
            </div>
        );
    }
}