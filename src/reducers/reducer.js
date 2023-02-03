const initialState = {
    userData:{}
}
const appReducer = (state=initialState,action)=>{
    console.log(action)
    switch(action.type) {
        
        case 'SETDATA':
            return{
                ...state,
                userData:action.userData
                
            }
        default:
            return state
    }
   
}
export default appReducer