import Line from "../../../components/line";
import PageButton from "../../../components/pageButton";
import {useNavigate} from "@remix-run/react";
import {routes} from "../../../util/constants";
import ImportStatement from "../../../components/codeComponents/importStatement";
import StringArray from "./stringArray";
import MixedArray from "./mixedArray";

const {USE_INPUTS} = routes;

const Array = () => {

    const navigate = useNavigate()

    return <div className="data">
        <h1 className="title">useInputs with array</h1>
        <p className="titleIntro">
            For multiple inputs, You can use as arguments :
        </p>
        <ul className="extra">
            <li>An array of string</li>
            <li>An array of a mix of string and object</li>
            <li>An array of object</li>
        </ul>
        <p className="description">
            When you use an array of string, the input
            is <span className="package bold">
            VALID
        </span> by default, because
            there is no validation attached to it.<br/> Please use it if :
        </p>
        <ul className="extra">
            <li>You want some inputs with no validation</li>
        </ul>
        <Line/>
        <ImportStatement/>
        <StringArray/>
        <MixedArray/>
        <p className="description">
            Hit next to find out how to use object with aio-inputs
        </p>
        <div className="foot">
            <PageButton onClick={() => navigate(USE_INPUTS.ROOT + USE_INPUTS.STRING)} text="Prev"/>
            <PageButton onClick={() => navigate(USE_INPUTS.ROOT + USE_INPUTS.OBJECT)}/>
        </div>
    </div>
}

export default Array
