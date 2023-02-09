import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo2.png';
import { useEffect } from 'react';
import './Login.css';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/user/UserActions';
import { GoogleButton } from 'react-google-button';



function Login(props) {
    const navigate = useNavigate();
    const { loginUser, userData } = props;
    
    useEffect(() => {
        if(userData) {
            navigate('/');
        }
    }, [navigate, userData]);

    return (
        <div className='login-page'>
            <Link to='/'>
                <img src={Logo} alt='logo' className='mb-5' />
            </Link>
            
            <h1 className="h2">Login</h1>
            <p>Alege providerul cu care vrei să vrei să te loghezi:</p>

            <GoogleButton onClick={() => loginUser()}>
            </GoogleButton>

            
        </div>
    )
}

function mapStateToProps(state) {
    return {
        userData: state.user.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser: () => { dispatch(loginUser()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
