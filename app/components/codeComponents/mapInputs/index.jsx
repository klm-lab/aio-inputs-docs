import InputLine from "../inputLine";
import DotProperty from "../dotProperty";

const MapInputs = ({name = "myInputs",method = "each", inline = true, children, close}) => {
    return <>
        <div className="codeLine">
            <span className="keyword">return</span>
            <DotProperty name={name} value={method} noCall={true}/>
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