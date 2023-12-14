import {addClasses} from "../../../util";

const Create = ({value = '"phoneNumber"',close, form, multiple = true, array, children,oneConst, imported = "useInputs"}) => {
    return <div className="codeLine">
        <span className="keyword">const</span>
        {oneConst ?
            <span>{oneConst}</span>
            :
            <>
                <span>[</span>
                <span>myInput{multiple ? "s" : ""}{form && ", form"}</span>
                <span>]</span>
            </>
        }
        <span>=</span>
        <span className="definition no-indent">{imported}</span>
        <span className="no-indent">({array && "["}</span>
        {children ?? <span className="key no-indent">{value}</span>}
        {close && <span>{array && "]"})</span>}
    </div>
}

export const ArrayParams = ({params}) => {
    return params.map((p, index) => {
        const notLast = (index < params.length - 1)
        return <span key={p + index} className={notLast ? "" : "no-indent"}>
            <span className={addClasses("key", notLast ? "" : "no-indent")}>{`"${p}"`}</span>
            {notLast && <span>,</span>}
        </span>
    })
}

export const TopComment = ({comment, space}) => {
    return <div className={addClasses("codeLine", space ? "mt-1" : "")}>
        <span className="comment">{`// ${comment}`}</span>
    </div>
}

export default Create