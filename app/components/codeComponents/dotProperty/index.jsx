import {addClasses} from "../../../util";

const DotProperty = ({indent,noCall = false,name = "form", value, hl,method = true, params}) => {
    return <span className={addClasses("no-indent", hl ? "hl": "")}>
        <span className="no-indent">{name}.</span>
        <span className={addClasses(!indent ? "no-indent" : "",method ? "definition": "oKey ")}>{value}</span>
        {method && !noCall && <>
            <span className="no-indent punctuation">(</span>
            {params && <span className="no-indent">{params}</span>}
            <span className={addClasses("punctuation",!indent ? "no-indent" : "")}>)</span>
        </>}
    </span>
}

export default DotProperty