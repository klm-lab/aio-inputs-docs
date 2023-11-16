import InputLine from "../inputLine";

const MapInputs = ({name = "myInputs", inline = true, children, close}) => {
    return <>
        <div className="codeLine">
            <span className="keyword">return</span>
            <span className="no-indent">{name}.</span>
            <span className="oKey no-indent">map</span>
            <span className="no-indent">(</span>
            <span className="">{`ip =>${!inline ? " {": ""}`}</span>
            {inline && <>
                <InputLine inline iKey/>
                <span>)</span>
            </>}
        </div>
        <div className="codeLine">
            {children}
        </div>
        {!inline && close &&  <div className="codeLine">
            <span>{"})"}</span>
        </div>}
    </>
}

export default MapInputs