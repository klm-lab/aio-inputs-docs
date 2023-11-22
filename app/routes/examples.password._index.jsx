import {getMeta, PASSWORD_LINK, routes} from "../util/constants";
import Iframe from "../components/iframe/Iframe";
import PageButton from "../components/pageButton";

export const meta = () => {

    return getMeta(
        "Use Inputs password examples, documentation for react aio-inputs",
        "input password examples, fast and powerful library inputs state management for react."
        , ROOT);
};

const {EXAMPLES: {ROOT, RADIO}, PROPERTIES} = routes

export const PasswordExamples = () => {

    return <div className="data">
        <h2 className="subTitle">
            Password example
        </h2>
        <Iframe height={400} title="A single input with no validation" src={PASSWORD_LINK}/>
        <p className="description">
            Hit next for type radio examples with aio-inputs
        </p>
        <div className="foot">
            <PageButton to={PROPERTIES.ROOT + PROPERTIES.INPUTS} prev/>
            <PageButton to={ROOT + RADIO}/>
        </div>
    </div>
}

export default PasswordExamples
