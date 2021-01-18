import s from "./ProfileInfo.module.scss";
import avatar from "../../../img/avatar.png";
import Loader from "../../Common/Loader/Loader";
import  React from "react";
import * as react from "react";
import {profileApi} from "../../../api/api";

class ProfileInfo extends React.Component{
    inputElement = react.createRef();

    state={
        editMode:false,
        status: this.props.status,
        oldStatus:this.props.status
    }
    inputOnChange(){

        let text = this.inputElement.current.value;
        this.setState({
            status:text
        })
    }
    activateEditMode(){
        this.setState({
            editMode:true
        })
    }
    deactivateEditMode(){
        this.setState({
            editMode:false
        })
        if(this.state.oldStatus!==this.state.status){
           this.props.updateStatus(this.state.status);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render(){


        if(!this.props.profile){
            return    <Loader/>
        }else{
            return  <div className={s.about}>
                <img src={this.props.profile.photos.large ? this.props.profile.photos.large : avatar} className={s.avatar}/>
                <div className={s.info}>
                    <span>{this.props.profile.fullName}</span>
                    {!this.state.editMode &&
                        <span onDoubleClick={this.activateEditMode.bind(this)} >{this.props.status}</span>
                    }
                    {this.state.editMode &&
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)}
                               onChange={this.inputOnChange.bind(this)} value={this.state.status} ref = {this.inputElement}/>
                    }
                    <span>{this.props.profile.lookingForAJob ? this.props.profile.lookingForAJobDescription : 'not looking for a job'}</span>
                    <span>{this.props.profile.github ? this.props.profile.github : ''}</span>
                </div>
            </div>
        }
    }
}
export default ProfileInfo;