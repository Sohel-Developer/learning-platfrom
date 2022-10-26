import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { useContext } from 'react';
// import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Login = () => {

    // const { googleSignIn } = useContext(AuthContext)

    // const handleGoogleSignIn = () => {
    //     googleSignIn
    //         .then((result) => {
    //             const user = result.user;
    //             console.log(user);
    //         })
    //         .catch((error) => {
    //             const errorMessage = error.message;
    //             console.log(errorMessage);
    //         })

    // }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/signup' className="label-text-alt link link-hover">Create a New Account</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                            <div>
                                <button className="btn btn-circle btn-outline btn-info mr-4">
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
        </div>
    );
};

export default Login;