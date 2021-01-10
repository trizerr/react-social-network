import s from './User.module.scss';
import avatar from "../../../img/avatar.png";
import React from 'react';
import {NavLink} from "react-router-dom";
import * as axios from "axios";
const User =(props) =>{
    let button;
    if(props.followed===true){
         button = "Unfollow";
    }else{
        button = "Follow";
    }
    let click = () =>{
        if(props.followed===true){
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                {withCredentials : true,
                    headers : {  'API-KEY': '960a5064-17c0-4d42-9bc1-fb960b99d4ff' } }).then(
                response =>{
                    if(response.data.resultCode === 0){
                        props.unfollow(props.id);
                    }
                }
            );

        }else{
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,{},
                {withCredentials : true,
                    headers : {  'API-KEY': '960a5064-17c0-4d42-9bc1-fb960b99d4ff' } }).then(
                response =>{
                    if(response.data.resultCode === 0){
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