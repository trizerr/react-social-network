import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component{

    componentDidMount() {
       this.userId = 2;
      if(this.props.match.params.userId){
          this.userId = this.props.match.params.userId;
      }
        this.props.setProfile(this.userId);

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
let profileWithAuthRedirect = withAuthRedirect(ProfileContainer);
let profileWithUrlContainer = withRouter(profileWithAuthRedirect);
export default connect(mapStateToProps, {setProfile})(profileWithUrlContainer);