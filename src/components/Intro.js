import React from 'react';
import "../styles/Intro.css";
import Typewriter from "typewriter-effect";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FadeInSection from './FadeInSection';

class Intro extends React.Component {

    render() {
        return (
            <div id="intro">
                <Typewriter
                    options={{
                        strings: [
                        "hi, kelly here."
                        ],
                        autoStart: true,
                        delay: 120,
                        loop: true,
                        pauseFor: 1000000000,
                    }}
                    >
                    </Typewriter>
                <FadeInSection>
                <div className="intro-subtitle">I create stuff sometimes.</div>
                <div className="intro-desc">
                    I'm an aspiring software engineer based in Austin, TX. I have
                    great interest in full-stack development, artifical intelligence,
                    and everything in between.
                </div>
                <a
                    href="mailto:kellyduong@utexas.edu"
                    className="intro-contact"
                >
                    <EmailOutlinedIcon className="mail-icon"></EmailOutlinedIcon>
                    <span className="intro-hi">&nbsp; Say hi!</span>
                </a>
                </FadeInSection>
            </div>
        );
    }
}

export default Intro;