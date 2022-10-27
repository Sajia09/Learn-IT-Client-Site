import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub,FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const { providerLogin,githubLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
                toast.success('Successfully Logged in');
            })
            .catch(error => console.error(error))
    }
    const handleGithubSignIn = () => {
        githubLogin(githubProvider)
            .then(result => {
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
                toast.success('Successfully Logged in');
            })
            .catch(error => console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, {replace: true});
                toast.success('Successfully Logged in');
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div className='w-50 m-5'>
           <Container><h1>Login Now</h1>
            <Container>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Text >
              <p>New to our website ? <Link to='/register'>Register</Link></p>
            </Form.Text>
            <Button variant="dark" type="submit" >
                Login
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
        <br />
        <Button onClick={handleGoogleSignIn} className='mb-3' variant="dark" type="submit" >
            <FaGoogle></FaGoogle>   Google Login
        </Button><br/>
        <Button onClick={handleGithubSignIn}  className='mb-3'  variant="dark" type="submit" >
             <FaGithub></FaGithub>  Github Login
        </Button>
        </Container></Container>
        </div>
    );
};

export default Login;