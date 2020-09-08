
export default function(state={},action){
    
    switch(action.type){
        case 'USER_ADD' :
            return 'USER_ADD'

        default:
            return "state的状态"
    }
}