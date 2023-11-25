import {commonPropMeta} from "./properties._index";
import {routes} from "../util/constants";
import LockIcon from "../assets/icon/LockIcon";
import UnlockIcon from "../assets/icon/UnlockIcon";
import CallDefinition, {CallProperty} from "../components/codeComponents/callDefinition";
import AppLink from "../components/appLink";
import PageButton from "../components/pageButton";

const {
    PROPERTIES: {ROOT, VALIDATIONS, INPUTS_PROPS, INPUTS_FILES}
} = routes;

export const meta = () => {

    return commonPropMeta(ROOT + INPUTS_FILES)
};

export const Properties = () => {
    return <div className="data">
        <h1 className="title">Files properties list</h1>
        <p className="description">
            Files is an array of object with following properties. You can access and use, but
            cannot modified
            properties that are locked <LockIcon/>. You can only modified unlocked ones <UnlockIcon/>
        </p>
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
            about all validations <AppLink aria-label={"To check all validations properties"} className="link"
                                           to={ROOT + VALIDATIONS}>PROPERTIES</AppLink>
        </p>
        <div className="foot">
            <PageButton to={ROOT + INPUTS_PROPS} prev/>
            <PageButton to={ROOT + VALIDATIONS}/>
        </div>
    </div>
}

export default Properties
