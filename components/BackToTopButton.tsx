'use client'

import React, { useEffect, useState } from "react";

const BacktoTopButton: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const toggleVisibility = () =>  {
        if (window.pageYOffset > 300){
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
             window.removeEventListener('scroll', toggleVisibility);
        };
    }, []) ;
    return(
        <button onClick={scrollToTop} style={
            {
        display: visible ? 'block' : 'none',
        position: 'fixed',
        right: '40px',
        backgroundColor: '#0070f3',
        color:'#fff',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        fontSize: '24px',
        cursor:'pointer',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            }
        }>↑</button>
    )
}
 

export default BacktoTopButton;