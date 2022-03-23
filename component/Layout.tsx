import Head from 'next/head';
import React from 'react'
import NavBar from './NavBar';

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8"></meta>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Selling Book</title>
            </Head>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <h1>footer</h1>
            </footer>
        </div>
    )
}

export default Layout