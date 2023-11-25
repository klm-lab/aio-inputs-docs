import {getMeta, routes} from "../util/constants";
import Line from "../components/line";
import Code from "../components/code";
import {GET_STARTED_CODE} from "../code";
import ImportStatement from "../components/codeComponents/importStatement";
import PageButton from "../components/pageButton";

export const meta = () => {
    return getMeta(
        "Inputs state management documentation for react aio-inputs",
        "Best, simple, fast and powerful library inputs state management for react");
};

export default function Root() {
    return <div className="data">
        <h1 className="title">aio-inputs</h1>
        <p className="titleIntro">
            An input state management for React. It comes with useful common validations if enabled.
            It supports custom validation asynchronous or not, with dynamic error messages with some additional
            features:
        </p>
        <ul className="extra">
            <li>Inputs tracking outside a component</li>
            <li>Easy data loading when edit</li>
        </ul>
        <Line/>
        <h2 className="subTitle">
            Install with npm
        </h2>
        <Code copyText={GET_STARTED_CODE.NPM}>
            <div className="codeLine">
                <span className="keyword">npm</span>
                <span>i</span>
                <span>aio-inputs</span>
            </div>
        </Code>
        <h2 className="subTitle">
            Install with yarn
        </h2>
        <Code copyText={GET_STARTED_CODE.YARN}>
            <div className="codeLine">
                <span className="keyword">yarn</span>
                <span>add</span>
                <span>aio-inputs</span>
            </div>
        </Code>
        <ImportStatement/>
        <p className="description">
            Go the next step to find out how to use it
        </p>
        <div className="foot">
            <div/>
            <PageButton to={routes.USE_INPUTS.ROOT + routes.USE_INPUTS.STRING}/>
        </div>
    </div>;
}
