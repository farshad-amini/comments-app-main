import s from "./ButtonEdite.module.css"
import React, {useState} from "react"

const ButtonEdite = (props) =>{

    const [text , setText] = useState(props.text)

    let inputHandler = e => setText(e.target.value)


    return (
        <div className={s.section_edite}>
            <textarea type="text" value={text} onChange={inputHandler}></textarea>
            <button className={s.btn_update} onClick={() => props.edit(text)}>Update</button>
        </div>
    )
}

export {ButtonEdite}