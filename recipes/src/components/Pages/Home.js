import React from 'react'
import background from '../../assets/home.png'
import styles from '../Styles/Home.module.css'

const Home = () => {
    return (
        <div>
            <header>
                <img className={styles.homeBackground} src={background} alt="spices-background"/>
                <h1 className={styles.headerH1}>Welcome to Food Nutrisite</h1>
                <p className={styles.headerP}>Quality Recipes made at home.</p>
            </header>
            <main>
                <h2>Why our recipes are amazing?</h2>
                <span className={styles.text}>
                    <p>These recipes are healthy and fun to make.</p>
                    <p>They have been chosen by the best of the chefs from all over the world, just for you!</p>
                </span>
            </main>
        </div>
    )
}

export default Home;
