import {Link, useNavigate} from "@remix-run/react";
import Line from "../../components/line";
import Code from "../../components/code";
import CreateInputs from "../../components/codeComponents/CreateInputs";
import {routes} from "../../util/constants";
import PageButton from "../../components/pageButton";
import {getAnchor} from "../../util";
import ConsoleLog from "../../components/codeComponents/consoleLog";

const {
    FORM: {
        GET_VALUES, RESET,
        FOR_EACH, MAP, LENGTH, TO_ARRAY, TO_OBJECT
    }, TRACK, CONFIG
} = routes

const FormEntry = () => {
    const navigate = useNavigate();

    return <div className="data">
        <h1 id={getAnchor(GET_VALUES)} className="title smt">Aio-Inputs getValues</h1>
        <p className="description">
            Use <span className="hl oKey">getValues</span> to get your inputs values. The result is an object where the
            keys
            match the name of your inputs.<br/>
            If you didn't set name on inputs creation, generated ones are used.
        </p>
        <Line/>
        <h2 className="subTitle">
            Get your Values
        </h2>
        <p className="description">
            <span className="hl">form.<span className="oKey">getValues</span></span> is a
            practical way to get the values of your inputs at once.</p>
        <Code>
            <CreateInputs close form>
                ...
            </CreateInputs>
            <ConsoleLog space method="getValues" comment="Get your values"/>
        </Code>
        <h2 id={getAnchor(RESET)} className="subTitle smt">
            Reset inputs
        </h2>
        <p className="description">
            <span className="hl">form.<span className="oKey">reset</span></span> Let
            you reset the value of your inputs</p>
        <Code>
            <CreateInputs close form>
                ...
            </CreateInputs>
            <ConsoleLog space method="reset" comment="Do a reset" noConsole/>
        </Code>

        <h2 id={getAnchor(FOR_EACH)} className="subTitle smt">
            For each input
        </h2>
        <p className="description">
            <span className="hl">form.<span className="oKey">forEach</span></span> emulates the very popular
            known <span className="hl">Array.prototype.<span className="oKey">forEach</span></span> method.
            More on <Link
            target="_blank"
            rel="noopener noreferrer"
            to={"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"}
            className="link">MDN FOR EACH</Link>
        </p>
        <Code>
            <CreateInputs close form>
                ...
            </CreateInputs>
            <ConsoleLog space method="forEach" comment="Do a reset" noConsole content="..."/>
        </Code>
        <h2 id={getAnchor(MAP)} className="subTitle smt">
            Map inputs
        </h2>
        <p className="description">
            <span className="hl">form.<span className="oKey">map</span></span> emulates the very popular
            known <span className="hl">Array.prototype.<span className="oKey">map</span></span> method.
            More on <Link
            target="_blank"
            rel="noopener noreferrer"
            to={"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"}
            className="link">MDN MAP</Link>
        </p>
        <Code>
            <CreateInputs close form>
                ...
            </CreateInputs>
            <ConsoleLog space method="map" comment="Map inputs" noConsole content="..."/>
        </Code>
        <h2 id={getAnchor(LENGTH)} className="subTitle smt">
            Length
        </h2>
        <p className="description">
            <span className="hl">form.<span className="oKey">length</span></span> give you the inputs length
        </p>
        <Code>
            <CreateInputs close form>
                ...
            </CreateInputs>
            <ConsoleLog space method="length" comment="Get your inputs length" property/>
        </Code>
        <h2 id={getAnchor(TO_ARRAY)} className="subTitle smt">
            To array
        </h2>
        <p className="description">
            <span className="hl">form.<span className="oKey">toArray</span></span> give you an array version of your
            inputs.
        </p>
        <Code>
            <CreateInputs close form>
                ...
            </CreateInputs>
            <ConsoleLog space method="toArray" comment="Get your array version"/>
        </Code>
        <h2 id={getAnchor(TO_OBJECT)} className="subTitle smt">
            To object
        </h2>
        <p className="description">
            <span className="hl">form.<span className="oKey">toObject</span></span> give you an object version of your
            inputs.
        </p>
        <Code>
            <CreateInputs close form>
                ...
            </CreateInputs>
            <ConsoleLog space method="toObject" comment="Get your object version"/>
        </Code>

        <p className="description">
            Hit next to find out how to <Link className="link" to={CONFIG.ROOT}>CONFIG</Link> aio-inputs behaviour.
            When using <Link className="link" to={TRACK.SETUP}>TRACK</Link> or async custom validation.
        </p>
        <div className="foot">
            <PageButton onClick={() => navigate(routes.USE_INPUTS.OBJECT)} text="Prev"/>
            <PageButton onClick={() => navigate(CONFIG.ROOT)}/>
        </div>
    </div>
}

export default FormEntry