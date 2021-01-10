import * as axios from "axios";

let instance = axios.create({
    withCredentials : true,
    headers : {  'API-KEY': '960a5064-17c0-4d42-9bc1-fb960b99d4ff' },
    baseURL:'https://social-network.samuraijs.com/api/1.0/'
})
export const usersApi = {
    getUsers(pageSize, currentPage){
        return instance.get(`users?count=${pageSize}&page=${currentPage}`,)
            .then(
            response =>{
                return response.data;
            }
        );
    },
    unfollow(id){
        return instance.delete(`follow/${id}`).then(
            response =>{
               return response.data;
            }
        );
    },
    follow(id){
        return instance.post(`follow/${id}`).then(
            response =>{
                return response.data;
            }
        );
    }
}

export const authApi = {
    authMe(){
        return instance.get(`auth/me`).then(
            response =>{
              return response.data;
            }
        );
    }
}

export const profileApi = {
    getProfile(userId){
        return instance.get(`profile/${userId}`).then(
            response =>{
                return response.data;
            }
        );
    }
}