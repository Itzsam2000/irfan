import React from 'react'
import '../navbar/navbar.css'
export default function Navbar() {
    return (
        <div className='nav__container'>
            <div className="nav__section">
                <div className="nav__logo">
                    <h2>Irfan's</h2>
                </div>
                <div className="nav__links">
                    <ul>
                        <li>about</li>
                        <li>portfolio</li>
                        <li>gallery</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
