import {getMeta, LIB_NAME, routes} from "../util/constants";
import useRedirect from "../hook/useRedirect";
import {getAnchor} from "../util";
import CallDefinition from "../components/codeComponents/callDefinition";
import AppLink from "../components/appLink";
import Line from "../components/line";
import Code from "../components/code";
import {FORM_CODE} from "../code";
import Create from "../components/codeComponents/create";
import DotProperty from "../components/codeComponents/dotProperty";
import ConsoleLog from "../components/codeComponents/consoleLog";
import PageButton from "../components/pageButton";

const {
    FORM: {
        ROOT,
        GET_VALUES, RESET, ON_SUBMIT, SHOW_ERROR, GET,
        EACH, GET_ERRONEOUS_INPUT
    }, CONFIG, USE_INPUTS
} = routes

export const meta = () => {
    return getMeta(
        `Form Inputs state management documentation for react ${LIB_NAME}`,
        "use form and get values , submit or reset your data. Best, simple, fast and powerful library inputs state management for react."
        , ROOT);
};

export const Form = () => {
    useRedirect(ROOT, ON_SUBMIT);
    return <div className="data">
        <h1 id={getAnchor(ON_SUBMIT)} className="title smt">Form</h1>
        <p className="description">
            The form object is immutable. It will never change once created. You can safely use it in useEffect.
            It gives you access to these properties / method :
        </p>
        <ul className="extra item-space">
            <li><CallDefinition name="onSubmit" hl/> prevent the default behaviour of a <span
                className="hl">{"<form>...</form>"}</span> HTML element .
            </li>
            <li><CallDefinition name="getValues" hl/> a method to return your inputs values.</li>
            <li><CallDefinition name="reset" hl/> a method to reset a form.</li>
            <li><CallDefinition name="each" hl/> a method to loop through each input.</li>
            <li><CallDefinition name="showError" hl/> a method that touched inputs and show their error.</li>
            <li><CallDefinition name="getErroneousInput" hl/> a method that get the current erroneous input.</li>
            <li><CallDefinition name="get" hl/> a method that get an input with it's name.</li>
        </ul>
        <Line/>
        <h2 className="subTitle">
            On submit
        </h2>
        <p className="description">
            Help you prevent the default behaviour of a <span className="hl">{"<form>...</form>"}</span> HTML element
        </p>
        <Code copyText={FORM_CODE.ON_SUBMIT}>
            <Create close form>
                ...
            </Create>
            <div className="codeLine mt-1">
                <span className="package">{"<form"}</span>
                <span className="definition no-indent">onSubmit</span>
                <span className="no-indent">={"{"}</span>
                <DotProperty name="form" value="onSubmit" noCall/>
                <span className="no-indent">{"}"}</span>
            </div>
            <div className="codeLine">
                <div className="codeLine">...</div>
            </div>
            <div className="codeLine">
                <span className="package">{"</form>"}</span>
            </div>
        </Code>
        <h2 id={getAnchor(GET_VALUES)} className="subTitle smt">
            Get your Values
        </h2>
        <p className="description">
            <DotProperty value="getValues" hl/> is a
            practical way to get the values of your inputs at once.
            The result is an object where the keys match the name of your inputs.
            If you didn't set name on inputs creation, random ones are used.
        </p>
        <Code copyText={FORM_CODE.GET_VALUES}>
            <Create close form>
                ...
            </Create>
            <ConsoleLog space method="getValues" comment="Get your values"/>
        </Code>
        <h2 id={getAnchor(GET)} className="subTitle smt">
            Get inputs by name
        </h2>
        <p className="description">
            <DotProperty value="get" hl/> let you to get an input by name. It returns an array of input
        </p>
        <Code copyText={FORM_CODE.GET}>
            <Create close form>
                ...
            </Create>
            <ConsoleLog space method="get" comment="Get your input" content={'"input name"'}/>
        </Code>
        <h2 id={getAnchor(SHOW_ERROR)} className="subTitle smt">
            Show error
        </h2>
        <p className="description">
            <DotProperty value="showError" hl/> let your show inputs errors step by step on every invalid input.
        </p>
        <Code copyText={FORM_CODE.SHOW_ERROR}>
            <Create close form>
                ...
            </Create>
            <ConsoleLog space method="showError" comment="Show error"/>
        </Code>
        <h2 id={getAnchor(GET_ERRONEOUS_INPUT)} className="subTitle smt">
            Get erroneous input
        </h2>
        <p className="description">
            <DotProperty value="getErroneousInput" hl/> let your get the current erroneous input.
        </p>
        <Code copyText={FORM_CODE.GET_ERRONEOUS_INPUT}>
            <Create close form>
                ...
            </Create>
            <ConsoleLog space method="getErroneousInput" comment="Get erroneous input"/>
        </Code>
        <h2 id={getAnchor(RESET)} className="subTitle smt">
            Reset inputs
        </h2>
        <p className="description">
            <DotProperty value="reset" hl/> reset the value of your inputs</p>
        <Code copyText={FORM_CODE.RESET}>
            <Create close form>
                ...
            </Create>
            <ConsoleLog space method="reset" comment="Do a reset" noConsole/>
        </Code>

        <h2 id={getAnchor(EACH)} className="subTitle smt">
            For each input
        </h2>
        <Code copyText={FORM_CODE.FOR_EACH}>
            <Create close form>
                ...
            </Create>
            <ConsoleLog method="each" space comment="For each input" noConsole content="..."/>
        </Code>

        <p className="description">
            Hit next to find out how to <AppLink aria-label={`To navigate change the configuration of ${LIB_NAME}`}
                                                 className="link"
                                                 to={CONFIG.ROOT + CONFIG.ASYNC_DELAY}>CONFIG</AppLink> {LIB_NAME}
            behaviour.
        </p>
        <div className="foot">
            <PageButton to={USE_INPUTS.ROOT + USE_INPUTS.OBJECT} prev/>
            <PageButton to={CONFIG.ROOT + CONFIG.ASYNC_DELAY}/>
        </div>
    </div>
}

export default Form
