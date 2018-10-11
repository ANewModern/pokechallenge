import React from 'react'

const RenderPokemon = (props) => (
    <div className='pokemon__container'>
        <h1 className='pokemon__title'>{props.pokemon.name}</h1>
        <img className='pokemon__sprite' src={props.pokemon.sprite} alt={props.pokemon.name} />
        <p className='pokemon__id'>{props.pokemon.id}</p>
        <p className='pokemon__text'>{props.pokemon.type}</p>
    </div>
);

export default RenderPokemon;