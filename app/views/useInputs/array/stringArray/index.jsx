import Code from "../../../../components/code";
import {Link} from "@remix-run/react";
import {getInputsKey, routes} from "../../../../util/constants";
import ReadyToUse from "../../../../components/codeComponents/readyToUse";
import FormRef from "../../../../components/FormRef";
import CreateInputs from "../../../../components/codeComponents/CreateInputs";
import MapInputs from "../../../../components/codeComponents/mapInputs";

const StringArray = () => {
    return <>
        <h2 className="subTitle">
            Array of string
        </h2>
        <p className="description">
            Call <span className="definition">useInputs</span> with an array of string.
            For example, you want the <span className="hl">name, phoneNumber, and gender</span> of a user
        </p>
        <Code>
            <CreateInputs close>
                <span className="no-indent">[</span>
                <span className="key no-indent"> "name", "phoneNumber", "gender" </span>
                <span className="no-indent">]</span>
            </CreateInputs>
        </Code>

        <p className="description">
            If you log <span className="hl">myInputs</span>, you'll see an array of these related ready-to-use
            properties and
            many others listed <Link className="link" to={routes.PROPERTIES_INPUTS}>HERE</Link>.<br/>
            The name, id and label match the array of string value.
        </p>
        <Code>
            <div className="codeLine">
                <span>[</span>
                <span>{"{"}</span>
            </div>
            <div className="codeLine">
                <ReadyToUse keys={getInputsKey('"name | phoneNumber | gender",')}/>
            </div>
            <div className="codeLine">
                <span>{"}"}</span>
                <span>]</span>
            </div>
        </Code>
        <p className="description">
            Now bind <span className="hl">myInputs</span>, to some input element
        </p>
        <Code>
            <MapInputs/>
        </Code>
        <p className="description">
            That is it. The value entered by the user will be stored in corresponding
            <span className="hl">
                <span>ip.</span><span className="oKey">value</span>
            </span>
            located in <span className="hl">myInputs</span>.
        </p>
        <FormRef/>
        <p className="description">
            Now if you want to change the type of the input, the label or other properties and add some validations,
            you should use object. You can still use string and create a combination of none validated inputs and
            validated ones.
        </p>
    </>
}

export default StringArray