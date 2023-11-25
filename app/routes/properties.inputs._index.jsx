import {commonPropMeta} from "./properties._index";
import {routes} from "../util/constants";
import Code from "../components/code";
import {TopComment} from "../components/codeComponents/create";
import DotProperty from "../components/codeComponents/dotProperty";
import LanguageIcon from "../assets/icon/LanguageIcon";
import Bracket from "../components/codeComponents/bracket";
import KeyValue, {ChildBracket} from "../components/codeComponents/keyValue";
import Line from "../components/line";
import LockIcon from "../assets/icon/LockIcon";
import UnlockIcon from "../assets/icon/UnlockIcon";
import CallDefinition, {CallProperty} from "../components/codeComponents/callDefinition";
import AppLink from "../components/appLink";
import {PROPERTIES_CODE} from "../code";
import Box from "../components/box";
import PageButton from "../components/pageButton";

const {
    PROPERTIES: {INPUTS, ROOT, VALIDATIONS, INPUTS_PROPS, INPUTS_FILES},
    TRACK, FORM
} = routes;

export const meta = () => {

    return commonPropMeta(ROOT + INPUTS)
};


const CommonInit = ({children, comment, value, copyText}) => {
    return <Code copyText={copyText}>
        <TopComment comment={comment}/>
        <div className="codeLine">
            <DotProperty ponctuation value={"forEach"} noCall={false} params={
                <span className="no-indent">
                    <span>{"ip =>"}</span>
                    <DotProperty name="ip" value="initValue" params={
                        <span className="no-indent">
                            <span className="no-indent">{value}</span>
                            {children}
                        </span>
                    }/>
                </span>
            }/>
        </div>
    </Code>
}

export const CommonSyntax = ({pre, name}) => {
    return <>
        <p className="description">Properties with language icons <LanguageIcon/> support this syntax.<br/>
            For example, the {pre ?? name} can be one of these formats
        </p>
        <Code>
            <TopComment comment="string format"/>
            <Bracket>
                <KeyValue objKey={name} value={`"my ${name}"`}/>
            </Bracket>
            <TopComment comment="object format" space/>
            <Bracket>
                <KeyValue directValue={false} objKey={name} value={
                    <ChildBracket>
                        <KeyValue objKey="en" value={`"My english ${name}"`}/>
                        <KeyValue objKey="fr" value={`"My french ${name}"`}/>
                        <TopComment comment="And so on ..."/>
                    </ChildBracket>
                }/>
            </Bracket>
        </Code>
        <Line/>
    </>
}

export const Properties = () => {
    return <div className="data">
        <h1 className="title smt">Input properties</h1>
        <p className="description">
            When you create inputs, these properties are injected for your convenience. You can access and use, but
            cannot modified
            properties that are locked <LockIcon/>. You can only modified unlocked ones <UnlockIcon/>.
        </p>
        <CommonSyntax name="label"/>
        <h2 className="subTitle">Properties list</h2>
        <ul className="extra item-space-5">
            <li><CallProperty name="props" hl/> use this to spread all input props including onChange <LockIcon/>.
                Check <AppLink
                    aria-label={"To list all props properties"} to={ROOT + INPUTS_PROPS} className="link">PROPS
                    PROPERTIES</AppLink> to
                know
                more of it
            </li>
            <li><CallProperty name="extraData"/> input extra data. Use it to store any useful extra data. This property is never reset <UnlockIcon/></li>
            <li><CallProperty name="id"/> input id <UnlockIcon/></li>
            <li><CallProperty name="key"/> a crypto based key <LockIcon/></li>
            <li><CallProperty name="name" hl/> input name <UnlockIcon/></li>
            <li><CallProperty name="type" hl/> html input type <UnlockIcon/></li>
            <li><CallProperty name="label" hl/> input label <UnlockIcon/><LanguageIcon/></li>
            <li><CallProperty name="value" hl/> input value <UnlockIcon/></li>
            <li><CallProperty name="files" hl/> input upload files <LockIcon/>. Check <AppLink
                aria-label={"To list all file properties"} to={INPUTS_FILES} className="link">FILES
                PROPERTIES</AppLink> to
                know
                more of it
            </li>
            <li><CallProperty name="accept" hl/> input type file accept property <span
                className="hl">string</span> <UnlockIcon/></li>
            <li><CallProperty name="checked" hl/> input checked state <span
                className="hl">boolean</span> <UnlockIcon/></li>
            <li><CallProperty name="multiple" hl/> input property for multiple selection <span
                className="hl">boolean</span> <UnlockIcon/></li>
            <li><CallProperty name="mergeChanges " hl/> merge uploaded files instead of override <span
                className="hl">boolean</span> <UnlockIcon/></li>
            <li><CallProperty name="valid" hl/> input valid state <span
                className="hl">boolean</span><UnlockIcon/></li>
            <li><CallProperty name="touched" hl/> input touched state <span
                className="hl">boolean</span><UnlockIcon/></li>
            <li><CallProperty name="placeholder" hl/> input placeholder. Can be used to clear a select input. <UnlockIcon/></li>
            <li><CallProperty name="errorMessage" hl/> input general errorMessage <UnlockIcon/><LanguageIcon/></li>
            <li><CallProperty name="validating" hl/> input asynchronous validation state <span
                className="hl">boolean</span> <UnlockIcon/></li>
            <li><CallProperty name="asyncValidationFailed" hl/> <span
                className="hl">boolean</span> <UnlockIcon/></li>
            <li><CallProperty name="validation" hl/> input
                validations <UnlockIcon/> Check <AppLink aria-label={"Check all validations properties"}
                                                         to={ROOT + VALIDATIONS} className="link">VALIDATIONS
                    PROPERTIES</AppLink> to know
                more of it.
            </li>
            <li><CallDefinition name="setExtraData" hl/> a method to set or update your extra data <LockIcon/></li>
            <li><CallDefinition name="onChange" hl/> a method to change input value.
                Accept InputEvent or customValue <LockIcon/></li>
            <li><CallDefinition name="initValue" hl/> a method to load value to
                your inputs for an edit. Accept any type of value except for files <LockIcon/>
            </li>
        </ul>
        <CommonInit copyText={PROPERTIES_CODE.INIT} comment="Without file input" value="MY_VALUE"/>
        <p className="description">
            Inputs of type file value need to be a string url <span className="hl">https://....jpg</span> or an
            array of string
            url <span className="hl">[https://....jpg, https://....png]</span><br/>
            When you load data for input type file, you can add an optional function which let you retrieve a blob.
            This function should take an url as param
        </p>
        <CommonInit copyText={PROPERTIES_CODE.INIT_FILES} comment="With file input"
                    value="MY_URL_OR_MY_ARRAY_OF_URL">
            <span>,</span>
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
        </CommonInit>
        <Box className="warn">
                    <span>we recommend you to use <CallDefinition name="initValue" hl/> method
                        from the <AppLink aria-label="Navigate to the form page" to={FORM.ROOT}
                                          className="link">FORM</AppLink> object or any tracking tool.</span>
        </Box>
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
