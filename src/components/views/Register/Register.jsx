import { useState } from 'react';
import './register.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Name, setName] = useState("");
  const [Lastname, setLastname] = useState("");  
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const nameHandler =(e) => {
    setName(e.currentTarget.value);
  }

  const lastnameHandler =(e) => {
    setLastname(e.currentTarget.value);
  }

  const emaiHandler =(e) => {
    setEmail(e.currentTarget.value);
  }

  const passwordHandler =(e) => {
    setPassword(e.currentTarget.value);
  }

  const onSubmitRegister = (e) => {
    e.preventDefault();

    let dataToSubmit = {
      name: Name,
      lastname: Lastname,
      email: Email,
      password: Password
    }

    dispatch(registerUser(dataToSubmit)).then(response => {
      if (response.payload.registerSuccess) {
        navigate("/login");
      } else {
        alert('Failed to register')
      }
    })    
  }

  return (
    <div className="register">
      <div className="container">
        <Form className="registerForm" onSubmit={onSubmitRegister}>
          <div className="registerTitle">
            <h2>Sign Up</h2>
          </div>

          <Form.Group className="mb-3 rField" controlId="formBasicName">
            <Form.Label className="rLabel">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={Name}
              onChange={nameHandler}
              className="formInput"
            />
          </Form.Group>

          <Form.Group className="mb-3 rField" controlId="formBasicLastname">
            <Form.Label className="rLabel">Lastname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter lastname"
              value={Lastname}
              onChange={lastnameHandler}
              className="formInput"
            />
          </Form.Group>

          <Form.Group className="mb-3 rField" controlId="formBasicEmail">
            <Form.Label className="rLabel">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={Email}
              onChange={emaiHandler}
              className="formInput"
            />
          </Form.Group>

          <Form.Group className="mb-3 rField" controlId="formBasicPassword">
            <Form.Label className="rLabel">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={Password}
              onChange={passwordHandler}
              className="formInput"
            />
          </Form.Group>

          <div className="rButton">
            <Button variant="primary" type="submit" className="formButton">
              Register
            </Button>
          </div>
          <div style={{ float: 'left' }}>
            Already have an account? <Link to="/login" className="link">Sign In Now!</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Register
