import React from 'react';
import { Link } from 'react-router-dom';
import { FiAlertCircle } from 'react-icons/fi';
import useForm from 'react-hook-form';
import Logo from '../../images/logo.png';

import {
  Col,
  Form,
  FormGroup,
  Label,
  Button,
  Container,
  Card,
  CardBody,
  Row,
  Alert
} from 'reactstrap';

function Login(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = res => {
    console.log('Login Data:', res);
  };

  return (
    <Container>
      <Row>
        <Col
          xs={12}
          md={{ size: 6, offset: 3 }}
          lg={{ size: 4, offset: 4 }}
          className="my-auto mx-auto"
        >
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center pt-4 pb-4">
              <Link to="/">
                <img src={Logo} alt="Company Logo" className="img-fluid logo" />
              </Link>
            </div>
            <Card className="login">
              <CardBody>
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

                <Button outline color="success" block type="submit">
                  Sign in
                </Button>

                <FormGroup>
                  <p className="pt-2 text-center">
                    <Link to="/forgot">Forgot your password?</Link>
                  </p>
                </FormGroup>

                <FormGroup>
                  <p className="pt-2">
                    Don't have an account?{' '}
                    <Link to="/register">Register here</Link>
                  </p>
                </FormGroup>
              </CardBody>
            </Card>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
