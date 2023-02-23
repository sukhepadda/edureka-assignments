import {bg} from "./images/bg.png"
import firstimg from "./images/1.png"
import secondimg from "./images/2.png"
import thirdimg from "./images/3.png"
import fourthimg from "./images/4.png"
import fifthimg from "./images/5.png"
import sixthimg from "./images/6.png"
import './App.css';

function App() {
  return (
    <div className="App">
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
    <section id="second-section">
        <div className="container">
            <div className="title m-2">
                <h2 className="second-section-title">Quick Searches</h2>
                <p className="second-section-title-para">Discover restaurants by type of meal</p>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="row custum-card">
                        <div className="col-6">
                            <img height="100%" width="100%" src={firstimg} alt="img not available" />
                        </div>
                        <div className="col-6 card-info-div">
                            <h4 className="card-title">Breakfast</h4>
                            <p className="card-para">Start your day with exclusive breakfast options</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="row custum-card">
                        <div className="col-6"> <img height="100%" width="100%" src={secondimg} alt="img not available" />
                        </div>
                        <div className="col-6 card-info-div">
                            <h4 className="card-title">Breakfast</h4>
                            <p className="card-para">Start your day with exclusive breakfast options</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="row custum-card">
                        <div className="col-6"> <img height="100%" width="100%" src={thirdimg} alt="img not available" />
                        </div>
                        <div className="col-6 card-info-div">
                            <h4 className="card-title">Breakfast</h4>
                            <p className="card-para">Start your day with exclusive breakfast options</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="row custum-card">
                        <div className="col-6"> <img height="100%" width="100%" src={fourthimg} alt="img not available" />
                        </div>
                        <div className="col-6 card-info-div">
                            <h4 className="card-title">Breakfast</h4>
                            <p className="card-para">Start your day with exclusive breakfast options</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="row custum-card">
                        <div className="col-6"> <img height="100%" width="100%" src={fifthimg} alt="img not available" />
                        </div>
                        <div className="col-6 card-info-div">
                            <h4 className="card-title">Breakfast</h4>
                            <p className="card-para">Start your day with exclusive breakfast options</p>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4">
                    <div className="row custum-card">
                        <div className="col-6"> <img height="100%" width="100%" src={sixthimg} alt="img not available" />
                        </div>
                        <div className="col-6 card-info-div">
                            <h4 className="card-title">Breakfast</h4>
                            <p className="card-para">Start your day with exclusive breakfast options</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default App;
