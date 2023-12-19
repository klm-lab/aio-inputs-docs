import {getMeta, LIB_NAME, routes} from "../util/constants";
import Line from "../components/line";
import ImportStatement from "../components/codeComponents/importStatement";
import StringArray from "../views/useInputs/array/stringArray";
import MixedArray from "../views/useInputs/array/mixedArray";
import PageButton from "../components/pageButton";

const {ROOT, ARRAY, STRING, OBJECT} = routes.USE_INPUTS

export const meta = () => {

    return getMeta(
        `Use Inputs hook with an array, documentation for react ${LIB_NAME}`,
        "array,string, object, hook, useInputs, redux, react. Best, simple, fast and powerful library inputs state management for react."
        , ROOT + ARRAY
    );
};
export const UseInputs = () => {
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
            Hit next to find out how to use object with {LIB_NAME}
        </p>
        <div className="foot">
            <PageButton to={ROOT + STRING} prev/>
            <PageButton to={ROOT + OBJECT}/>
        </div>
    </div>
}

export default UseInputs
