import styles from './header.module.css'
const Header = () => {
    return (
        <div className={styles.header}>
            <h3 className={styles.logo}>Sneha Mishra</h3>
            <button className={styles.btn}>See Profile</button>
        </div>
    )
}

export default Header
