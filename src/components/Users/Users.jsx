import s from'./Users.module.scss'
import User from "./User/User";
import React from 'react';
import * as axios from 'axios';


class Users extends React.Component{
    componentDidMount() {
        if(this.props.users.length===0){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`).then(
                response =>{
                    debugger;
                    this.props.setUsers(response.data.items);
                    this.props.setTotalCount(response.data.totalCount);
                    debugger;
                }
            );
        }

    }
    pageChanged(p){
        debugger;
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`).then(
            response =>{
                this.props.setUsers(response.data.items);
            }
        );
    }
    render(){
        debugger;
        let pages =[];
        for(let i=1; i<=5;i++){
            this.props.currentPage-i<=0 ? pages.push(i) : pages.unshift(this.props.currentPage-i);
        }
        for(let i=1; i<=5;i++){
            this.props.currentPage<=5 ? pages.push(i+5) : pages.push(i+this.props.currentPage-1);
        }
        debugger;

        debugger;
        let userElements = this.props.users.map(
            u =><User name={u.name} followed={u.followed} description={u.status} photo ={u.photos.small}
                      country={u.country} city={u.city} id={u.id} follow={this.props.follow} unfollow={this.props.unfollow} key = {u.id}/>);
        return(
            <div className={s.users}>
                {userElements}
                {  pages.map(p =>{
                    return <span className={this.props.currentPage === p && s.activeLink}
                                 onClick={(e)=>{this.pageChanged(p);}}>{p}     </span>
                })}
            </div>
        );
    }
}

export default Users;