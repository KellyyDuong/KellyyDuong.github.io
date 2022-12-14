import React from 'react'
import "../styles/Intro.css";
import Typist from "react-typist-component";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

class Intro extends React.Component {


    render() {
        return (
            <div id="intro">
                <Typist typingDelay={120} cursor={<span className='cursor'>|</span>}>
                    <span className="intro-title">
                        {"hi, "}
                        <span className="intro-name">{"kelly"}</span>
                        {" here."}
                    </span>
                </Typist>
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
                    <EmailOutlinedIcon></EmailOutlinedIcon>
                    {" " + "Say hi!"}
                </a>
                
            </div>
        );
    }
}

export default Intro;