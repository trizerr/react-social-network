import User from "./User/User";
import s from "./Users.module.scss";
import React from "react";

const Users = (props) =>{
    let pages =[];
    for(let i=1; i<=5;i++){
        props.currentPage-i<=0 ? pages.push(i) : pages.unshift(props.currentPage-i);
    }
    for(let i=1; i<=5;i++){
        props.currentPage<=5 ? pages.push(i+5) : pages.push(i+props.currentPage-1);
    }
    let userElements = props.users.map(
        u =><User name={u.name} followed={u.followed} description={u.status} photo ={u.photos.small}
                  country={u.country} city={u.city} id={u.id} follow={props.follow} unfollow={props.unfollow} key = {u.id}/>);
    return(
        <div className={s.users}>
            {userElements}
            {  pages.map(p =>{
                return <input type="button" value={p} className={props.currentPage === p && s.activeLink}
    onClick={(e) => {
        props.pageChanged(p);
    }}/>
            })}
        </div>
    );
}

export default Users;