import LoginForm from "./LoginForm";
import classes from "./Login.module.css";

const Login = () => {
    return (
        <div className={classes['register-form-container']}>
            <h1 className="text-2xl font-bold">Login Form: </h1>
            <LoginForm />
        </div>
    )
};

export default Login;