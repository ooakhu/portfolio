import React from "react";
import {SectionOne, SectionOneHeader,SectionOneDes, SectionTwo} from "./style";
import Avatar from './myAvatar.png'

const SecOne = () => {
    return (
        <SectionOne>
            <SectionOneHeader>Software Engineer, Web Developer & Tinkler</SectionOneHeader>
            <SectionOneDes>I breathe life into <span>Designs</span></SectionOneDes>
            <img src={Avatar} alt="Valerie's Avatar"/>
        </SectionOne>

    )
}

export default SecOne;