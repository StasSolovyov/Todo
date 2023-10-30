import styles from './Button.module.css';

function Button(props) {
    const { children, disable = false } = props;
    return (
        <button {...props} className={styles.button} disabled={disable}>
            {children}
        </button>
    );
}

export default Button;
