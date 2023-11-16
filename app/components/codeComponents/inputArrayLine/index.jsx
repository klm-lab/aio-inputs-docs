import Code from "../../code";
import InputLine from "../inputLine";
import MapInputs from "../mapInputs";
import KeyComment from "../keyComment";

const InputArrayLine = ({name, topComment = true, validComment = true, loadingComment}) => {
    return <Code>
        {topComment && <div className="codeLine">
            <span className="comment">{"// Inside your component"}</span>
        </div>}
        <MapInputs name={name} inline={false} close>
            <div className="codeLine">
                <span className="keyword">{"return"}</span>
                <span className="definition">{"<div"}</span>
                <span className="keyword no-indent">{"key"}</span>
                <span className="no-indent">{"={"}</span>
                <span className="no-indent">ip.</span>
                <span className="oKey no-indent">key</span>
                <span className="no-indent">{"}"}</span>
                <span className="definition">{">"}</span>
                <span></span>
            </div>
            <div className="codeLine">
                <InputLine/>
                {validComment && <KeyComment full comment={"{/* if touched and not valid */}"}/>}
                <div className="codeLine">
                    <span>{"{"}</span>
                    <span className="no-indent">ip.</span>
                    <span className="oKey">touched</span>
                    <span>&&</span>
                    <span className="no-indent key">!</span>
                    <span className="no-indent">ip.</span>
                    <span className="oKey">valid</span>
                    <span>&&</span>
                    <span className="definition no-indent">{"<span>"}</span>
                    <span className="no-indent">{"{"}</span>
                    <span className="no-indent">ip.</span>
                    <span className="oKey no-indent">errorMessage</span>
                    <span className="no-indent">{"}"}</span>
                    <span className="definition">{"</span>"}</span>
                    <span>{"}"}</span>
                </div>
                <span className="definition">{"</div>"}</span>
            </div>
        </MapInputs>
    </Code>
}
export default InputArrayLine