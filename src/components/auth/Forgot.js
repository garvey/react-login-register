import React from 'react';
import { Link } from 'react-router-dom';
import useForm from 'react-hook-form';
import Logo from '../../images/logo.png';
import { FiAlertCircle } from 'react-icons/fi';
import {
  Col,
  Form,
  FormGroup,
  Label,
  Button,
  Container,
  Card,
  CardBody,
  Alert
} from 'reactstrap';

function Forgot(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = res => {
    console.log('Password Data:', res);
  };

  return (
    <Container>
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
              <h5>Forgot your password?</h5>
              <small>
                Enter your email below and we'll reset your password.
              </small>
              <FormGroup className="pt-5">
                <Label>Your Email Address</Label>

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

              <Button outline color="success" block type="submit">
                Reset Password
              </Button>

              <FormGroup>
                <p className="pt-4 text-center">
                  Back to <Link to="/login">Login</Link>
                </p>
              </FormGroup>
            </CardBody>
          </Card>
        </Form>
      </Col>
    </Container>
  );
}

export default Forgot;
