export const checkValidData =(email, password)=>{
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid =/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
    
if(!isEmailValid)return "Email Id is not vaild"
if(!isPasswordValid) return "password is not valid"
   
return null;
}