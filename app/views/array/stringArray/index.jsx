import Code from "../../../components/code";
import {Link} from "@remix-run/react";
import {routes} from "../../../util/constants";
import InputLine from "../../../components/inputLine";

const KEYS = [
    {key: "id", value: '"name | phoneNumber | gender",'},
    {key: "key", value: '"some unique key",'},
    {key: "name", value: '"name | phoneNumber | gender",'},
    {key: "label", value: '"name | phoneNumber | gender",'},
    {key: "type", value: '"text",'},
    {key: "value", value: '"",'},
    {key: "valid", value: "true,", className: "definition"},
    {key: "onChange", value: "Function", className: "definition"},
]

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
            <div className="codeLine">
                <span className="keyword">const</span>
                <span>[</span>
                <span>myInputs</span>
                <span>]</span>
                <span>=</span>
                <span className="definition no-indent">useInputs</span>
                <span className="no-indent">(</span>
                <span className="no-indent">[</span>
                <span className="key no-indent"> "name", "phoneNumber", "gender" </span>
                <span className="no-indent">]</span>
                <span>)</span>
            </div>
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
            {KEYS.map(k => {
                return <div key={k.key} className="codeDeepLine">
                    <span className="oKey no-indent">{k.key}</span>
                    <span>:</span>
                    <span className={k.className}>{k.value}</span>
                </div>
            })}
            <div className="codeLine">
                <span>{"}"}</span>
                <span>]</span>
            </div>
        </Code>
        <p className="description">
            Now bind <span className="hl">myInputs</span>, to some input element
        </p>
        <Code>
            <div className="codeLine">
                <span className="keyword">return</span>
                <span className="no-indent">myInputs.</span>
                <span className="oKey no-indent">map</span>
                <span className="no-indent">(</span>
                <span className="">{"ip =>"}</span>
                <InputLine iKey />
            </div>
        </Code>
        <p className="description">
            That is it. The value entered by the user will be stored in corresponding
            <span className="hl">
                <span>ip.</span><span className="oKey">value</span>
            </span>
            located in <span className="hl">myInputs</span>
            . You can reset or also get the values of your inputs by using the
            form object shown <Link className="link" to={routes.FORM_RESET}>HERE</Link>
        </p>
        <p className="description">
            Now if you want to change the type of the input, the label or other properties and add some validations,
            you should use object. You can still use string and create a combination of none validated inputs and
            validated ones.
        </p>
    </>
}

export default StringArray