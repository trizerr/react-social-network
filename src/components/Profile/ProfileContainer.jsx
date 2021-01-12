import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setProfile, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
       this.userId = this.props.userId;
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
        profile:state.profilePage.profile,
        userId: state.auth.userId,
        status: state.profilePage.status
    }
}
export default compose(
    connect(mapStateToProps, {setProfile, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
/*
let profileWithAuthRedirect = withAuthRedirect(ProfileContainer);
let profileWithUrlContainer = withRouter(profileWithAuthRedirect);
export default connect(mapStateToProps, {setProfile})(profileWithUrlContainer);*/