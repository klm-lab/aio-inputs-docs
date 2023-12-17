import {addClasses} from "../../../util";

const CallDefinition = ({hl, name, params, anonymous, arrow,async,noIndent}) => {
    return <span className={addClasses(hl ? "hl" : "",noIndent ? 'no-indent': '')}>
        {async && <span className="keyword">async</span>}
        {!anonymous && <span className="definition no-indent">{name}</span>}
        <span className="no-indent">(</span>
        <span className="no-indent">{params}</span>
        <span className="no-indent">)</span>
        {arrow && <span className="no-indent">{" =>"}</span>}
    </span>
}

export const CallProperty = ({name, hl =true}) => {
    return <span className={addClasses("oKey", hl ? "hl": "")}>{name}</span>
}

export default CallDefinition