import React, {useContext} from "react";
import { CommentItem , CommentWrite } from "../components";
import Context from "../context/Context";


const Comment = () => {

    const Contexts = useContext(Context)
    let {message} = Contexts


    return (
        <div>
            {
                message.map( (item) => <CommentItem key={item.key} item={item}/>)
            }
            <CommentWrite/>
        </div>
    )

}

export default Comment;