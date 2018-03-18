import { combineReducers } from "redux";
// import isAuthenticated from "./authenticationReducer";
// import pendingActions from "./pendingActionsReducer";
import { BlackJackStateInterface } from "store/BlackJackStateInterface";

const rootReducer = combineReducers<BlackJackStateInterface>({
});

export default rootReducer;