import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
    incrementLoadingCounter,
    decrementLoadingCounter,
    loadPokemons,
} from "../../redux/actions/pokeActions";

import PokemonCard from "../PokemonCardComponent/PokemonCard";

import "./PokemonList.css";

function PokemonList({ pokemonList, loadingCount, dispatch, actions }) {
    if (!pokemonList && !pokemonList?.length) {
        actions.incrementLoadingCounter();
        dispatch(loadPokemons());
    }

    const loadingWrapper = (
        <>
            <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDI5YjhiZDktY2I1YS00MWU0LTljN2UtZWU1MTZmYWNlOWJiXC9kYXlvM293LTdhYzg2YzMxLThiMmItNDgxMC04OWYyLWU2MTM0Y2FmMWYyZC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.LJBxDkRocQStjZpmj9Injfv73mG2SQZ8X6HNdlP5WHw"
                alt="loading"
            />
            <p>Loading pokemon list...</p>
        </>
    );

    const pokemonListWrapper = (
        <>
            <h1>Pokedex</h1>
            <div className="pokemon-list">
                {pokemonList &&
                    pokemonList.length &&
                    pokemonList.map((currentPokemon) => {
                        return (
                            <PokemonCard
                                key={currentPokemon.data.name}
                                pokemonData={currentPokemon.data}
                            />
                        );
                    })}
            </div>
        </>
    );

    return loadingCount > 0 ? loadingWrapper : pokemonListWrapper;
}

function mapStateToProps(state) {
    return {
        pokemonList: state.pokeReducer.pokemonList,
        pokemonCount: state.pokeReducer.pokemonCount,
        loadingCount: state.pokeReducer.loadingCount,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            { incrementLoadingCounter, decrementLoadingCounter, loadPokemons },
            dispatch
        ),
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
