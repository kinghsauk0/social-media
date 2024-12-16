import Cookies from "cookies-js";

export const isAuthenticated = () => {
    const token = Cookies.get("token")
    if(token){
      return true
    }else{
      return false
    }
  };