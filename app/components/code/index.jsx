import CopyIcon from "../../assets/icon/CopyIcon";
import {useCallback, useState} from "react";
import {copyToClipboard} from "../../util";

const Code = ({children, copyText}) => {

    // const copyRef = useRef(null);

    const [show, setShow] = useState(false);

    const copy = useCallback(() => {
        // copyRef.current.innerText = `${copyText}`
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 1000)
        copyToClipboard(copyText)
    }, [copyText])

    return <div className="s-c">
        {/*<textarea className="inv" ref={copyRef}/>*/}
        <div className="flexCenterSpace codeWrapper">
            <div className="flexCenter code">
                {children}
            </div>
            {copyText && <div onClick={copy} className="copy">
                <CopyIcon/>
                <span className={`copied ${show ? "show-copy" : ""}`}>Copied</span>
            </div>}
        </div>
    </div>
}

export default Code