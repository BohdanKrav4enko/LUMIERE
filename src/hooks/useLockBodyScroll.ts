import { useEffect, type RefObject } from "react";
import type Lenis from "lenis";

export const useLockBodyScroll = (
    locked: boolean,
    lenisRef?: RefObject<Lenis | null>
) => {
    useEffect(() => {
        const lenis = lenisRef?.current;

        if (locked) {
            lenis?.stop();

            document.body.style.overflow = "hidden";
            document.body.style.touchAction = "none";
        } else {
            lenis?.start();

            document.body.style.overflow = "";
            document.body.style.touchAction = "";
        }

        return () => {
            lenis?.start();

            document.body.style.overflow = "";
            document.body.style.touchAction = "";
        };
    }, [locked, lenisRef]);
};