function AppReducer(state , action) {

    switch (action.type) {
        case 'add_text':
            return addText(state , action);
        case 'delete_text' :
            return deleteText(state , action);
        case 'edit_text' :
            return editText(state , action);
        case 'cash' : {
            return action.payload
        }
        default:
            return state; 
    }
}

export default AppReducer;


let addText = (state , action) => {
    let {text} = action.payload

        return {
            message : [
                ...state.message,
                { 
                    key : Date.now(),
                    info : JSON.parse(localStorage.getItem("user")),
                    text ,
                    date : new Date(),
                    score: 0,
                }
            ]
        }
}



let deleteText = (state , action) => {
    let { key } = action.payload

        return {
            message : state.message.filter(item => item.key !== key)
        }

}


let editText = (state , action) => {

    let { key , text} = action.payload;

    let { message } = state;

    let item = message.find(item => item.key === key);
    item.text = text ;

    let newMessage = message.sort(item => item.key !== key);

    return {
        message : [
            ...newMessage
        ]
    }
}

