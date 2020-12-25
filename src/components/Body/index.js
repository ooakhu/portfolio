import React from 'react';
import {BodyBox} from './style'
import Header from '../Header/index'
import SecOne from "../Sections/SecOne";
import SecTwo from "../Sections/SecTwo";
import SecThree from "../Sections/SecThree";
import SecFour from "../Sections/SecFour";
import SecFive from "../Sections/SecFive";
import SecSix from "../Sections/SecSix";





const BodyCard = () =>{
    return (
        <BodyBox>
            <Header/>
            <SecOne/>
            <SecTwo/>
            <SecThree/>
            <SecFour/>
            {/*<SecFive/>*/}
            {/*<SecSix/>*/}
        </BodyBox>
        )
}

export default BodyCard;