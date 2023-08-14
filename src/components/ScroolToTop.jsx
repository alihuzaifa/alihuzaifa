import React from "react";
import Image from '../assets/scroll_to_top.png'
export default function ScroolToTop() {
    function TopEvent() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            document.getElementById("topButton").style.visibility = "visible";
        } else {
            document.getElementById("topButton").style.visibility = "hidden";
        }
    }
    window.onscroll = function () {
        scrollFunction();
    };
    window.onload = function () {
        scrollFunction();
    };
    return (
        <button onClick={TopEvent} id="topButton" title="Go to top" >
            < img src={Image} alt="" style={{ width: '20px', height: '20px' }} />
        </button >
    );
}