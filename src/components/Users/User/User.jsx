import s from './User.module.scss';
import avatar from "../../../img/avatar.png";
import React from 'react';
const User =(props) =>{
    debugger;
    let array=['david','ann','peter','jhon'];
    let deleted=array.splice(1,2);
    console.log(deleted);
    let button;
    if(props.followed===true){
         button = "Unfollow";
    }else{
        button = "Follow";
    }
    let click = () =>{
        debugger;
        if(props.followed===true){
            props.unfollow(props.id);
            debugger;
        }else{
            props.follow(props.id);
        }
    }
    return(
        <div className={s.user}>
            <img src={props.photo ? props.photo : avatar} className={s.avatar}/>
            <span className={s.name}> {props.name}</span>
            <span className={s.description}> {props.description ? props.description : 'default description'}</span>
            <span className={s.location}>{props.country ? props.country : 'Ukraine' }, {props.city ? props.city : 'Kyiv'}</span>
            <input type="button" value={button}  onClick={click}/>
        </div>
        );
}
export default User;