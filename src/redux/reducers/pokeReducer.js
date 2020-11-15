import actionTypes from "../actions/actionTypes";

export default function pokeReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.LOAD_POKEMONS:
            return {
                ...state,
                pokemonList: action.actionPokemonList,
                loadingCount: false,
            };

        case actionTypes.LOAD_POKEMONS_ERROR:
            return { ...state, stateError: action.actionError };

        case actionTypes.SET_LOADING:
            return { ...state, loadingCount: true };

        default:
            return state;
    }
}
