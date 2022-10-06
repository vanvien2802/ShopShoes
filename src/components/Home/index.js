
import styles from './Home.module.css'
import Intro from './Intro'
import Colection from './Colection'
import Footer from './Footer'

function HomePage() {
    return (
        <div className={styles.intro}>
            <Intro/>
            <Colection/>
            <Footer/>
        </div>
    )
}

export default HomePage;