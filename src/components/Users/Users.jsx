import s from'./Users.module.scss'
import User from "./User/User";
import React from 'react';
import * as axios from 'axios';
let users =[
        {id:1, name:'Denys', followed:true, description:'Just another person', country:'Ukraine', city:'Kyiv'},
        {id:2, name:'Nazar', followed:false, description:'brother of Denys. Love anime', country:'Ukraine', city:'Lutsk'},
        {id:3, name:'Ben', followed:true, description:'oh sorry I am no real person', country:'Poland', city:'Warsaw'},
        {id:4, name:'Bill', followed:true, description:'Hi! I am Gates. Love this soc. network', country:'USA', city:'Las Vegas'},
    ];
class Users extends React.Component{
    constructor(props) {
        super(props);
        if(props.users.length===0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
                response =>{
                    props.setUsers(response.data.items);
                }
            )   ;

        }
    }

    render(){
        let userElements = this.props.users.map(
            u =><User name={u.name} followed={u.followed} description={u.description}
                      country={u.country} city={u.city} id={u.id} follow={this.props.follow} unfollow={this.props.unfollow} key = {u.id}/>);
        return(
            <div className={s.users}>
                {userElements}
            </div>
        );
    }
}

export default Users;