import React from 'react'

import "../styles/Nav.css"
function Nav() {
    return (
        <div className='restaurantNavContainer'>
            <nav class="navbar container">
  <div class="container-fluid">
    <a class="navbar-brand restaurantNavBrand">e!</a>
    <form class="d-flex" role="search">
            <p className="float-end text-white m-0 mt-3 m-2 h4 navigation-link-p">
              Login
            </p>
            <button className="float-end m-0 mt-3 m-2 navigation-link-btn">
              Create an account
            </button>
    </form>
  </div>
</nav>
            </div>
    )
}

export default Nav;