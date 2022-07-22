import React from 'react'
import "./Navigation.scss"
import { NavLink } from "react-router-dom";

import home from "../../assets/images/home-icon.svg";
import library from "../../assets/images/library.svg";
import pathway from "../../assets/images/forest-icon.svg";
import profile from  "../../assets/images/profile-settings.svg";

const Navigation = () => {
  
  return (
    <>
    <section>
    </section>
    <div className='nav-bar' data-testid="navigation">
        <NavLink to="/" data-testid="home-icon" className={({isActive})=> (isActive ? "nav-bar__link--active" : "nav-bar__link")}><img src={home} alt="Home icon"/></NavLink>
        <NavLink to="/articles" data-testid="resources-icon" className={({isActive})=> (isActive ? "nav-bar__link--active" : "nav-bar__link")}><img src={library} alt="Resources icon"/></NavLink>
        <NavLink to="/pathways" data-testid="pathway-icon" className={({isActive})=> (isActive ? "nav-bar__link--active" : "nav-bar__link")}><img src={pathway} alt="Learning Branch icon" /></NavLink>
        <NavLink to="/marketplace" data-testid="marketplace-icon" className={({isActive})=> (isActive ? "nav-bar__link--active" : "nav-bar__link")}><img src={library} alt="Marketplace icon"/></NavLink>
        <NavLink to="/profile" data-testid="profile-icon" className={({isActive})=> (isActive ? "nav-bar__link--active" : "nav-bar__link")}><img src={profile} alt="User Profile icon"/></NavLink>
    </div>
    </>
  )
}

export default Navigation