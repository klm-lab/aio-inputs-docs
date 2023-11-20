import Code from "../../code";
import {GET_STARTED_CODE} from "../../../code";

const ImportStatement = ({title = "Import", name = "useInputs", copyText = GET_STARTED_CODE.IMPORT }) => {
    return <>
        <h2 className="subTitle">
            {title}
        </h2>
        <p className="description">
            Import <span className="definition">{name}</span> from <span
            className="package">aio-inputs</span> package
        </p>
        <Code copyText={copyText}>
            <div className="codeLine">
                <span className="keyword">import</span>
                <span>{"{"}</span>
                <span className="definition">{name}</span>
                <span>{"}"}</span>
                <span className="keyword">from</span>
                <span className="package">"aio-inputs"</span>
            </div>
        </Code>
    </>
}

export default ImportStatement