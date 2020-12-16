import s from'./Users.module.scss'
import User from "./User/User";

const Users = (props) =>{
    let userElements = props.users.map(
        u =><User name={u.name} followed={u.followed} description={u.description}
                  country={u.country} city={u.city} id={u.id} follow={props.follow} unfollow={props.unfollow}/>);
    return(
        <div className={s.users}>
            {userElements}
        </div>
    );
};
export default Users;