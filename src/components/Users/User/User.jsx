import s from './User.module.scss';
import avatar from "../../../img/avatar.png";
import React from 'react';
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersApi} from "../../../api/api";

const User =(props) =>{
    let button;
    if(props.followed===true){
         button = "Unfollow";
    }else{
        button = "Follow";
    }
    let click = () =>{
        if(props.followed===true){
           usersApi.unfollow(props.id).then(
                data =>{
                    if(data.resultCode === 0){
                        props.unfollow(props.id);
                    }
                }
            );
        }else{
            usersApi.follow(props.id).then(
                data =>{
                    if(data.resultCode === 0){
                        props.follow(props.id);
                    }
                }
            );
        }
    }
    return(
        <div className={s.user}>
            <NavLink to={'/profile/'+props.id}>
                <img src={props.photo ? props.photo : avatar} className={s.avatar}/>
            </NavLink>
            <span className={s.name}> {props.name}</span>
            <span className={s.description}> {props.description ? props.description : 'default description'}</span>
            <span className={s.location}>{props.country ? props.country : 'Ukraine' }, {props.city ? props.city : 'Kyiv'}</span>
            <input type="button" value={button}  onClick={click}/>
        </div>
        );
}
export default User;