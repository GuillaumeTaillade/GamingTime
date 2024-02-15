import React from 'react'
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                {/* ternaire si la navigation est active alors on lui rajoute la classe "nav-active" sinon on met pas de classe */}
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>à propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;