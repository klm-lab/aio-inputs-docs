import {commonPropMeta} from "./properties._index";
import {RESERVED, routes} from "../util/constants";
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
        <h1 className="title">Input props properties</h1>
        <p className="description">
            Props is a valid input spreadable object for your convenience. It inherit properties from your input.<br/>
            For example. if you add a min and max value for input type range, you will find that in props. So add only
            valid input props.<br/>
            If you want extra data use the data property when creating your inputs. You can access and use, but cannot modified
            properties that are locked <LockIcon/>. You can only modified unlocked ones <UnlockIcon/>.
        </p>
        <ul className="extra item-space-5">
            <li><CallProperty name="id"/> input id <LockIcon/></li>
            <li><CallProperty name="accept" hl/> input type file accept property <LockIcon/></li>
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
            <li>And any other property you add to your inputs except the reserved ones and they
                are <br/>
                <span className="hl">{RESERVED.join(", ")}</span>
            </li>
        </ul>
        <p className="description">
            Hit next to know more
            about input type 'file'
            value <AppLink aria-label={"To check all input type file value properties"}
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
