import React from "react";
import Image from '../assets/scroll_to_top.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
export default function ScroolToTop() {
    return (
        <button onClick={() => { }} id="topButton" title="Go to top" >
            <AnchorLink href="#top">
                < img src={Image} alt="" style={{ width: '20px', height: '20px' }} />
            </AnchorLink>
        </button >
    );
}