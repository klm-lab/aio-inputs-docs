import CopyIcon from "../../assets/icon/CopyIcon";
import {useCallback, useRef, useState} from "react";
import {copyToClipboard} from "../../util";

const Code = ({children}) => {

    const copyRef = useRef(null);

    const [show, setShow] = useState(false);

    const copy = useCallback(() => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 1000)
        copyToClipboard(copyRef.current)
    }, [copyRef])

    return <div className="s-c">
        <div className="flexCenterSpace codeWrapper">
            <div ref={copyRef} className="flexCenter code">
                {children}
            </div>
            <div onClick={copy} className="copy">
                <CopyIcon/>
                <span className={`copied ${show ? "show-copy" : ""}`}>Copied</span>
            </div>
        </div>
    </div>
}

export default Code