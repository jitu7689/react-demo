import React from 'react';
// import React, {useState, useEffect} from 'react';
import "./Home.css";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Logo from '../../assets/img/bs.png';
import ProPic from '../../assets/img/product.jpg';
const style = {
    width: '100%',
    height: 'calc(100vh - 90px)'
  }
const containerStyle = {
    position: 'relative',  
    width: '100%',
    height: 'calc(100vh - 90px)'
}
function HomePage(props) {
    const onMarkerClick = (e) => {
        console.log(e,'red')
    }
    const onInfoWindowClose = () => {
        
    }
    return (
        <div className="container-fluid home-page">
            <header className="container">
                <nav className="navbar fixed-top navbar-light bg-light">
                    <a className="navbar-brand"><img src={Logo} width="30" height="30" alt=""/></a>
                    <div>
                        <form class="form-inline">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                </nav>
            </header>
            <div className="main-content">
                <div className="row">
                    <div className="col-md-9">
                        <Map google={props.google} zoom={14} style={style} containerStyle={containerStyle}>
    
                            <Marker onClick={onMarkerClick}
                                    name={'Current location'} />

                            <InfoWindow onClose={onInfoWindowClose}>
                                <div>
                                    <h1>{'jjjjj'}</h1>
                                </div>
                            </InfoWindow>
                        </Map>
                    </div>
                    <div className="col-md-3 main-content-right">
                        <div className="card mt-2">
                            <img className="card-img-top" src={ProPic} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">$500.00</h5>
                                <p className="card-text">4 Beds 2.5 Baths 2,846 Sq. Ft.</p>
                                <p className="card-text">289 Pear Blossom Rd, Stafford, VA 22554</p>
                            </div>
                        </div>
                        <div className="card mt-2">
                            <img className="card-img-top" src={ProPic} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">$500.00</h5>
                                <p className="card-text">4 Beds 2.5 Baths 2,846 Sq. Ft.</p>
                                <p className="card-text">289 Pear Blossom Rd, Stafford, VA 22554</p>
                            </div>
                        </div>
                        <div className="card mt-2">
                            <img className="card-img-top" src={ProPic} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">$500.00</h5>
                                <p className="card-text">4 Beds 2.5 Baths 2,846 Sq. Ft.</p>
                                <p className="card-text">289 Pear Blossom Rd, Stafford, VA 22554</p>
                            </div>
                        </div>
                        <div className="card mt-2">
                            <img className="card-img-top" src={ProPic} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">$500.00</h5>
                                <p className="card-text">4 Beds 2.5 Baths 2,846 Sq. Ft.</p>
                                <p className="card-text">289 Pear Blossom Rd, Stafford, VA 22554</p>
                            </div>
                        </div>
                        <div className="card mt-2">
                            <img className="card-img-top" src={ProPic} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">$500.00</h5>
                                <p className="card-text">4 Beds 2.5 Baths 2,846 Sq. Ft.</p>
                                <p className="card-text">289 Pear Blossom Rd, Stafford, VA 22554</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyCGNmDNDczeYLj1QEDqAU4EC-GmKa6Z9Lc')
  })(HomePage)
// export default HomePage;
