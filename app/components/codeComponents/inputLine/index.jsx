import DotProperty from "../dotProperty";

const InputLine = ({name = "ip", iKey, inline}) => {
    const I = <>
        <span className="element">{"<input"}</span>
        {iKey && <>
            <span className="keyword no-indent">{"key="}</span>
            <span className="no-indent">{"{"}</span>
            <DotProperty name={name} value="key" method={false}/>
            <span>{"}"}</span>
        </>}
        <span className="no-indent">{`{ ...`}</span>
        <span className="no-indent">{name}</span>
        <span className="no-indent">.</span>
        <span className="oKey no-indent">{`props `}</span>
        <span className="no-indent">{`}`}</span>
        <span className="element">{"/>"}</span>
    </>
    return inline ? I : <div className="codeLine">
        {I}
    </div>
}
export default InputLine