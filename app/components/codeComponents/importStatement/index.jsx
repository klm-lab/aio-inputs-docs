import Code from "../../code";
import {GET_STARTED_CODE} from "../../../code";
import InportCode from "../inportCode";

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
            <InportCode name={name}/>
        </Code>
    </>
}

export default ImportStatement