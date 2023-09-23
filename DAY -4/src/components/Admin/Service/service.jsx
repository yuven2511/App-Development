import React from 'react'
import './service.css'
import { Link } from 'react-router-dom'


const Service = () => {
  return (
    <div>
      <nav>
            <div className="logo-name">
                  <label className="logo">Online MarketPlace</label>
            </div>
            <div className="menu-items">
            <ul className="nav-links">
                        <li>
                              <Link className='link-text' to="/adminDashboard">
                                    <span className='link-name'>Dashboard</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminService">
                                    <span className='link-name'>Service</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminServiceProvider">
                                    <span className='link-name'>Service Provider</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminSettings">
                                    <span className='link-name'>Settings</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminCustomer">
                                    <span className='link-name'>Service Requester</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminHelp">
                                    <span className='link-name'>Help</span>
                              </Link>
                        </li>
                  </ul>
                  <ul className="logout-mod">
                        <li>
                              <Link className='link-text'to="/">
                                    <span className="link-name">Logout</span>
                              </Link>
                        </li>
                  </ul>
            </div>
      </nav>
      <section className='header'>
                  <label>admin@gmail.com</label>
            </section>
      <section className="service">
            <h1>Service</h1>
      </section>
    </div>
  )
}

export default Service;
