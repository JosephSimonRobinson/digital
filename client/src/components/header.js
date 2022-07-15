import React from 'react'
import {Link} from "react-router-dom"


const header = ({small}) => {
  return(
    <div>
      <header className={small ? "small" : null}>
      <Link to="/" id="logo">{small ? "Porvans" : "Provans"}</Link>
      {!small ? <h4 id="sub">Provans is a build service team for minecraft related goods.</h4> : null}
        <Link to={small ? "/" : "/dashboard"} className="discordLogin btn btn-primary">{small ? "Logout" : "Discord Login"}</Link>
      </header>
    </div>
  )
}

export default header
