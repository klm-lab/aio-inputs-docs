import {Link, useNavigate} from "@remix-run/react";
import Line from "../../components/line";
import Code from "../../components/code";
import Create from "../../components/codeComponents/create";
import {routes} from "../../util/constants";
import PageButton from "../../components/pageButton";
import {getAnchor} from "../../util";
import ConsoleLog from "../../components/codeComponents/consoleLog";
import DotProperty from "../../components/codeComponents/dotProperty";
import CallDefinition from "../../components/codeComponents/callDefinition";
import ExternalLink from "../../components/externalLink";

const {
    FORM: {
        GET_VALUES, RESET,
        FOR_EACH, MAP, LENGTH, TO_ARRAY, TO_OBJECT
    }, TRACK, CONFIG, USE_INPUTS
} = routes

const FormEntry = () => {
    const navigate = useNavigate();

    return <div className="data">
        <h1 id={getAnchor(GET_VALUES)} className="title smt">Form</h1>
        <p className="description">
            The form object is immutable. It will never change once created. You can safely use it in useEffect.
            It gives you access to these properties / method :
        </p>
        <ul className="extra item-space">
            <li><CallDefinition name="getValues" hl/> a method to return your inputs values.</li>
            <li><CallDefinition name="reset" hl/> a method to reset a form.</li>
            <li><CallDefinition name="forEach" hl/> a method to loop through each input.</li>
            <li><CallDefinition name="map" hl/> a method loop through each input with return capabilities.</li>
            <li><span className="oKey hl">length</span> a property which contains inputs length.</li>
            <li><CallDefinition name="toArray" hl/> a method to return an array version of your inputs.</li>
            <li><CallDefinition name="toObject" hl/> a method to return an object version of your inputs.</li>
        </ul>
        <Line/>
        <h2 className="subTitle">
            Get your Values
        </h2>
        <p className="description">
            <DotProperty value="getValues" hl/> is a
            practical way to get the values of your inputs at once.
            The result is an object where the keys match the name of your inputs.
            If you didn't set name on inputs creation, random ones are used.
        </p>
        <Code>
            <Create close form>
                ...
            </Create>
            <ConsoleLog space method="getValues" comment="Get your values"/>
        </Code>
        <h2 id={getAnchor(RESET)} className="subTitle smt">
            Reset inputs
        </h2>
        <p className="description">
            <DotProperty value="reset" hl/> reset the value of your inputs</p>
        <Code>
            <Create close form>
                ...
            </Create>
            <ConsoleLog space method="reset" comment="Do a reset" noConsole/>
        </Code>

        <h2 id={getAnchor(FOR_EACH)} className="subTitle smt">
            For each input
        </h2>
        <p className="description">
            <DotProperty value="forEach" hl/> acts like the very popular
            known <DotProperty name="Array.prototype" value="forEach" hl/> method.
            More on <ExternalLink aria-label={"Link to mdn site for forEach method"}
                                  to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">
            FOR EACH
        </ExternalLink>.
        </p>
        <Code>
            <Create close form>
                ...
            </Create>
            <ConsoleLog space method="forEach" comment="Do a reset" noConsole content="..."/>
        </Code>
        <h2 id={getAnchor(MAP)} className="subTitle smt">
            Map inputs
        </h2>
        <p className="description">
            <DotProperty value="map" hl/> acts like the very popular
            known <DotProperty name="Array.prototype" value="map" hl/> method.
            More on <ExternalLink aria-label={"Link to mdn website for map method"}
                                  to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">
            MAP
        </ExternalLink>.
        </p>
        <Code>
            <Create close form>
                ...
            </Create>
            <ConsoleLog space method="map" comment="Map inputs" noConsole content="..."/>
        </Code>
        <h2 id={getAnchor(LENGTH)} className="subTitle smt">
            Length
        </h2>
        <p className="description">
            <DotProperty value="length" hl method={false}/> give you the inputs length
        </p>
        <Code>
            <Create close form>
                ...
            </Create>
            <ConsoleLog space method="length" comment="Get your inputs length" property/>
        </Code>
        <h2 id={getAnchor(TO_ARRAY)} className="subTitle smt">
            To array
        </h2>
        <p className="description">
            <DotProperty value="toArray" hl/> give you an array version of your
            inputs.
        </p>
        <Code>
            <Create close form>
                ...
            </Create>
            <ConsoleLog space method="toArray" comment="Get your array version"/>
        </Code>
        <h2 id={getAnchor(TO_OBJECT)} className="subTitle smt">
            To object
        </h2>
        <p className="description">
            <DotProperty value="toObject" hl/> give you an object version of your
            inputs. If you defined ids in your inputs, they are used as first keys otherwise, we generate random ids
        </p>
        <Code>
            <Create close form>
                ...
            </Create>
            <ConsoleLog space method="toObject" comment="Get your object version"/>
        </Code>

        <p className="description">
            Hit next to find out how to <Link aria-label={"To navigate change the configuration of aio-inputs"}
                                              className="link" to={CONFIG.ROOT}>CONFIG</Link> aio-inputs behaviour,
            when using <Link aria-label={"To setup a tracking tool"} className="link" to={TRACK.ROOT}>TRACK</Link> or async custom validation.
        </p>
        <div className="foot">
            <PageButton onClick={() => navigate(USE_INPUTS.ROOT + USE_INPUTS.OBJECT)} text="Prev"/>
            <PageButton onClick={() => navigate(CONFIG.ROOT)}/>
        </div>
    </div>
}

export default FormEntry