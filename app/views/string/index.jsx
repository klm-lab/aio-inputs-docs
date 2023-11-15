import Code from "../../components/code";
import Line from "../../components/line";
import PageButton from "../../components/pageButton";
import {Link, useNavigate} from "@remix-run/react";
import {routes} from "../../util/constants";
import ImportStatement from "../../components/importStatement";
import InputLine from "../../components/inputLine";

const KEYS = [
    {key: "id", value: '"phoneNumber",'},
    {key: "name", value: '"phoneNumber",'},
    {key: "label", value: '"phoneNumber",'},
    {key: "type", value: '"text",'},
    {key: "value", value: '"",'},
    {key: "valid", value: "true,", className: "definition"},
    {key: "onChange", value: "Function", className: "definition"},
]

const String = () => {

    const navigate = useNavigate()

    return <div className="data">
        <h1 className="title">Aio-Inputs with string</h1>
        <p className="titleIntro">
            You can create an input state by passing a string as an argument. When you use a string, the input is
            <span className="package bold space">
            VALID
        </span> by default, because
            there is no validation attached to it. Please use it if :
        </p>
        <ul className="extra">
            <li>You want an input that doesn't need validation</li>
            <li>You want only one input that doesn't need validation</li>
        </ul>
        <Line/>
        <ImportStatement/>
        <h2 className="subTitle">
            Create your input
        </h2>
        <p className="description">
            Call <span className="definition">useInputs</span> with the name you want.
            For example, you want the <span className="hl">phoneNumber</span> of a user
        </p>
        <Code>
            <div className="codeLine">
                <span className="keyword">const</span>
                <span>[</span>
                <span>myInput</span>
                <span>]</span>
                <span>=</span>
                <span className="definition no-indent">useInputs</span>
                <span className="no-indent">(</span>
                <span className="key no-indent">"phoneNumber"</span>
                <span>)</span>
            </div>
        </Code>

        <p className="description">
            If you log <span className="hl">myInput</span>, you'll see these related ready-to-use properties and
            many others listed <Link className="link" to={routes.PROPERTIES_INPUTS}>HERE</Link>.<br/>
            The name, id and label is the value of your string.
        </p>
        <Code>
            <div className="codeLine">
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
            </div>
        </Code>
        <p className="description">
            Now bind <span className="hl">myInput</span>, to an input element
        </p>
        <Code>
            <div className="codeLine">
                <InputLine name={"myInput"} />
            </div>
        </Code>
        <p className="description">
            That is it. The value entered by the user will be stored in
            <span className="hl">
                <span>myInput.</span><span className="oKey">value</span>
            </span>
            . You can reset or also get the values of the input
            by using the form object shown <Link className="link" to={routes.FORM_RESET}>HERE</Link>
        </p>
        <p className="description">
            Full working example
        </p>
        <div className="foot">
            <PageButton onClick={() => navigate(routes.ROOT)} text="Prev"/>
            <PageButton onClick={() => navigate(routes.USE_INPUTS_ARRAY)}/>
        </div>
    </div>
}

export default String
