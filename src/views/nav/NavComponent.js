import React from 'react';
import './Nav.scss';
import { NavLink} from "react-router-dom";

class NavComponent extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeclassname="active" exact='true'>
                    Home
                </NavLink>
                <NavLink to="/todo" activeclassname="active">
                    Todos
                </NavLink>
                <NavLink to="/about" activeclassname="active">
                    About
                </NavLink>
                <NavLink to="/user" activeclassname="active">
                    User
                </NavLink>
            </div>
        )
    }
}
export default NavComponent;