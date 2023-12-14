import Code from "../../code";
import InputLine from "../inputLine";
import MapInputs from "../mapInputs";
import KeyComment from "../keyComment";
import {ChildBracket} from "../keyValue";
import DotProperty from "../dotProperty";

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
                    <span className="element no-indent">{"<span>"}</span>
                    <ChildBracket inline stop={false} noPrevIndent noIndent>
                        <DotProperty name={"ip"} value="errorMessage" method={false}/>
                    </ChildBracket>
                    <span className="element">{"</span>"}</span>
                </div>
                <span className="element">{"</div>"}</span>
            </div>
        </MapInputs>
    </Code>
}
export default InputArrayLine