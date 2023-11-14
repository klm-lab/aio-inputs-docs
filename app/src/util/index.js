import {DARK_SCHEME, IS_DARK} from "./constants.js";

export const addClasses = (...classes) => classes.join(" ").replace("false", "");

export const LS = {
    get: (id) => {
        if (localStorage) {
            return JSON.parse(localStorage.getItem(id))
        }
    },
    set: (id, data) => {
        if (localStorage) {
            localStorage.setItem(id, JSON.stringify(data))
        }
    }
};

export const getTheme = () => {
    if (window) {
        const isDark = window.matchMedia(DARK_SCHEME).matches;
        const ls_isDark = LS.get(IS_DARK);
        !ls_isDark && LS.set(IS_DARK, isDark)
        return ls_isDark ?? isDark
    }
    return false
}

export const setThemeInDom = (isDark) => {
    if (document) {
        document.body.setAttribute("data-dark", isDark);
        LS.set(IS_DARK, isDark)
    }
}