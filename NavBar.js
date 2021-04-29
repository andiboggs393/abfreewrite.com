import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import "./NavbarHeader.css"


class Navbar extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="logo">
                        <p>ABfreewrite.com</p>
                    </div>
                    <section>
                    <div className="inline">
                        <Link to="/">News</Link>
                    </div>
                    <div className="inline">
                        <Link to="/Covid_19">Covid 19</Link>
                    </div>
                    <div className="inline">
                        <Link to="/Math">U.S.A.</Link>
                    </div>
                    <div className="inline">
                        <Link to="/Books">Books</Link>
                    </div>
                    <div className="inline">
                        <Link to="/Animals">Animals</Link>
                    </div>
                    <div className="inline">
                        <Link to="/sections/World">World</Link></div>
                    </section>
                    <div hidden className="menu">Menu</div>
                </header>
            </div>

        )
    }

}

export default Navbar



