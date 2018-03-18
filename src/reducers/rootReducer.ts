import { combineReducers } from 'redux';
// import isAuthenticated from "./authenticationReducer";
// import pendingActions from "./pendingActionsReducer";
import BlackJackStateInterface from './../interfaces/BlackJackStateInterface';

const rootReducer = combineReducers<BlackJackStateInterface>({
});

export default rootReducer;