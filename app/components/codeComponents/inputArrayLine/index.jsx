import Code from "../../code";
import InputLine from "../inputLine";
import MapInputs from "../mapInputs";
import KeyComment from "../keyComment";
import {ChildBracket} from "../keyValue";
import DotProperty from "../dotProperty";
import {USE_INPUTS_CODE} from "../../../code";

const InputArrayLine = ({name, topComment = true, validComment = true, inlineText}) => {
    return <Code copyText={inlineText}>
        {topComment && <div className="codeLine">
            <span className="comment">{"// Inside your component"}</span>
        </div>}
        <MapInputs name={name} inline={false} close>
            <div className="codeLine">
                <span className="keyword">{"return"}</span>
                <span className="element">{"<div"}</span>
                <span className="keyword no-indent">{"key"}</span>
                <span className="no-indent">=</span>
                <ChildBracket inline stop={false} noPrevIndent>
                    <DotProperty name={"ip"} value="key" method={false}/>
                </ChildBracket>
                <span className="element">{">"}</span>
            </div>
            <div className="codeLine">
                <InputLine/>
                {validComment && <KeyComment full comment={"{/* if touched and not valid */}"}/>}
                <div className="codeLine">
                    <ChildBracket inline stop={false}>
                        <DotProperty name={"ip"} value="touched" method={false} indent/>
                        <span>&&</span>
                        <span className="no-indent">!</span>
                        <DotProperty name={"ip"} value="valid" method={false} indent/>
                        <span>&&</span>
                        <span className="element no-indent">{"<span>"}</span>
                        <ChildBracket inline stop={false} noPrevIndent noIndent>
                            <DotProperty name={"ip"} value="errorMessage" method={false}/>
                        </ChildBracket>
                        <span className="element">{"</span>"}</span>
                    </ChildBracket>
                </div>
                <span className="element">{"</div>"}</span>
            </div>
        </MapInputs>
    </Code>
}
export default InputArrayLine