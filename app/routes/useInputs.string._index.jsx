import {getMeta, LIB_NAME, routes} from "../util/constants";
import Line from "../components/line";
import ImportStatement from "../components/codeComponents/importStatement";
import Code from "../components/code";
import {USE_INPUTS_CODE} from "../code";
import Create from "../components/codeComponents/create";
import AppLink from "../components/appLink";
import InputLine from "../components/codeComponents/inputLine";
import DotProperty from "../components/codeComponents/dotProperty";
import FormRef from "../components/FormRef";
import PageButton from "../components/pageButton";

const {ROOT: GET_STARTED, USE_INPUTS: {ROOT, STRING, ARRAY}, PROPERTIES} = routes

export const meta = () => {

    return getMeta(
        `Use Inputs hook with a string, documentation for react ${LIB_NAME}`,
        "string, hook, useInputs, redux, react. Best, simple, fast and powerful library inputs state management for react."
        , ROOT + STRING
    );
};
export const UseStringInput = () => {
    return <div className="data">
        <h1 className="title">useInputs with string</h1>
        <p className="titleIntro">
            You can create an input state by passing a string
            as an argument. When you use a string, the input is <span className="package bold">
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
            For example, you want the <span className="hl">phoneNumber</span> of a user.
        </p>
        <Code copyText={USE_INPUTS_CODE.CREATE_STRING}>
            <Create close multiple={false}/>
        </Code>

        <p className="description">
            <DotProperty name="myInput" value="phoneNumber" method={false} hl/> contains these <AppLink
            aria-label={"To show available properties"} className="link"
            to={PROPERTIES.ROOT + PROPERTIES.INPUTS}>ready-to-use properties</AppLink>.<br/>
        </p>
        <p className="description">
            Now bind an input element.
        </p>
        <Code copyText={USE_INPUTS_CODE.BIND}>
            <InputLine name={<DotProperty name="myInput" value="phoneNumber" method={false}/>}/>
        </Code>
        <p className="description">
            That is it. The value entered by the user will
            be stored in <DotProperty name={"phoneNumber"} value="value" method={false} hl/>.
        </p>
        <FormRef/>
        <p className="description">
            Hit next to find out how to use array with {LIB_NAME}
        </p>
        <div className="foot">
            <PageButton to={GET_STARTED} prev/>
            <PageButton to={ROOT + ARRAY}/>
        </div>
    </div>
}

export default UseStringInput
