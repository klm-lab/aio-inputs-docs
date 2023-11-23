import Typescript from "../../assets/icon/Typescript";
import Javascript from "../../assets/icon/Javascript";
import {useCallback, useState} from "react";
import {addClasses} from "../../util";

const Iframe = ({src, title,height}) => {

    const [active, setActive] = useState("ts");
    const [opacity, setOpacity] = useState(0);

    const activate = useCallback((tab) => {
        setOpacity(0);
        setActive(tab)
    }, [])

    return <div className="iframe-container">
        <div className="tab">
            <div onClick={() => activate("ts")}
                 className={addClasses("tabEl", active === "ts" && "active")}>
                <Typescript/> Typescript
            </div>
            <div onClick={() => activate("js")}
                 className={addClasses("tabEl", active === "js" && "active")}>
                <Javascript/> Javascript
            </div>
        </div>
        <div className="frame">
            {!opacity && <div className="blur">
                <div className="wait"/>
            </div> }
            <iframe style={{
                height: `${height}px`
            }} onLoad={() => {
                setOpacity(1)
            }} title={title} loading="lazy"
                    src={src[active]}
            />
        </div>
    </div>
}

export default Iframe