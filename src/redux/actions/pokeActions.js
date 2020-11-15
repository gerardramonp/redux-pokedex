import actionTypes from "./actionTypes";
import axios from "axios";
import { act } from "react-dom/test-utils";

export function incrementPokemonCount() {
    return {
        type: actionTypes.INCREMENT_POKEMON_COUNT,
    };
}

function loadPokemonsSuccess(actionPokemonList) {
    return {
        type: actionTypes.LOAD_POKEMONS,
        actionPokemonList,
    };
}

function loadPokemonsError(actionError) {
    return {
        type: actionTypes.LOAD_POKEMONS_ERROR,
        actionError,
    };
}

export function incrementLoadingCounter() {
    debugger;
    return {
        type: actionTypes.INCREMENT_LOADING_COUNTER,
    };
}

export function decrementLoadingCounter() {
    debugger;
    return {
        type: actionTypes.DECREMENT_LOADING_COUNTER,
    };
}

export function loadPokemons() {
    return async (dispatch) => {
        const endpoint = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";
        try {
            const pokemonList = await axios(endpoint);
            dispatch(loadPokemonDetails(pokemonList.data.results));
            //dispatch(loadPokemonsSuccess(pokemonList.data.results));
        } catch (error) {
            dispatch(loadPokemonsError(error));
        }
    };
}

function loadPokemonDetails(rawPokemonList) {
    return async (dispatch) => {
        let pokemonEndpoint = "";
        let detailedPokemon = {};
        let detailedPokemonList = [];
        try {
            for (let index = 0; index < rawPokemonList.length; index++) {
                pokemonEndpoint = rawPokemonList[index].url;
                try {
                    detailedPokemon = await axios(pokemonEndpoint);
                    detailedPokemonList = [
                        ...detailedPokemonList,
                        detailedPokemon,
                    ];

                    if (detailedPokemonList.length === rawPokemonList.length) {
                        dispatch(loadPokemonsSuccess(detailedPokemonList));
                        dispatch(decrementLoadingCounter());
                    }
                } catch (error) {
                    dispatch(loadPokemonsError(error));
                }
            }
        } catch (error) {
            dispatch(loadPokemonsError(error));
        }
    };
}

function deleteItemById(itemId) {
    const endpoint = `http://localhost:backPort/shopping-cart/delete/${itemId}`;
    axios.patch(endpoint);
}
