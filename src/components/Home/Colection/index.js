import styles from './Colection.module.css'

const Colection = () => {
    return (
        <div className={styles.colection}>
            <div className={styles.container}>
                <div className={styles.titlePage}>Colection</div>
                <div className={styles.intro}>
                    <div className={styles.title}>New Collection</div>
                    <div className={styles.text}><p>consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation</p></div>
                    <button className={styles.btnNew}>New</button>
                    <div className={styles.aboutImg}>
                        <div className={styles.item1}>
                            <img className={styles.img} src="./img/shoes-img1.png"></img>
                            <p className={styles.sportText}>Men Sports</p>
                            <h3 className={styles.price}>$90</h3>
                            <div className={styles.imgStar}>
                                <img src="./img/star-icon.png"></img>
                                <img src="./img/star-icon.png"></img>
                                <img src="./img/star-icon.png"></img>
                                <img src="./img/star-icon.png"></img>
                                <img src="./img/star-icon.png"></img>
                            </div>
                        </div>
                        <div className={styles.item2}>
                            <img className={styles.img} src="./img/shoes-img2.png"></img>
                            <p className={styles.sportText}>Men Sports</p>
                            <h3 className={styles.price}>$90</h3>
                            <div className={styles.imgStar}>
                                <img src="./img/star-icon.png"></img>
                                <img src="./img/star-icon.png"></img>
                                <img src="./img/star-icon.png"></img>
                                <img src="./img/star-icon.png"></img>
                                <img src="./img/star-icon.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={styles.btnSeeMore}>See More</button>
            </div>
            
        </div>
    )
}

export default Colection;