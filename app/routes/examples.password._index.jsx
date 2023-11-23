import {getMeta, PASSWORD_LINK, routes} from "../util/constants";
import Iframe from "../components/iframe/Iframe";
import PageButton from "../components/pageButton";

export const meta = () => {

    return getMeta(
        "Use Inputs password examples, documentation for react aio-inputs",
        "input password examples, fast and powerful library inputs state management for react."
        , ROOT);
};

const {EXAMPLES: {ROOT, RADIO,TEXT}} = routes

export const PasswordExamples = () => {

    return <div className="data">
        <h1 className="title">
            Password example
        </h1>
        <p className="description">Common use case when dealing with password</p>
        <Iframe height={600} title="Password example" src={PASSWORD_LINK}/>
        <p className="description">
            Hit next for type radio examples with aio-inputs
        </p>
        <div className="foot">
            <PageButton to={ROOT + TEXT} prev/>
            <PageButton to={ROOT + RADIO}/>
        </div>
    </div>
}

export default PasswordExamples
