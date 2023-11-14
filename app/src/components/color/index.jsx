import PaletteIcon from "../../assets/icon/palette.svg?react";
import themeStyles from "./theme.module.scss";
import {useCallback, useEffect, useRef} from "react";
import {LS} from "../../util";
import {COLOR} from "../../util/constants.js";

const {themeIcon, picker} = themeStyles
const Color = () => {

    const ref = useRef(null)

    const showPicker = useCallback(() => {
        ref.current?.click()
    }, [ref]);

    useEffect(() => {
        const color = LS.get(COLOR);
        color && onColorChange(color);
    }, []);


    const onColorChange = (value) => {
        const rootVariables = document.querySelector(":root");
        rootVariables.style.setProperty('--user-color', value);
        rootVariables.style.setProperty('--user-color-soft', value + "4a");
        LS.set(COLOR, value)
    }

    return <div>
        <PaletteIcon onClick={showPicker} className={themeIcon}/>
        <input className={picker} ref={ref} type="color" name="" id="" onChange={(e) => onColorChange(e.target.value)}/>
    </div>
}

export default Color