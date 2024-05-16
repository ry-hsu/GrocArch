import React from "react";
import { Outlet, Link } from "react-router-dom"

function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <Link to="/">Home  </Link>
                    
                    <Link to="/results">  Results</Link>
                </ul>
            </nav>

            <Outlet/>
        </>
    )
}

export default Layout;