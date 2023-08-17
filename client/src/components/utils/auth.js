// decode a token for a user's info
import decode from "jwt-decode";

//new class to instantiate for a user
class AuthService{
    login(idToken){
        localStorage.setItem('id_token', idToken);
        window.location.assign('/dashboard')
    }
    getToken(){
        return localStorage.getItem('id_token');
    }
    getUser(){
        return decode(this.getToken())
    }
    loggedIn(){
        const token = this.getToken();
        return token ? true : false;
    }
    logout(){
        localStorage.removeItem('id_token');
        window.location.reload();
    }
}
export default new AuthService();