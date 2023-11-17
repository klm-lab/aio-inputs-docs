import {useCallback, useEffect, useState} from "react";
import {getTheme, setThemeInDom} from "../../util";
import {DARK_SCHEME} from "../../util/constants.js";


const useTheme = () => {

    const toggleTheme = useCallback(() => {
        setIsDark(isDark => !isDark)
    }, [])

    const [isDark, setIsDark] = useState(getTheme());

    useEffect(() => {
        setThemeInDom(isDark)
    }, [isDark]);

    // For ssr
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true)
    }, []);

    useEffect(() => {
        const onThemeChange = ({matches}) => {
            setIsDark(matches);
        }
        window.matchMedia(DARK_SCHEME)
            .addEventListener('change', onThemeChange);

        return () => {
            window.matchMedia(DARK_SCHEME).removeEventListener("change", onThemeChange)
        }
    }, []);

    return {loaded, toggleTheme, isDark};
}

export default useTheme