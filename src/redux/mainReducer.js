import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard126567Reducer from '../features/Dashboard126567/redux/reducers'
import CalendarView26566Reducer from '../features/CalendarView26566/redux/reducers';
import Dashboard126552Reducer from '../features/Dashboard126552/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard126567: Dashboard126567Reducer,
CalendarView26566: CalendarView26566Reducer,
Dashboard126552: Dashboard126552Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});