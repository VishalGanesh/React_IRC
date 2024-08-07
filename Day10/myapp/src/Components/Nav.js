import { useRef, useState } from 'react';
import {Toaster,toast} from 'react-hot-toast';
import '../Assets/css/style.css'

const Nav = () => {
    const [visible, setVisible] = useState(false);
    const toggle = () => {
        setVisible(!visible);
    };

    const usernameInputRef = useRef(null);
    const passwordInputRef = useRef(null);
   
    const emailInputRef = useRef(null);
    

    const [error, setError] = useState({
        username: '',
        password: '',
        email: ''
        
    });

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    


    const Login = (e) => {
        e.preventDefault();

        const data = {
            username: usernameInputRef.current.value,
            password: passwordInputRef.current.value,
            email: emailInputRef.current.value,
           
        };

        if(data.username.length===0)
        {
            setError({...error,username:'username is empty!'});
        }

        else if(data.username.length<6)
        {
            setError({...error,username:'min 6 char'});
        }
        else if(data.password.length===0)
        {
            setError({...error,password:'password is empty'})
        }
        else if(data.password.length<6)
        {
            setError({...error,password:'password length should be atleast  6'})
        }
       
        else if(data.email.length===0)
        {
            setError({...error,email:'email is empty'})
        }
        else if(!emailRegex.test(data.email))
        {
            setError({...error,email:'Invalid email format!'})
        }

        else{
            setError({...error,username:''});

            if(data.username=="vishal" && data.password==="123456")
            {
                toast.success('Successfully registered!')
            }
            else
            {
                toast.error("Registered Failed")
            }
        }


    };

    return (
        <>
            <div>
                <div className="navbar">
                    <div className="navtitle">
                        Vishal & Co
                    </div>
                    <ul className="navlinks">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li onClick={toggle}>SignUp</li>
                    </ul>
                </div>
                {visible ? (
                    <div className="card-wrapper">
                        <div className="">
                            <h2 className="auth-title">SignUp</h2>
                            <form className="auth-container h-50v shadow" onSubmit={Login}>
                                <input type="text" name="" id="username" placeholder="Username" className="auth-input" ref={usernameInputRef} />
                                {error.username === '' ? '' : <span className="error-comp">{error.username}</span>}

                                <input type="password" name="" id="password" placeholder="Password" className="auth-input" ref={passwordInputRef} />
                                {error.password === '' ? '' : <span className="error-comp">{error.password}</span>}

                                <input type="text" name="" id="email" placeholder="Email" className="auth-input" ref={emailInputRef} />
                                {error.email === '' ? '' : <span className="error-comp">{error.email}</span>}

                                <span className="btn-container">
                                    <input type="submit" value="SignUp" className="auth-btn w-50" />
                                    <button className="cancel-btn w-50" onClick={toggle}>
                                        Cancel
                                    </button>
                                </span>
                            </form>
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>
            <Toaster
  position="bottom-right"
  reverseOrder={false}
/>
        </>
    );
};

export default Nav;