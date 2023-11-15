import "./code.css"
import CopyIcon from "../../assets/icon/CopyIcon";
const Code = ({children}) => {

    return  <div className="codeWrapper">
       <div className="code">
           {children}
             {/*<div className="codeLine">*/}
             {/*    <span className="keyword">const</span>*/}
             {/*    <span>[</span>*/}
             {/*    <span>inputs</span>*/}
             {/*    <span>]</span>*/}
             {/*    <span>=</span>*/}
             {/*    <span className="definition no-indent">useInputs</span>*/}
             {/*    <span className="no-indent">(</span>*/}
             {/*    <span className="key no-indent">6</span>*/}
             {/*    <span>)</span>*/}
             {/*</div>*/}
       </div>
        <div className="copy">
            <CopyIcon/>
        </div>
    </div>
}

export default Code