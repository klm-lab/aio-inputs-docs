import {appStore} from "../../store";
import {addClasses} from "../../util";
import {useCallback} from "react";

const Overlay = () => {
    const overlay = appStore("overlay");

    const close = useCallback(()=> {
        appStore.set(ref => {
            ref.overlay = false;
            ref.sidebar = false
        })
    },[])

    return <div onClick={close} className={addClasses("overlay",overlay ? "show": "")}/>
}

export default Overlay