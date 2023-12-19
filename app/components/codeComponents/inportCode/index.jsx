import {LIB_NAME} from "../../../util/constants";

const ImportCode = ({name}) => {
    return <>
        <div className="codeLine">
            <span className="keyword">import</span>
            <span>{"{"}</span>
            <span className="definition">{name}</span>
            <span>{"}"}</span>
            <span className="keyword">from</span>
            <span className="package">"{LIB_NAME}"</span>
        </div>
    </>
}

export default ImportCode