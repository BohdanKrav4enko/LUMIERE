import { useEffect, useState } from "react";
import { Button } from "./styles/ScrollToTopStyle";


export const ScrollToTop = () => {

    const [visible, setVisible] = useState(false);


    useEffect(() => {

        const handleScroll = () => {
            setVisible(window.scrollY > 500);
        };


        window.addEventListener(
            "scroll",
            handleScroll
        );


        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };

    }, []);



    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    };


    if (!visible) return null;


    return (
        <Button onClick={scrollToTop}>
            ↑
        </Button>
    );
};