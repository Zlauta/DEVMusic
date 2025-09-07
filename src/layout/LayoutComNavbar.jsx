import React from 'react'
import Header from '../components/Header/'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const LayoutComNavbar = () => {
  return (
    <div>
      <Header>

      </Header>
      <main>
        <Outlet>

        </Outlet>
      </main>
      <Footer>

      </Footer>
    </div>
  )
}

export default LayoutComNavbar
