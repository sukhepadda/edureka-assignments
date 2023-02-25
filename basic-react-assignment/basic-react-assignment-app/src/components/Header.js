import React from 'react'

function Header() {
  return (
    <div id="header-img">
     <header>
         <div className="d-flex justify-content-center">
             <div className="nav-menu ">
                 <button className="float-end m-0 mt-3 m-2 navigation-link-btn">Create an account</button>
                 <p className="float-end text-white m-0 mt-3 m-2 h4 navigation-link-p">Login</p>
             </div>
         </div>
     </header>
     <div className="container">
         <div className="justify-content-center header-flex">
             <p className="logo">
                 e!
             </p><br />
             <p className="logo-bottom">Find the best restaurants, caf&eacute;s, and bars </p>
         </div>
         <div className="d-flex justify-content-center mt-4">
             <input type="text" className="search-box" placeholder="Please type a location" />
             <div className="search-box2-div" >

                 <input type="text" className="search-box2" placeholder="Search for restaurants" />
                 <i className="fa fa-search"></i>
             </div>
         </div>
     </div>
 </div>
  )
}

export default Header