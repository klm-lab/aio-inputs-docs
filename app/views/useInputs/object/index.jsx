import Line from "../../../components/line";
import PageButton from "../../../components/pageButton";
import {getInputsKey, routes} from "../../../util/constants";
import ImportStatement from "../../../components/codeComponents/importStatement";
import Code from "../../../components/code";
import ReadyToUse from "../../../components/codeComponents/readyToUse";
import InputLine from "../../../components/codeComponents/inputLine";
import FormRef from "../../../components/FormRef";
import Box from "../../../components/box";
import Bracket from "../../../components/codeComponents/bracket";
import KeyValue, {ChildBracket} from "../../../components/codeComponents/keyValue";
import ObjectValidation from "./ObjectValidation";
import Create from "../../../components/codeComponents/create";
import MapInputs from "../../../components/codeComponents/mapInputs";
import DotProperty from "../../../components/codeComponents/dotProperty";
import AppLink from "../../../components/appLink";

const {USE_INPUTS, FORM, PROPERTIES} = routes


const ObjectEntry = () => {

    return <div className="data">
        <h1 className="title">useInputs with object</h1>
        <p className="description">
            When you use an object, the input
            is <span className="package bold">
            VALID
        </span> by default if
            there is no validation attached to it.<br/>
            Object sibling keys are always unique. So the id is defined by every first key inside your object.
            You can change all other properties but not the id.
        </p>
        <Box className="warn" message="If you add an id, it will be ignored."/>
        <Line/>
        <ImportStatement/>
        <h2 className="subTitle">
            Create your inputs
        </h2>
        <p className="description">
            For example, you want the <span className="hl">name, and gender</span> of a user.<br/>
            Call <span className="definition">useInputs</span> like this.
        </p>
        <Code>
            <Create close form>
                <Bracket>
                    <KeyValue objKey="name" value="{},"/>
                    <KeyValue objKey="gender" value="{}"/>
                </Bracket>
            </Create>
        </Code>
        <p className="description">Notice that we extract also the <span className="hl">form</span> object
            from <span className="package hl">aio-inputs. </span>
            Because we can't use map like array to render our inputs.
            We will use <DotProperty value="map" hl/> instead, or just destructure our inputs and render them. It is up
            to you
        </p>
        <p className="description">
            If you log <span className="hl">myInputs</span>, you'll see an object
            where first keys are <span className="hl">name and gender</span>. Those keys have as value these
            related ready-to-use properties and <AppLink aria-label={"To show all inputs properties"} className="link"
                                                         to={PROPERTIES.ROOT + PROPERTIES.INPUTS}>MANY OTHERS</AppLink>.<br/>
            The name, id and label match every first key.
        </p>
        <Code>
            <Bracket>
                {["name", "gender"].map(s => {
                    return <KeyValue directValue={false} key={s} objKey={s} value={
                        <ChildBracket>
                            <ReadyToUse keys={getInputsKey(`"${s}",`)}/>
                        </ChildBracket>
                    }/>
                })}
            </Bracket>
        </Code>
        <p className="description">
            Now bind <span className="hl">myInputs</span>, to some input element.<br/>
        </p>
        <ul className="extra">
            <li>With <DotProperty value="map" hl/>, <AppLink aria-label={"To show the form map utility"}
                                                             className="link"
                                                             to={FORM.ROOT + FORM.MAP}>MORE DETAILS</AppLink>
            </li>
        </ul>
        <Code>
            <MapInputs name="form"/>
        </Code>
        <ul className="extra">
            <li>With destructuring</li>
        </ul>
        <Code>
            <div className="codeLine">
                <span className="keyword">const</span>
                <ChildBracket inline stop={false}>
                    <span>name , gender</span>
                </ChildBracket>
                <span>=</span>
                <span className="key no-indent">myInputs</span>
                <span>;</span>
            </div>
            <div className="codeLine">
                <span className="keyword">return</span>
                <span className="no-indent">{"<>"}</span>
            </div>
            <div className="codeLine">
                <InputLine name="name"/>
                <InputLine name="gender"/>
            </div>
            <div className="codeLine">
                <span className="no-indent">{"</>"}</span>
            </div>
        </Code>

        <p className="description">
            That is it. The value entered by the user will be stored in
            corresponding <DotProperty name="name | gender" value="value" hl/> located in <span
            className="hl">myInputs</span>.
        </p>
        <FormRef/>
        <ObjectValidation/>
        <p className="description">
            Hit next to find out how to use form object with aio-inputs.
        </p>
        <div className="foot">
            <PageButton to={USE_INPUTS.ROOT + USE_INPUTS.ARRAY} prev/>
            <PageButton to={FORM.ROOT + FORM.GET_VALUES}/>
        </div>
    </div>
}

export default ObjectEntry
