import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');
    const {createUser,updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name,photoURL);
                navigate('/');
                toast.success('Account created!')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div className='w-50'>
            <h1>Registration Now</h1>
            <Container>
            <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicpurl">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                   
                    label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
            </Form.Group>
            <Form.Text >
              <p>Already have an account ? <Link to='/login'>Login</Link></p>
            </Form.Text>
            <Button variant="dark" type="submit" >
                Register
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
        </Container>
        </div>
    )
};

export default Register;