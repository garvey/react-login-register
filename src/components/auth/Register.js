import React from 'react';
import { Link } from 'react-router-dom';
import { FiAlertCircle } from 'react-icons/fi';
import useForm from 'react-hook-form';
import Logo from '../../images/logo.png';

import {
  Col,
  FormGroup,
  Label,
  Button,
  Row,
  Container,
  Form,
  Card,
  CardBody,
  Alert
} from 'reactstrap';

function Register(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = res => {
    console.log('Register Data:', res);
  };

  return (
    <Container>
      <Row>
        <Col
          xs={12}
          md={{ size: 10, offset: 1 }}
          lg={{ size: 8, offset: 2 }}
          className="my-auto mx-auto"
        >
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center pt-4 pb-4">
              <Link to="/">
                <img src={Logo} alt="Company Logo" className="img-fluid logo" />
              </Link>
            </div>
            <Card className="register">
              <CardBody>
                <Row>
                  <Col xs={12} sm={6}>
                    <h2>Register</h2>
                  </Col>
                  <Col xs={12} sm={6} className="align-end">
                    <small className="float-sm-right">
                      Have an account? <Link to="/login">Sign in here</Link>
                    </small>
                  </Col>
                </Row>
                <Row className="divider">
                  <Col xs={12} sm={4}>
                    <h5>Personal Details</h5>
                  </Col>

                  <Col xs={12} sm={6}>
                    <FormGroup>
                      <Label>Full Name</Label>
                      <input
                        name="name"
                        ref={register({
                          required: 'Please Enter your name'
                        })}
                      />
                    </FormGroup>
                    {errors.name && (
                      <Alert color="info">
                        <FiAlertCircle /> Please enter your name
                      </Alert>
                    )}
                  </Col>
                </Row>

                <Row className="divider">
                  <Col xs={12} sm={4}>
                    <h5>Login Details</h5>
                  </Col>

                  <Col xs={12} sm={6}>
                    <FormGroup>
                      <Label>Email</Label>
                      <input
                        name="email"
                        ref={register({
                          required: 'Required email address',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'invalid email address'
                          }
                        })}
                      />
                    </FormGroup>

                    {errors.email && errors.email.message && (
                      <Alert color="info">
                        <FiAlertCircle /> Please enter a valid email address
                      </Alert>
                    )}

                    <FormGroup>
                      <Label>Password</Label>
                      <input
                        name="password"
                        type="password"
                        ref={register({ required: true, maxLength: 10 })}
                      />
                    </FormGroup>
                    {errors.password && (
                      <Alert color="info">
                        <FiAlertCircle /> Please enter your password
                      </Alert>
                    )}
                  </Col>
                </Row>

                <Row className="divider footer">
                  <Col>
                    <div className="btn-group float-right">
                      <Button color="success" outline block type="submit">
                        Register
                      </Button>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;

// function Register(props) {
//   return (
// class Register extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       password: '',
//       error: false,
//       captcha: ''
//     };
//   }

//   handleSubmit = event => {

//   };

//   render() {
//     return (
//       <Container>
// <Col
//   xs={12}
//   md={{ size: 10, offset: 1 }}
//   lg={{ size: 8, offset: 2 }}
//   className="my-auto mx-auto"
// >
//           <div className="text-center pt-4 pb-4">
//             <Link to="/">
//               <img
//                 src={DenningsLogo}
//                 alt="Dennings Logo"
//                 className="responsive-image"
//               />
//             </Link>
//           </div>

//           <Card className="register">
//             <CardBody>
//               <Form onSubmit={this.handleSubmit}>
// <Row>
//   <Col xs={12} sm={6}>
//     <h2>Register</h2>
//   </Col>
//   <Col xs={12} sm={6} className="align-end">
//     <small className="float-sm-right">
//       Have an account? <Link to="/login">Sign in here</Link>
//     </small>
//   </Col>
// </Row>

// <Row className="divider">
//   <Col xs={12} sm={4}>
//     <h5>Personal Details</h5>
//   </Col>

//   <Col xs={12} sm={6}>
//     <FormGroup>
//       <Label for="name">Full Name</Label>
//       <Input
//         type="text"
//         name="name"
//         id="name"
//         placeholder="Enter your name..."
//         onChange={this.handleChange}
//         value={this.state.name}
//         required
//       />
//     </FormGroup>
//   </Col>
// </Row>

//                 <Row className="divider">
// <Col xs={12} sm={4}>
//   <h5>Login Details</h5>
// </Col>

//                   <Col xs={12} sm={6}>
//                     <FormGroup>
//                       <Label for="email">Email</Label>
//                       <Input
//                         type="email"
//                         name="email"
//                         id="email"
//                         placeholder="Enter your email..."
//                         onChange={this.handleChange}
//                         value={this.state.email}
//                       />
//                     </FormGroup>
//                     {this.state.error === true && (
//                       <p className="text-info">
//                         <FiAlertCircle /> This email address is already in use.
//                       </p>
//                     )}

//                     <FormGroup>
//                       <Label for="password">Password</Label>
//                       <Input
//                         type="password"
//                         name="password"
//                         id="password"
//                         onChange={this.handleChange}
//                         value={this.state.password}
//                         required
//                       />
//                     </FormGroup>

//                   </Col>
//                 </Row>
//                 <Row className="divider footer">
//                   <Col>
//                     <div className="btn-group float-right">
//                       <Button
//                         color="success"
//                         block
//                         type="submit"

//                       >
//                         Register
//                       </Button>
//                     </div>
//                   </Col>
//                 </Row>
//               </Form>
//             </CardBody>
//           </Card>
//         </Col>
//       </Container>
//     );
//   }
// }

// export default Register;
