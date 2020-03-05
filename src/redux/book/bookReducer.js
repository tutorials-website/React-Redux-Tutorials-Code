import {BUY_BOOK} from './bookType';
const initialState={
    numberOfBooks:15
}

const bookReducer=(state=initialState, action)=>{

    switch(action.type){
        case BUY_BOOK:return{
            ...state,
            numberOfBooks:state.numberOfBooks-1
        }
        default:return state;
    }
}

export default bookReducer;