import s from "./Users.module.css";
import { Link } from "react-router-dom";

const Users = (props) => {

    let userHandler = () => {
        localStorage.setItem("user" , JSON.stringify(props))
        localStorage.setItem("id" , JSON.stringify(props.id))
  
    }


    return (
        <div className={s.container_user}>
            <Link to={{
                pathname : '/comment',
                search : `?${props.name}`,
                hash : `#${props.id}`
            }}>
            <button onClick={userHandler} className={s.btn_user}>
                <img className={s.user1_img} src={props.src}/>
                <h2>{props.name}</h2>
            </button>
            </Link>
        </div>
        
    )
}

export {Users}
