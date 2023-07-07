// Example functions for authentication and session management
import users from "./users.json";
export const loginUser = async (email, password) => {
    try {
      // Your authentication logic here (e.g., calling an API endpoint for login)
      // Return the user token or session information upon successful login
      const user = users.find((user)=>user.email === email && user.password === password)
      if(user.email){
        localStorage.setItem('login_user',email)
        return {success:true}
      }else{
        return {success:false}
      }
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };
  
  export const signupUser = async (email, password) => {
    try {
        if(email && password) {
            users.push({email: email, password: password})
        }
      // Your signup logic here (e.g., calling an API endpoint for signup)
      // Return the user token or session information upon successful signup
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  };
  
  export const logoutUser = async () => {
    try {
      // Your logout logic here (e.g., clearing session or revoking token)
      // Perform any necessary cleanup upon logout
      localStorage.removeItem('login_user')
    } catch (error) {
      console.error('Error logging out:', error);
      throw error;
    }
  };
  export const checkLogin = async()=>{
    let user = localStorage.getItem('login_user');
    if(user){
      let userObj = users.find((item)=>item.email===user)
      if(userObj.email){
        return true;
      }else{
        return false;
      }
    }else{
      return false
    }
  }
  
  // Additional functions for session management, token storage, etc.
  