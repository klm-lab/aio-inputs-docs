import Code from "../../../../components/code";
import FormRef from "../../../../components/FormRef";
import Create, {ArrayParams} from "../../../../components/codeComponents/create";
import MapInputs from "../../../../components/codeComponents/mapInputs";
import DotProperty from "../../../../components/codeComponents/dotProperty";
import AppLink from "../../../../components/appLink";
import {USE_INPUTS_CODE} from "../../../../code";
import {routes} from "../../../../util/constants";

const {PROPERTIES} = routes;

const StringArray = () => {
    return <>
        <h2 className="subTitle">
            Array of string
        </h2>
        <p className="description">
            Call <span className="definition">useInputs</span> with an array of string.
            For example, you want the <span className="hl">name, phoneNumber, and gender</span> of a user
        </p>
        <Code copyText={USE_INPUTS_CODE.CREATE_ARRAY_STRING}>
            <Create close array>
                <ArrayParams params={["name", "phoneNumber", "gender"]}/>
            </Create>
        </Code>

        <p className="description">
            <span className="hl">myInputs</span> contains these <AppLink aria-label={"To show all inputs properties"}
                                                                         className="link"
                                                                         to={PROPERTIES.ROOT + PROPERTIES.INPUTS}>related
            ready-to-use
            properties</AppLink>.
        </p>
        <p className="description">
            Now bind some input element.
        </p>
        <Code copyText={USE_INPUTS_CODE.ARRAY_BIND}>
            <MapInputs/>
        </Code>
        <p className="description">
            That is it. The value entered by the user will be stored in corresponding
            <DotProperty name="ip" value="value" method={false} hl/>
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