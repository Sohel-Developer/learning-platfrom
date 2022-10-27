import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";




const Login = () => {

    const { setUser, googleLogin, emailPasswordLogin } = useContext(AuthContext)



    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setUser(user)
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                // console.log(errorMessage);

            });

    }

    /* Email Password Login Seystem  */
    const handaleEmailPassword = (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        // console.log(email, password);


        emailPasswordLogin(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)

                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
            });


        form.reset()


    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handaleEmailPassword} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/signup' className="label-text-alt link link-hover">Create a New Account</Link>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div>
                            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline btn-info mr-4">
                                <FaGoogle />
                            </button>
                            <button className="btn btn-circle btn-outline btn-info ">
                                <FaGithub />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;