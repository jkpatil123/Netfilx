// export const checkValidData =(email, password)=>{
//     const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
//     const isPasswordValid =/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
    
// if(!isEmailValid)return "Email Id is not vaild"
// if(!isPasswordValid) return "password is not valid"
   
// return null;
// }
export const checkValidData = (Email, password, fullName) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email);
    const isPasswordValid = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(password);
    const isFullName = /^[a-zA-Z-' ]+$/.test(fullName);
  
    if (!isEmailValid) return "Sorry, we can't find an account with this email address. Please try again or create a new account";
    if (!isPasswordValid) return "Incorrect password. Please try again";
    if (!isFullName) return "Name field cannot be empty";
  
  
    return null;
  };