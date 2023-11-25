import {commonPropMeta} from "./properties._index";
import {routes} from "../util/constants";
import Line from "../components/line";
import LockIcon from "../assets/icon/LockIcon";
import UnlockIcon from "../assets/icon/UnlockIcon";
import CallDefinition, {CallProperty} from "../components/codeComponents/callDefinition";
import AppLink from "../components/appLink";
import PageButton from "../components/pageButton";

const {
    PROPERTIES: {INPUTS, ROOT, INPUTS_FILES, INPUTS_PROPS}
} = routes;

export const meta = () => {

    return commonPropMeta(ROOT + INPUTS_PROPS)
};


export const Properties = () => {
    return <div className="data">
        <h1 className="title smt">Input props properties</h1>
        <p className="description">
            Props is a valid spreadable object for your convenience. You can access and use, but
            cannot modified
            properties that are locked <LockIcon/>. You can only modified unlocked ones <UnlockIcon/>
        </p>
        <ul className="extra item-space-5">
            <li><CallProperty name="id"/> input id <LockIcon/></li>
            <li><CallProperty name="name" hl/> input name <LockIcon/></li>
            <li><CallProperty name="type" hl/> html input type <LockIcon/></li>
            <li><CallProperty name="value" hl/> input value <LockIcon/></li>
            <li><CallProperty name="checked" hl/> input checked state <span
                className="hl">boolean</span> <LockIcon/></li>
            <li><CallProperty name="multiple" hl/> input property for multiple selection <span
                className="hl">boolean</span> <LockIcon/></li>
            <li><CallProperty name="placeholder" hl/> input placeholder <LockIcon/></li>
            <li><CallDefinition name="onChange" hl/> a method to change input value.
                Accept InputEvent or customValue <LockIcon/></li>
        </ul>
        <p className="description">
            Hit next to know more
            about input type 'file' value <AppLink aria-label={"To check all input type file value properties"}
                                                   className="link"
                                                   to={ROOT + INPUTS_FILES}>PROPERTIES</AppLink>
        </p>
        <div className="foot">
            <PageButton to={ROOT + INPUTS} prev/>
            <PageButton to={ROOT + INPUTS_FILES}/>
        </div>
    </div>
}

export default Properties
