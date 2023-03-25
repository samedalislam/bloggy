const Reducer = (state, action) =>{
    switch(action.type){
        case 'LOGIN_START':
            return{
                user: null,
                iseFetching: true,
                error: false
            };
        case 'LOGIN_SUCCESS':
            return{
                user: action.payload,
                iseFetching: false,
                error: false
            };
        case 'LOGIN_FAILURE':
            return{
                ...state,
                iseFetching: true,
                error: false
            };
        case 'UPDATE_START':
            return{
                user: null,
                iseFetching: true,
                error: false
            };
        case 'UPDATE_SUCCESS':
            return{
                user: action.payload,
                iseFetching: false,
                error: false
            };
        case 'UPDATE_FAILURE':
            return{
                user: state.user,
                iseFetching: false,
                error: true
            };
        case 'LOGOUT':
            return{
                user: null,
                iseFetching: false,
                error: false
            };
        default:
            return state
    }
}

export default Reducer