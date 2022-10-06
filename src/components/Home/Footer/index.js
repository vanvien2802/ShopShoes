



import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.box}>
                <img src="./img/logo.png"></img>
                <p>ipsum dolor sit amet, consectetur ipsum dolor sit amet,
                    consectetur ipsum dolor sit amet,</p>
            </div>
            <div className={styles.box}>
                <div className={styles.phoneNumber}>
                    <h3 className={styles.title}>(+84)</h3>
                    <p>941296714</p>
                </div>
                <div className={styles.address}>
                    <h3 className={styles.title}>Address</h3>
                    <p>No 40 Baria Sreet 15/2 NewYork City, NY,
                        United States.</p>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.email}>Demo@gmail.com</div>
                <div className={styles.address}>
                    <h3 className={styles.title}>Products</h3>
                    <p>Prices drop<br/>
                        New products<br/>
                        Best sales<br/>
                        Contact us<br/>
                        Sitemap</p>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.iconContact}>

                </div>
                <div className={styles.subcribe}>
                    <h3 className={styles.title}>Newsletter</h3>
                    <input type="text" class="enter_email" placeholder="Enter Your email" name="Name"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;