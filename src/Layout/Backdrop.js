import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
    const closeBackdropHandler = () => {
        props.onClick();
    }
    return (
        <div
            className={classes['backdrop']}
            onClick={closeBackdropHandler}>
        </div>
    )
};

export default Backdrop;