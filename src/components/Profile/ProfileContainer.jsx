import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import {setProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component{

    componentDidMount() {
       this.userId = 2;
       debugger;
      if(this.props.match.params.userId){
          this.userId = this.props.match.params.userId;
      }


        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.userId}`, {headers : {  'API-KEY': '960a5064-17c0-4d42-9bc1-fb960b99d4ff' } }).then(
            response =>{

                this.props.setProfile(response.data);
                debugger;
            }
        );
    }

    render(){
        return <Profile {...this.props}/>
    }
}
let mapStateToProps = (state) =>{
    return{
        profile:state.profilePage.profile
    }
}
let profileWithUrlContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setProfile})(profileWithUrlContainer);