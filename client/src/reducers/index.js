import {combineReducers} from "redux"
import authreducer from '../reducers/auth.js'
import currentuserreducer from '../reducers/currentuse.js';
import usersreducer from '../reducers/users.js';
import questionreducer from '../reducers/question.js';

export default combineReducers({
    authreducer,
    currentuserreducer,
    usersreducer,
    questionreducer,
});