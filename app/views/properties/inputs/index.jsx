import {Link, useNavigate} from "@remix-run/react";
import Line from "../../../components/line";
import Code from "../../../components/code";
import {TopComment} from "../../../components/codeComponents/create";
import {routes} from "../../../util/constants";
import PageButton from "../../../components/pageButton";
import CallDefinition, {CallProperty} from "../../../components/codeComponents/callDefinition";
import LockIcon from "../../../assets/icon/LockIcon";
import UnlockIcon from "../../../assets/icon/UnlockIcon";
import LanguageIcon from "../../../assets/icon/LanguageIcon";
import Bracket from "../../../components/codeComponents/bracket";
import KeyValue, {ChildBracket} from "../../../components/codeComponents/keyValue";

const {
    PROPERTIES: {VALIDATIONS, ROOT},
    TRACK,
} = routes;

export const CommonSyntax = ({pre,name}) => {
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

const InputsProperties = () => {
    const navigate = useNavigate();

    return <div className="data">
        <h1 className="title smt">Input properties</h1>
        <p className="description">
            When you create inputs, these properties are injected for your convenience. You can access and use, but
            cannot modified
            properties that are locked <LockIcon/>. You can only modified unlocked ones <UnlockIcon/>.
            You are free to add any custom properties.
        </p>
        <CommonSyntax name="label"/>
        <h2 className="subTitle">Properties list</h2>
        <ul className="extra item-space-5">
            <li><CallProperty name="id"/> input id <UnlockIcon/></li>
            <li><CallProperty name="key"/> a crypto based key <LockIcon/></li>
            <li><CallProperty name="name" hl/> input name <UnlockIcon/></li>
            <li><CallProperty name="type" hl/> html input type <UnlockIcon/></li>
            <li><CallProperty name="label" hl/> input label <UnlockIcon/><LanguageIcon/></li>
            <li><CallProperty name="value" hl/> input value <UnlockIcon/></li>
            <li><CallProperty name="files" hl/> input upload files <LockIcon/> Check <Link aria-label={"To list all file properties"} to={"#files"} className="link">FILES PROPERTIES</Link> to know
                more of it
            </li>
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
            <li><CallProperty name="placeholder" hl/> input touched state <UnlockIcon/></li>
            <li><CallProperty name="errorMessage" hl/> input general errorMessage <UnlockIcon/><LanguageIcon/></li>
            <li><CallProperty name="validating" hl/> input asynchronous validation state <span
                className="hl">boolean</span> <UnlockIcon/></li>
            <li><CallProperty name="asyncValidationFailed" hl/> <span
                className="hl">boolean</span> <UnlockIcon/></li>
            <li><CallProperty name="validation" hl/> input
                validations <UnlockIcon/> Check <Link aria-label={"Check all validations properties"} to={ROOT + VALIDATIONS} className="link">VALIDATIONS PROPERTIES</Link> to know
                more of it.
            </li>
            <li><CallDefinition name="onChange" hl/> a method to change input value.
                Accept InputEvent or customValue <LockIcon/></li>
            <li><CallDefinition name="init" hl/> a method to load value to
                your inputs for an edit. Accept a customValue <LockIcon/></li>
        </ul>
        <Line/>
        <h2 className="subTitle">Files properties list</h2>
        <p className="description">Files is an array of object with following properties</p>
        <ul className="extra item-space-5">
            <li><CallProperty name="file"/> The original uploaded file <LockIcon/></li>
            <li><CallProperty name="key"/> a crypto based key <LockIcon/></li>
            <li><CallProperty name="url" hl/> a preview url for the file <LockIcon/></li>
            <li><CallProperty name="fileUpdate" hl/> contains all your changes like, crop, resizing etc... <UnlockIcon/>
            </li>
            <li><CallProperty name="gettingFile" hl/> tell you if we are retrieving some blob <span
                className="hl">boolean</span> <LockIcon/></li>
            <li><CallDefinition name="selfRemove" hl/> a method to remove an upload file <LockIcon/></li>
            <li><CallDefinition name="selfUpdate" hl/> a method to save any files changes <LockIcon/><br/>
                This method take one arguments save the changes on <CallProperty name="fileUpdate" hl/> property
            </li>
            <li><CallDefinition name="onLoad" hl/> a method to revoke the preview url. This works only if
                there is no <CallProperty name="persitID " hl/> <LockIcon/></li>
        </ul>
        <p className="description">
            Hit next to know more
            about all validations <Link aria-label={"To check all validations properties"} className="link"
                                        to={ROOT + VALIDATIONS}>PROPERTIES</Link>
        </p>
        <div className="foot">
            <PageButton onClick={() => navigate(TRACK.ROOT)} text="Prev"/>
            <PageButton onClick={() => navigate(ROOT + VALIDATIONS)}/>
        </div>
    </div>
}

export default InputsProperties