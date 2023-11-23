import {getMeta, RADIO_LINK, RADIO_LINK_VALID, routes} from "../util/constants";
import Line from "../components/line";
import Iframe from "../components/iframe/Iframe";
import PageButton from "../components/pageButton";

export const meta = () => {

    return getMeta(
        "Use Inputs type radio examples, documentation for react aio-inputs",
        "input type radio examples, fast and powerful library inputs state management for react."
        , ROOT);
};

const {EXAMPLES: {ROOT, PASSWORD, CHECKBOX}} = routes

export const RadioExamples = () => {

    return <div className="data">
        <h1 className="title">Input type radio examples</h1>
        <p className="titleIntro">
            For radio type, you have to specify type radio and the label for user convenience when creating inputs. You
            can group them by name,
            and if so, for validation, add it to one of them and they will share it. But if you want, add it to all of
            them. It is up to you. Control them with the <span className="oKey hl">checked</span> properties
        </p>
        <Line/>
        <h2 className="subTitle">
            Radio input with no validation
        </h2>
        <Iframe height={600} title="Radio input with no validation" src={RADIO_LINK}/>
        <h2 className="subTitle">
            Radio input with validation
        </h2>
        <Iframe height={600} title="Radio input with validation" src={RADIO_LINK_VALID}/>
        <p className="description">
            Hit next for checkbox examples with aio-inputs
        </p>
        <div className="foot">
            <PageButton to={ROOT + PASSWORD} prev/>
            <PageButton to={ROOT + CHECKBOX}/>
        </div>
    </div>
}

export default RadioExamples