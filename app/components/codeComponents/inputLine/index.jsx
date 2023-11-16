const InputLine = ({name= "ip", iKey, inline}) => {
    const I = <>
        <span className="definition">{"<input"}</span>
        {iKey && <>
            <span className="keyword no-indent">{"key="}</span>
            <span className="no-indent">{"{"}</span>
            <span className="no-indent">{name}</span>
            <span className="no-indent">.</span>
            <span className="oKey no-indent">key</span>
            <span>{"}"}</span>
        </>}
        <span className="keyword no-indent">{"value="}</span>
        <span className="no-indent">{"{"}</span>
        <span className="no-indent">{name}</span>
        <span className="no-indent">.</span>
        <span className="oKey no-indent">value</span>
        <span>{"}"}</span>
        <span className="keyword no-indent">{"onChange="}</span>
        <span className="no-indent">{"{"}</span>
        <span className="no-indent">{name}</span>
        <span className="no-indent">.</span>
        <span className="oKey no-indent">onChange</span>
        <span>{"}"}</span>
        <span className="definition">{"/>"}</span>
    </>
    return inline ? I : <div className="codeLine">
        {I}
    </div>
}
export default InputLine