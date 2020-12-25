import React from "react";
import {HeaderBox, HeaderBoxLeft, HeaderBoxRight} from './style'
import Logo from './Rectangle 1.svg'
import Twitter from './twitter (1).svg'
import Github from './github.svg'

const Header = () => {
    return (
        <HeaderBox>
            <HeaderBoxLeft>
                <img src={Logo} alt="Valerie's Logo"/>
                <h3>Valerie</h3>
            </HeaderBoxLeft>
            <HeaderBoxRight>

                <p>Freelance</p>
                <p>Contact Me</p>
                <a href="https://github.com/ooakhu" target="_blank" rel="noreferrer" ><img src={Twitter} alt="Twitter icon" /></a>
                <a href="https://twitter.com/nii___xx" target="_blank" rel="noreferrer" ><img src={Github} alt="Github Icon"/></a>

            </HeaderBoxRight>
        </HeaderBox>
    )
}

export default Header;