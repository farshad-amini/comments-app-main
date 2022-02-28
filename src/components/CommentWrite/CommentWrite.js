import React, {useState , useContext} from "react"
import s from "./CommentWrite.module.css"
import Context from "../../context/Context"

const CommentWrite = () => {

  const [text , setText] = useState("");
  const Contexts = useContext(Context);

  let user = JSON.parse(localStorage.getItem("user"))

  let textHandler = (e) => setText(e.target.value)

  let sendHandler = (e) => {
    e.preventDefault()
    Contexts.dispatch({type : 'add_text' , payload : {text}})
    setText("")
  }


  return (
    <div className={s.section_write}>
        <div className={s.container_form}>
            <form id={s.form}>
                <div className={s.comments_img}>
                    <img src={user.src}/>
                </div>
                <textarea value={text} onChange={textHandler} className={s.textarea} rows="4" cols="50" name="comment" placeholder="Add comment..."></textarea>
                <button onClick={sendHandler} className={s.btn_send}>SEND</button>
            </form>
        </div>
    </div>
  )
}

export  { CommentWrite };
