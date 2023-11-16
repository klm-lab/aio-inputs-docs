const CreateInputs = ({close,form,multiple = true,array, children}) => {
    return <div className="codeLine">
        <span className="keyword">const</span>
        <span>[</span>
        <span>myInput{multiple ? "s": ""}{form && ", form"}</span>
        <span>]</span>
        <span>=</span>
        <span className="definition no-indent">useInputs</span>
        <span className="no-indent">({array && "["}</span>
        {children ?? <span className="key no-indent">"phoneNumber"</span>}
        {close &&  <span>{array && "]"})</span>}
    </div>
}

export default CreateInputs