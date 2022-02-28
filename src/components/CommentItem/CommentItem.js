import React,{useState , useContext} from "react";
import s from "./CommentItem.module.css"
import {ButtonEdite} from "..";
import Context from "../../context/Context";


const CommentItem = ({item}) => {
   
    const [vote , setVote] = useState(false)

    const [score, setScore] = useState(item.score);

    const [timer , setTimer] = useState()

    const [edit , setEdit] = useState(false);

    let id = JSON.parse(localStorage.getItem("id"));

    const Contexts = useContext(Context)

   

    let CurrentUser = () => {
        if (item.info.id === id) {
           return "you"
        }else {
           return ""
        }
    }

    let timeHandler = () => {
        const  Duration = require("duration");
        const duration = new Duration(new Date(item.date), new Date());


        if (duration.years >=1 ) {
            return duration.years+" years ago"
        }else if (duration.months >=1 ) {
            return duration.months+" months ago"
        }else if (duration.days >=1 ) {
            return duration.days+" days ago"
        }else if (duration.hours >=1 ) {
            return duration.hours+" hours ago"
        }else if (duration.minutes >=1 ) {
            return duration.minutes+" minutes ago"
        }else {
            return duration.seconds+" seconds ago"
        }
    }

    setInterval(() => {
        setTimer(timeHandler)
    }, 1000);


    let editHandler = text => {
        Contexts.dispatch({type : 'edit_text' , payload : {key : item.key , text}})
        setEdit(false)
    }

    let upHandler = () => {
        if (vote === false) {
            let n = score + 1
            setScore(n)
            setVote(true)
        }
    }

    let downHandler = () => {
        if (vote === true) {
            let n = score - 1
            setScore(n)
            setVote(false)
        }
    }


    return (
        <div>
            <div className={s.section_item}>
                    <div className={s.container_item}>
                            <div className={s.container_vote}>
                                <button onClick={upHandler} className={s.plus}><i className="icon-plus"></i></button>
                                <p className={s.vote_number}>{score}</p>
                                <button onClick={downHandler} className={s.minus}><i className="icon-minus"></i></button>
                            </div>
                            <div className={s.container_text}>
                                <div className={s.Information}>
                                     <img src={item.info.src}/>
                                    <div className={s.user_name}><p>{item.info.name}</p></div>
                                    <h2 className={s.mention}>{CurrentUser()}</h2>
                                    <div className={s.date}><p>{timer}</p></div>
                                    <div className={s.position_btn}>
                                        {
                                            item.info.id === id ? 
                                                <>
                                                    <button onClick={() => Contexts.dispatch({type : 'delete_text' , payload :{key : item.key}})} className={s.container_delete}>
                                                        <i className="icon-delete"></i>
                                                        <p className={s.text_delete}>Delete</p>
                                                    </button>
                                                    <button onClick={() => setEdit(true)} className={s.container_edit}>
                                                        <i className="icon-edit"></i>
                                                        <p className={s.text_edit}>Edit</p>
                                                    </button>
                                                </>
                                                : 
                                                <div className={s.container_reply}>
                                                    <button className={s.btn_reply}><i className="icon-reply"></i> Reply</button>
                                                </div>
                                        }
                                    </div>
                                </div>
                                    {
                                        ! edit
                                            ?(
                                                <p className={s.text}>
                                                    {item.text}
                                                </p>
                                            )
                                            :
                                                <ButtonEdite text={item.text} edit={editHandler}/>
                                    }
                            </div>
                    </div>
            </div>
        </div>
    )
}

export { CommentItem }