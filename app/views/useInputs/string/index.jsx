import Code from "../../../components/code";
import Line from "../../../components/line";
import PageButton from "../../../components/pageButton";
import {getInputsKey, routes} from "../../../util/constants";
import ImportStatement from "../../../components/codeComponents/importStatement";
import InputLine from "../../../components/codeComponents/inputLine";
import ReadyToUse from "../../../components/codeComponents/readyToUse";
import FormRef from "../../../components/FormRef";
import Bracket from "../../../components/codeComponents/bracket";
import Create from "../../../components/codeComponents/create";
import DotProperty from "../../../components/codeComponents/dotProperty";
import AppLink from "../../../components/appLink";
import {USE_INPUTS_CODE} from "../../../code";

const {ROOT, USE_INPUTS, PROPERTIES} = routes;

const String = () => {

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
            If you log <span className="hl">myInput</span>, you'll see these related
            ready-to-use properties and <AppLink aria-label={"To show available properties"} className="link"
                                                 to={PROPERTIES.ROOT + PROPERTIES.INPUTS}>MANY OTHERS</AppLink>.<br/>
            The name, id and label is the value of your string.
        </p>
        <Code copyText={USE_INPUTS_CODE.PROPERTIES}>
            <Bracket>
                <ReadyToUse keys={getInputsKey('"phoneNumber",')}/>
            </Bracket>
        </Code>
        <p className="description">
            Now bind <span className="hl">myInput</span>, to an input element
        </p>
        <Code copyText={USE_INPUTS_CODE.BIND}>
            <InputLine name={"myInput"}/>
        </Code>
        <p className="description">
            That is it. The value entered by the user will
            be stored in <DotProperty name={"myInput"} value="value" method={false} hl/>.
        </p>
        <FormRef/>
        <p className="description">
            Hit next to find out how to use array with aio-inputs
        </p>
        <div className="foot">
            <PageButton to={ROOT} prev/>
            <PageButton to={USE_INPUTS.ROOT + USE_INPUTS.ARRAY}/>
        </div>
    </div>
}

export default String
