import SignupForm from "./SignupForm";
import classes from "./Register.module.css";

const Register = () => {
    return (
        <div className={classes['register-form-container']}>
            <h1 className="text-2xl font-bold">Signup Form: </h1>
            <SignupForm />
        </div>
    )
};

export default Register;