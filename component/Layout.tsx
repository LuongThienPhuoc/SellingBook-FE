import Head from 'next/head';
import React from 'react'
import Footer from './Footer';
import NavBar from './NavBar'
 
const Layout = (props) => {

    console.log("Layout"+props.active)
    return (
        <div>
            <Head>
                <meta charSet="UTF-8"></meta>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Selling Book</title>
            </Head>
            <header>
<<<<<<< HEAD
                <NavBar activeNav={activeNav}></NavBar>
=======
                <NavBar active={props.active}></NavBar>
>>>>>>> origin/phuoc/ui-account
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )
}

export default Layout