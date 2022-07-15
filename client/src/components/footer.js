import React from 'react'
import {Link} from "react-router-dom"


const footer = () => {
  return(
    <div class="footer">
      <div class="footer__content">
          <div class="footer__links">

            {/* HELPFUL LINKS GROUP */}
            <div class="footer__links__helpful__links">
              <p class="footer__links__header"> 
              Helpful links
              </p>
              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
              <p class="footer__links__link">
              My Resources
              </p>
              </Link>
              <Link to="/dashboard/settings" style={{ textDecoration: 'none' }}>
                <p class="footer__links__link">
                Profile Settings
                </p>
              </Link>
              <Link to="/dashboard/payout" style={{ textDecoration: 'none' }}>
              <p class="footer__links__link">
              Request Payout
              </p>
              </Link>
            </div>

            {/* Company links group */}
            <div class="footer__links__comapny">
              <p class="footer__links__header"> 
              Company
              </p>
              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
              <p class="footer__links__link">
              Terms and Conditions
              </p>
              </Link>
              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <p class="footer__links__link">
               
                </p>
              </Link>
              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
              <p class="footer__links__link">
              Create Support Ticket
              </p>
              </Link>
          </div>


          <div class="footer__disclaimer">
            <p class="footer__disclaimer__header"> 
            About
            </p>
            <p class="footer__disclaimer__description"> 
            Here at Kinetic, we offer a variety of upgrades <br/> that grant you access to additional features.
            </p>

            <Link to="/" className="discordLogin btn btn-primary">View Upgrades</Link>
          </div>

          
        </div>
    </div>

    <div class="copywrite">
      <p>Copyright © 2021 Kinetic.club </p>
    </div>

    </div>
  )
}

export default footer
