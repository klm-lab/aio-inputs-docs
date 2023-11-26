import Typescript from "../../assets/icon/Typescript";
import Javascript from "../../assets/icon/Javascript";
import {useCallback, useState} from "react";
import {addClasses} from "../../util";

const Iframe = ({src, title,height = 300}) => {

    const [active, setActive] = useState({
        type: "ts",
        ctl: 1,
    });
    const [opacity, setOpacity] = useState(0);

    const activate = useCallback((type) => {
        setOpacity(0);
        setActive(tab => {
            return {type, ctl: 0}
        })
    }, [])

    return <div className="iframe-container">
        <div className="tab">
            <div onClick={() => activate("ts")}
                 className={addClasses("tabEl", active.type === "ts" && "active")}>
                <Typescript/> Typescript
            </div>
            <div onClick={() => activate("js")}
                 className={addClasses("tabEl", active.type === "js" && "active")}>
                <Javascript/> Javascript
            </div>
        </div>
        <div style={{
            "--i-height": `${height}px`,
            height: `var(--i-height)`
        }} className="frame">
            {!opacity && <div className="blur">
                <div className="wait"/>
            </div> }
            <iframe onLoad={() => {
                setOpacity(1)
            }} title={title} loading="lazy"
                    src={src[active.type].replace("ctl=1",`ctl=${active.ctl}`)}
            />
        </div>
    </div>
}

export default Iframe