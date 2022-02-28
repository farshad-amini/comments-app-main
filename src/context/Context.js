import React from "react";

const Context = React.createContext({
    message: [],
    user: [],
    add : () => {},
    delete : () => {},
    edit : () => {},
})

export default Context;
