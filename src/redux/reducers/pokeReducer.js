import actionTypes from "../actions/actionTypes";

export default function pokeReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.LOAD_POKEMONS:
            return { ...state, pokemonList: action.actionPokemonList };

        case actionTypes.LOAD_POKEMONS_ERROR:
            return { ...state, stateError: action.actionError };

        case actionTypes.INCREMENT_LOADING_COUNTER:
            debugger;
            const coso = { ...state, loadingCount: ++state.loadingCount };
            return coso;

        case actionTypes.DECREMENT_LOADING_COUNTER:
            const coso2 = { ...state, loadingCount: --state.loadingCount };
            debugger;
            return coso2;

        default:
            return state;
    }
}
