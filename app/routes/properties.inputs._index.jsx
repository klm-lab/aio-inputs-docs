import {commonPropMeta} from "./properties._index";
import {routes} from "../util/constants";
import Code from "../components/code";
import {TopComment} from "../components/codeComponents/create";
import DotProperty from "../components/codeComponents/dotProperty";
import KeyValue, {ChildBracket} from "../components/codeComponents/keyValue";
import LockIcon from "../assets/icon/LockIcon";
import UnlockIcon from "../assets/icon/UnlockIcon";
import CallDefinition, {CallProperty} from "../components/codeComponents/callDefinition";
import AppLink from "../components/appLink";
import {PROPERTIES_CODE} from "../code";
import PageButton from "../components/pageButton";

const {
    PROPERTIES: {INPUTS, ROOT, VALIDATIONS, INPUTS_PROPS, INPUTS_FILES},
    TRACK,
} = routes;

export const meta = () => {

    return commonPropMeta(ROOT + INPUTS)
};

export const Properties = () => {
    return <div className="data">
        <h1 className="title smt">Input properties</h1>
        <p className="description">
            When you create inputs, these properties are injected for your convenience. You can access and use, but
            cannot modified
            properties that are locked <LockIcon/>. You can only modified unlocked ones <UnlockIcon/>.
        </p>
        <h2 className="subTitle">Properties list</h2>
        <ul className="extra item-space-5">
            <li><CallProperty name="props" hl/> use this to spread all input props including onChange <LockIcon/>.
                Check <AppLink
                    aria-label={"To list all props properties"} to={ROOT + INPUTS_PROPS} className="link">PROPS
                    PROPERTIES</AppLink> to know more of it
            </li>
            <li><CallProperty name="data"/> input data. Use it to store any useful extra data. This property is never
                reset <UnlockIcon/></li>
            <li><CallProperty name="id"/> input id <UnlockIcon/></li>
            <li><CallProperty name="key"/> a unique key <LockIcon/></li>
            <li><CallProperty name="name" hl/> input name <UnlockIcon/></li>
            <li><CallProperty name="min" hl/> input type range minimum value <UnlockIcon/></li>
            <li><CallProperty name="max" hl/> input type range maximum value <UnlockIcon/></li>
            <li><CallProperty name="type" hl/> html input type <UnlockIcon/></li>
            <li><CallProperty name="label" hl/> input label <UnlockIcon/></li>
            <li><CallProperty name="value" hl/> input value <UnlockIcon/></li>
            <li><CallProperty name="files" hl/> input upload files <LockIcon/>. Check <AppLink
                aria-label={"To list all file properties"} to={ROOT + INPUTS_FILES} className="link">FILES
                PROPERTIES</AppLink> to know more of it
            </li>
            <li><CallProperty name="accept" hl/> input type file accept property <span
                className="hl">string</span> <UnlockIcon/></li>
            <li><CallProperty name="checked" hl/> input checked state <span
                className="hl">boolean</span> <UnlockIcon/></li>
            <li><CallProperty name="multiple" hl/> input property for multiple selection <span
                className="hl">boolean</span> <UnlockIcon/></li>
            <li><CallProperty name="merge" hl/> merge uploaded files instead of override <span
                className="hl">boolean</span> <UnlockIcon/></li>
            <li><CallProperty name="valid" hl/> input valid state <span
                className="hl">boolean</span><UnlockIcon/></li>
            <li><CallProperty name="touched" hl/> input touched state <span
                className="hl">boolean</span><UnlockIcon/></li>
            <li><CallProperty name="placeholder" hl/> input placeholder. Can be used to clear a select
                input. <UnlockIcon/></li>
            <li><CallProperty name="errorMessage" hl/> input general errorMessage <UnlockIcon/></li>
            <li><CallProperty name="validating" hl/> input asynchronous validation state <span
                className="hl">boolean</span> <UnlockIcon/></li>
            <li><CallProperty name="validationFailed" hl/> <span
                className="hl">boolean</span> <UnlockIcon/></li>
            <li><CallProperty name="validation" hl/> input
                validations <UnlockIcon/> Check <AppLink aria-label={"Check all validations properties"}
                                                         to={ROOT + VALIDATIONS} className="link">VALIDATIONS
                    PROPERTIES</AppLink> to know more of it.
            </li>
            <li><CallDefinition name="onChange" hl/> a method to change input value.
                Accept InputEvent or customValue <LockIcon/></li>
            <li><CallDefinition name="afterChange" hl/> a method that run after a change. It receives an object with
                current
                value and current input<LockIcon/></li>
            <li><CallDefinition name="set" hl/> a method to set or update
                an input type, value or data. <span className="hl key">Use with caution</span> <LockIcon/></li>
            <Code copyText={PROPERTIES_CODE.SET}>
                <TopComment comment="Set some data"/>
                <div className="codeLine">
                    <DotProperty name="input" value="set" params='"data", My_Data'/>
                </div>
                <TopComment space comment="Show some password"/>
                <div className="codeLine">
                    <DotProperty name="input" value="set" params='"type", "text"'/>
                </div>
                <TopComment space comment="Hide some password"/>
                <div className="codeLine">
                    <DotProperty name="input" value="set" params='"type", "password"'/>
                </div>
                <TopComment space comment="Set some value"/>
                <div className="codeLine">
                    <DotProperty name="input" value="set" params='"value", MY_VALUE'/>
                </div>
                <TopComment space comment="Set blob or file while setting file input value"/>
                <div className="codeLine">
                    <DotProperty name="input" value="set" params={
                        <>
                            <span>{'"value", MY_URL_OR_MY_ARRAY_OF_URL, '}</span>
                            <ChildBracket inline stop={false} noIndent>
                                <KeyValue objKey="getBlob" directValue={false} value={
                                    <span className="no-indent">
                                                <CallDefinition anonymous arrow params="url"/>
                                                <ChildBracket>
                                                    <TopComment comment="get your blob with the url"/>
                                                    <div className="codeLine">
                                                        <span className="keyword">return</span>
                                                        <span>a blob or a file</span>
                                                    </div>
                                                </ChildBracket>
                                            </span>
                                }/>
                            </ChildBracket>
                        </>
                    }/>
                </div>
            </Code>
        </ul>
        <p className="description">
            Hit next to know more
            about spreadable input props <AppLink aria-label={"To check spreadable input props properties"}
                                                  className="link"
                                                  to={ROOT + INPUTS_PROPS}>PROPERTIES</AppLink>
        </p>
        <div className="foot">
            <PageButton to={TRACK.ROOT} prev/>
            <PageButton to={ROOT + INPUTS_PROPS}/>
        </div>
    </div>
}

export default Properties
