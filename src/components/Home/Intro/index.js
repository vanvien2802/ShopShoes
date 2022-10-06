import styles from './Intro.module.css'


const Intro = () => {
    return (
        <div className={styles.intro}>
            <div className={styles.TypeShoes}>
                <p >Men Shoes</p>
                <span>0/2</span>
                <p >Men Shoes</p>
            </div>
            <div className={styles.detailIntro}>
                <div className={styles.title}>New Running Shoes</div>
                <div className={styles.subTitle}>Men's Like Plex</div>
                <p className={styles.text}>ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.</p>
                <div className={styles.btnIntro}>
                    <button className={styles.btnBuy}>Buy Now</button>
                    <button className={styles.btnMore}>See More</button>
                </div>
            </div>
            {/* <div className={styles.shoesRunning}> */}
                <img className={styles.shoesRunning} src="./img/running-shoes.png"></img>
            {/* </div> */}
        </div>
    )
}

export default Intro;