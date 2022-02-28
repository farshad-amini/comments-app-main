import React , {useContext} from "react"
import { Users } from "../components";
import s from "../styles/section_user.module.css"
import Context from "../context/Context";


const SelectUser = () => {


    const Contexts = useContext(Context)
    let {user} = Contexts
    
  
    return (
        <div className={s.section_user}>
            {
                user.map( (item , index) => (
                    <Users key={index + 1} id={item.id} name={item.name} src={item.Image}/>
                ))
            }
        </div>
    )
    
}

export default SelectUser;