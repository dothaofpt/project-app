
const emailRegEx= new RegExp(  
   /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
 );
 export default function validateEmail(email) {
    return emailRegEx.test(email);
 }



