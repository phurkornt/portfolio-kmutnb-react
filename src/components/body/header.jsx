
import React from 'react'

export default function Header() {

    return (
        <>
            <div class="px-3 py-2 bg-dark text-white">
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="#header" class="header-font d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                            Phurikorn
                        </a>
                        <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                                <a href="#home" class="nav-link text-white">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" class="nav-link text-white">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#skill" class="nav-link text-white">
                                    Skill
                                </a>
                            </li>
                            <li>
                                <a href="#exp" class="nav-link text-white">
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a href="#contact" class="nav-link text-white">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}