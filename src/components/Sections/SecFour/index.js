import React from "react";
import {SectionFourContainer, SectionFourBox, SectionFourCard} from "./style";
import image from './thinking.png'


const SecFour = () => {
    return (
        <SectionFourContainer>
            <h1>My Recent Work</h1>
            <h3>Here are a few apps i've worked on recently. Want to see more? <span><a href="https://github.com/ooakhu">Github</a></span></h3>
            <SectionFourBox>
                <SectionFourCard>
                    <img src={image} alt="image"/>
                    <h2>A Project</h2>
                </SectionFourCard>

                <SectionFourCard>
                    <img src={image} alt="image"/>
                    <h2>A Project</h2>
                </SectionFourCard>

                <SectionFourCard>
                    <img src={image} alt="image"/>
                    <h2>A Project</h2>
                </SectionFourCard>

                <SectionFourCard>
                    <img src={image} alt="image"/>
                    <h2>A Project</h2>
                </SectionFourCard>

                <SectionFourCard>
                    <img src={image} alt="image"/>
                    <h2>A Project</h2>
                </SectionFourCard>

                <SectionFourCard>
                    <img src={image} alt="image"/>
                    <h2>A Project</h2>
                </SectionFourCard>

            </SectionFourBox>
        </SectionFourContainer>
    )

}

export default SecFour;