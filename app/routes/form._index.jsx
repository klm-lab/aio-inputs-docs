import {getMeta, routes} from "../util/constants";
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
import ExternalLink from "../components/externalLink";
import PageButton from "../components/pageButton";

const {
    FORM: {
        ROOT,
        GET_VALUES, RESET, ON_SUBMIT, SHOW_ERROR, GET_INPUT_BY_ID, GET_INPUTS_BY_NAME,
        FOR_EACH, MAP, LENGTH, TO_ARRAY, TO_OBJECT
    }, TRACK, CONFIG, USE_INPUTS
} = routes

export const meta = () => {
    return getMeta(
        "Form Inputs state management documentation for react aio-inputs",
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
            <li><CallDefinition name="getValues" hl/> a method to return your inputs values. Return <span
                className="hl">null</span> if <AppLink aria-label="Navigate to lockValuesOnError config"
                                                       to={CONFIG.ROOT + CONFIG.LOCK_VALUES_ON_ERROR}
                                                       className="link">LOCK VALUES ON ERROR</AppLink> is
                set to true
            </li>
            <li><CallDefinition name="reset" hl/> a method to reset a form.</li>
            <li><CallDefinition name="forEach" hl/> a method to loop through each input.</li>
            <li><CallDefinition name="map" hl/> a method loop through each input with return capabilities.</li>
            <li><span className="oKey hl">length</span> a property which contains inputs length.</li>
            <li><CallDefinition name="toArray" hl/> a method to return an array version of your inputs.</li>
            <li><CallDefinition name="toObject" hl/> a method to return an object version of your inputs.</li>
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
        <h2 id={getAnchor(GET_INPUT_BY_ID)} className="subTitle smt">
            Get an input by ID
        </h2>
        <p className="description">
            <DotProperty value="getInputById" hl/> let you to get an input by his ID.
        </p>
        <Code copyText={FORM_CODE.GET_INPUT_BY_ID}>
            <Create close form>
                ...
            </Create>
            <ConsoleLog space method="getInputById" comment="Get your input" content={'"input id"'}/>
        </Code>
        <h2 id={getAnchor(GET_INPUTS_BY_NAME)} className="subTitle smt">
            Get inputs by name
        </h2>
        <p className="description">
            <DotProperty value="getInputsByName" hl/> let you to get your input by his name.
            It always return an array.
        </p>
        <Code copyText={FORM_CODE.GET_INPUTS_BY_NAME}>
            <Create close form>
                ...
            </Create>
            <ConsoleLog space method="getInputsByName" comment="Get your inputs" content={'"input name"'}/>
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

        <h2 id={getAnchor(FOR_EACH)} className="subTitle smt">
            For each input
        </h2>
        <p className="description">
            <DotProperty value="forEach" hl/> acts like the very popular
            known <DotProperty name="Array.prototype" value="forEach" hl/> method.
            More on <ExternalLink aria-label={"Link to mdn site for forEach method"}
                                  to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">
            FOR EACH
        </ExternalLink>.
        </p>
        <Code copyText={FORM_CODE.FOR_EACH}>
            <Create close form>
                ...
            </Create>
            <ConsoleLog space method="forEach" comment="For each input" noConsole content="..."/>
        </Code>
        <h2 id={getAnchor(MAP)} className="subTitle smt">
            Map inputs
        </h2>
        <p className="description">
            <DotProperty value="map" hl/> acts like the very popular
            known <DotProperty name="Array.prototype" value="map" hl/> method.
            More on <ExternalLink aria-label={"Link to mdn website for map method"}
                                  to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">
            MAP
        </ExternalLink>.
        </p>
        <Code copyText={FORM_CODE.MAP}>
            <Create close form>
                ...
            </Create>
            <ConsoleLog space method="map" comment="Map inputs" noConsole content="..."/>
        </Code>
        <h2 id={getAnchor(LENGTH)} className="subTitle smt">
            Length
        </h2>
        <p className="description">
            <DotProperty value="length" hl method={false}/> give you the inputs length
        </p>
        <Code copyText={FORM_CODE.LENGTH}>
            <Create close form>
                ...
            </Create>
            <ConsoleLog space method="length" comment="Get your inputs length" property/>
        </Code>
        <h2 id={getAnchor(TO_ARRAY)} className="subTitle smt">
            To array
        </h2>
        <p className="description">
            <DotProperty value="toArray" hl/> give you an array version of your
            inputs.
        </p>
        <Code copyText={FORM_CODE.TO_ARRAY}>
            <Create close form>
                ...
            </Create>
            <ConsoleLog space method="toArray" comment="Get your array version"/>
        </Code>
        <h2 id={getAnchor(TO_OBJECT)} className="subTitle smt">
            To object
        </h2>
        <p className="description">
            <DotProperty value="toObject" hl/> give you an object version of your
            inputs. If you defined ids in your inputs, they are used as first keys otherwise, we generate random ids
        </p>
        <Code copyText={FORM_CODE.TO_OBJECT}>
            <Create close form>
                ...
            </Create>
            <ConsoleLog space method="toObject" comment="Get your object version"/>
        </Code>

        <p className="description">
            Hit next to find out how to <AppLink aria-label={"To navigate change the configuration of aio-inputs"}
                                                 className="link" to={CONFIG.ROOT}>CONFIG</AppLink> aio-inputs
            behaviour,
            when using <AppLink aria-label={"To setup a tracking tool"} className="link"
                                to={TRACK.ROOT}>TRACK</AppLink> or async custom validation.
        </p>
        <div className="foot">
            <PageButton to={USE_INPUTS.ROOT + USE_INPUTS.OBJECT} prev/>
            <PageButton to={CONFIG.ROOT + CONFIG.LOCK_VALUES_ON_ERROR}/>
        </div>
    </div>
}

export default Form
