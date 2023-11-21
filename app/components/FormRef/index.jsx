import {routes} from "../../util/constants";
import AppLink from "../appLink";
import Code from "../code";
import {USE_INPUTS_CODE} from "../../code";
import Create, {TopComment} from "../codeComponents/create";
import DotProperty from "../codeComponents/dotProperty";

const {ROOT, RESET, GET_VALUES} = routes.FORM

const FormRef = () => {
    return <>
        <h2 className="subTitle">
            Validity
        </h2>
        <p className="description">
            To know if your form (all your inputs) is valid, use <span className="hl oKey">isValid</span> property.
            Every input has also his own <span className="hl oKey">valid</span> property
        </p>
        <Code copyText={USE_INPUTS_CODE.VALIDITY}>
            <TopComment comment="all inputs"/>
            <div className="codeLine">
                <DotProperty name="yourInputs" value="isValid" method={false}/>
            </div>
            <TopComment space comment="Each input"/>
            <div className="codeLine">
                <DotProperty name="eachInput" value="valid" method={false}/>
            </div>
        </Code>
        <p className="description">
            You can <AppLink aria-label="To reset your inputs" className="link" to={ROOT + RESET}>RESET</AppLink> or
            also
            get all <AppLink aria-label="To get values from your inputs" className="link"
                             to={ROOT + GET_VALUES}>VALUES</AppLink> by
            using the <AppLink aria-label={"Link to form utilities"} className="link" to={ROOT + GET_VALUES}>FORM
            OBJECT</AppLink>.
        </p>
    </>
}

export default FormRef