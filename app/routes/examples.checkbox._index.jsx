import {CHECKBOX_LINK, CHECKBOX_LINK_VALID, getMeta, RADIO_LINK, RADIO_LINK_VALID, routes} from "../util/constants";
import Line from "../components/line";
import Iframe from "../components/iframe/Iframe";
import PageButton from "../components/pageButton";

export const meta = () => {

    return getMeta(
        "Use Inputs type checkbox examples, documentation for react aio-inputs",
        "input type checkbox examples, fast and powerful library inputs state management for react."
        , ROOT);
};

const {EXAMPLES: {ROOT, RADIO,SELECT}} = routes

export const CheckboxExamples = () => {

   return <div className="data">
        <h1 className="title">Input type checkbox examples</h1>
        <p className="titleIntro">
            For checkbox type, you have to specify type checkbox and the label for user convenience when creating inputs. You
            can group them by name,
            and if so, for validation, add it to one of them and they will share it. But if you want, add it to all of
            them. It is up to you. Control them with the <span className="oKey hl">checked</span> properties
        </p>
        <Line/>
        <h2 className="subTitle">
            Checkbox input with no validation
        </h2>
        <Iframe height={600} title="Checkbox input with no validation" src={CHECKBOX_LINK}/>
        <h2 className="subTitle">
            Checkbox input with validation
        </h2>
        <Iframe height={600} title="Checkbox input with validation" src={CHECKBOX_LINK_VALID}/>
        <p className="description">
            Hit next for select examples with aio-inputs
        </p>
        <div className="foot">
            <PageButton to={ROOT + RADIO} prev/>
            <PageButton to={ROOT + SELECT}/>
        </div>
    </div>
}

export default CheckboxExamples
