const KeyValue = ({objKey, value, valueClassName, comment, directValue = true, inline = false}) => {
    const content = <>
        <span className="oKey no-indent">{objKey}</span>
        <span>:</span>
        {directValue ? <span className={valueClassName}>{value}</span> : value}
        {comment && <span className="comment"> {comment}</span>}
    </>
    return inline ? content : <div className={"codeLine"}>
        {content}
    </div>
}

export const ChildBracket = ({noPrevIndent, children, inline = false, stop = true, noIndent}) => {
    const closeBracket = <span className={noIndent ? "no-indent" : ""}>{`}${stop ? "," : ""}`}</span>
    return <>
        <span className={noPrevIndent ? "no-indent" : ""}>{"{"}</span>
        {children}
        {inline ? closeBracket : <div>
            {closeBracket}
        </div>}
    </>
}

export default KeyValue