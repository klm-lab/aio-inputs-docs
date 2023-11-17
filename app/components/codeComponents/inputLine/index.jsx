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
        <span className="keyword no-indent">{"value="}</span>
        <span className="no-indent">{"{"}</span>
        <DotProperty name={name} value="value" method={false}/>
        <span>{"}"}</span>
        <span className="keyword no-indent">{"onChange="}</span>
        <span className="no-indent">{"{"}</span>
        <DotProperty name={name} value="onChange" method={true} noCall/>
        <span>{"}"}</span>
        <span className="element">{"/>"}</span>
    </>
    return inline ? I : <div className="codeLine">
        {I}
    </div>
}
export default InputLine