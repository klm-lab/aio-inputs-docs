import {DARK_SCHEME, IS_DARK} from "./constants.js";

export const addClasses = (...classes) => classes.join(" ").replaceAll("false", "");

export const LS = {
    get: (id) => {
        if (typeof localStorage !== "undefined") {
            return JSON.parse(localStorage.getItem(id))
        }
    },
    set: (id, data) => {
        if (typeof localStorage !== "undefined") {
            localStorage.setItem(id, JSON.stringify(data))
        }
    }
};

export const getAnchor = (link) => link.replace("#", "")

export const getTheme = () => {
    if (typeof window !== "undefined") {
        const isDark = window.matchMedia(DARK_SCHEME).matches;
        const ls_isDark = LS.get(IS_DARK);
        !ls_isDark && LS.set(IS_DARK, isDark);
        return ls_isDark ?? isDark
    }
    return false
}

export const setThemeInDom = (isDark) => {
    if (typeof document !== "undefined") {
        document.body.setAttribute("data-dark", isDark);
        LS.set(IS_DARK, isDark);
    }
}

export const copyToClipboard = (element) => {
    if (!navigator.clipboard) {
        const range = document.createRange();
        range.selectNodeContents(element);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        selection.removeAllRanges()
    }
    navigator.clipboard.writeText(element.innerText.toString())
}