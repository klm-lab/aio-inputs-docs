import {addClasses} from "../../../util";

const KeyValue = ({objKey, value, valueClassName, comment,directValue = true, newCode}) => {
    return <div className={addClasses("codeLine", newCode && "codeNew")}>
        <span className="oKey no-indent">{objKey}</span>
        <span>:</span>
        {directValue ? <span className={valueClassName}>{value}</span> : value}
        {comment && <span className="comment"> {comment}</span>}
    </div>
}

export const ChildBracket = ({children}) => {
    return <>
        <span>{"{"}</span>
        {children}
        <div>
            <span>{"},"}</span>
        </div>
    </>
}

export default KeyValue