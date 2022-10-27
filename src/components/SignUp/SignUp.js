import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { emailPasswordCreateAccount, error, setError } = useContext(AuthContext)

    const handaleEmailPasswordCreate = (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password);
        form.reset()

        emailPasswordCreateAccount(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                setError("")

                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                // ..
            });



    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handaleEmailPasswordCreate} className="card-body">
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
                                <p>{error}</p>
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover">Already have a accout </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;