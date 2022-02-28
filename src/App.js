import React, {useEffect , useReducer} from "react"
import SelectUser from "./pages/SelectUser"
import Comment from "./pages/Comment"
import { BrowserRouter, Route , Routes} from "react-router-dom"
import Context from "./context/Context"
import AppReducer from "./reducer/appReducers"



const App = () => {

    const user = [
        {
            Image : require("./assets/avatars/image-maxblagun.png"),
            name : "Jack",
            id : 1,
        },
        {
            Image : require("./assets/avatars/image-amyrobson.png"),
            name : "Mary",
            id : 2,
        },
        {
            Image : require("./assets/avatars/image-juliusomo.png"),
            name : "Robert",
            id : 3,
        }
    ]


    const[state , dispatch] = useReducer(AppReducer , ({
        message : []
    }))


    useEffect(() => {
        const data = localStorage.getItem("save");
        if(!data) return;
        dispatch({ type: "cash", payload: JSON.parse(data) });
    }, []);
    
    
    useEffect(() => {
        localStorage.setItem("save" , JSON.stringify(state));
    })



    return (
        <div>
            <BrowserRouter>
                <Context.Provider value={{
                    message : state.message,
                    user : user,
                    dispatch,
                }}>
                     <Routes>
                         <Route exact path="/" element={<SelectUser/>}/>
                         <Route  path="/Comment" element={<Comment/>}/>
                     </Routes>
                 </Context.Provider>
            </BrowserRouter>
        </div>
     )
}

export default App;

