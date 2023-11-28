
import "./style.css";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import validateEmail from "./utils";
export default function App() {

    const[email,setEmail]=useState(
      {
        value:"",
        isTouched:false,
        isValid: false
      }
    );
    const [pwd, setPwd] = useState({
      value:"",
      isTouched:false,
      isValid: false
    });
    const [confirmPwd, setConfirmPwd] = useState({
      value:"",
      isTouched:false,
      isValid: false
    });
    function handleEmailInput(e) {
      setEmail(
        { isTouched:true,
          value:e.target.value,
          isValid:validateEmail(e.target.value)
        }
      );
    }
    
    function handlePwdInput(e) {
      setPwd ({
        isTouched: true,
        value:e.target.value,
        isValid:e.target.value.length >= 6 ? true :false
      });
    }
    function handleConfirmPwdInput(e) {
      setConfirmPwd({
        isTouched:true,
        value:e.target.value,
        isValid: e.target.value ===pwd.value ? true:false
      });
    }
    function handleSubmit(e) {
      e.prevenDefault();
      window.alert(
       `Submitted: \n Email: ${email.value} \n Password: ${pwd.value}`);
      }
      const formIsValid =email.isValid && pwd.isValid && confirmPwd.isValid;


  return(
   <div className="App">
    < div className="form-container">
    <Input
    name='email'
    type='text'
    lang='Email'
    onChange={handleEmailInput}
    isValid={email.isValid}
    isTouched={email.isTouched}
    placeholder='Email...'
    value={email.value}
    errorMsg="Enter a valid email"/>
    <Input
    name="password"
    type="password"
    label="password"
    onChange={handlePwdInput}
    isValid={pwd.isValid}
    isTouched={pwd.isTouched}
    placeholder="password..."
    value={pwd.value}
    errorMsg="Minimum 6 characters"
    />
    <input
    name="confirmPwd"
    type="password"
    label="confirm password"
    onChange={handleConfirmPwdInput}
    isValid={confirmPwd.isValid}
      isTouched={confirmPwd.isTouched}
      placeholder="Confirm password..."
      value={confirmPwd.value}
      errorMsg="Passwords do not match!"
    />
    <Button
    text="REGISTER"
    onClick={handleSubmit}
    disabled={!formIsValid}
    />

    </div>
   </div>
  );
}
//import Product from "./Product";

// function App() {
//   return (
//     <div>
//       <h1>PRODUCTS</h1>
//       <div className="App">
//         <Product
//           img="https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=300" jsaction="VQAsE" class="sFlh5c pT0Scc iPVvYb" style=" width: 217px; height: 300px;"
//           name="New product"
//           desc="The new product of Nike"
//           price="$200" />
//         <Product
//           img="https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=300" jsaction="VQAsE" class="sFlh5c pT0Scc iPVvYb" style=" width: 217px; height: 300px;"
//           name="New product"
//           desc="The new product of Nike"
//           price="$200" />
//         <Product
//           img="https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=300" jsaction="VQAsE" class="sFlh5c pT0Scc iPVvYb" style=" width: 217px; height: 300px;"
//           name="New product"
//           desc="The new product of Nike"
//           price="$200" />
//       </div>
//     </div>
//   );
// }

/*export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };
  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValues((values) => ({ ...values, [name]: value }));
  };

  return (
    <div>
      {submitted && valid && (
        <div className="success-message">
          <h2>
            {" "}
            Welcome, {values.firstName} {values.lastName}{" "}
          </h2>
          <div>Your registration was successful!</div>
        </div>
      )}

      <form className="register-form" onSubmit={handleSubmit}>
        {!valid && (
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
          />
        )}
        {submitted && !values.firstName && (
          <span> Please enter first name</span>
        )}

        {!valid && (
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
          />
        )}
        {submitted && !values.lastName && <span> Please enter last name</span>}

        {!valid && (
          <input
            type="email"
            placeholder="Email"
name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        )}
        {submitted && !values.email && <span> Please enter email</span>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
} */