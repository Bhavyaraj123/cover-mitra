import React from 'react'
import Header from '../Header/Header'
import Router from '../router/Routers'
import Footer from '../Footer/Footer'
const Layout = () => {
  return (
    <div>
        <header>
        <Header/> 
        </header>
        <main>
            <Router/>
        </main>

        <footer>
<Footer/>
        </footer>
    </div>
  )
}

export default Layout