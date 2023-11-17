import {addClasses} from "../../../util";

const StringKey = ({sKey, comment, noIndent}) => {
    return <>
        <span className={addClasses("key",noIndent && "no-indent")}>{sKey}</span>
        {comment && <span className="comment"> {comment}</span>}
    </>
}
export default StringKey