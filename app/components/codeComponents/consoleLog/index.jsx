const ConsoleLog = ({name = "form", method, comment = false, space, noConsole, content, property}) => {
    return <>
        {comment && <div style={{
            marginTop: space ? "1rem" : 0
        }} className="codeLine">
            <span className="comment">{"// " + comment}</span>
        </div>}
        <div className="codeLine">
            {!noConsole && <>
                <span className="no-indent">console.</span>
                <span className="oKey no-indent">log(</span>
            </>}
            <span className="no-indent">{name}.</span>
            <span className="oKey no-indent">{method}</span>
            {!property && <>
                <span className="no-indent">(</span>
                {content && <span className="no-indent">{content}</span>}
                <span className="no-indent">)</span>
            </>}
            {!noConsole && <span>)</span>}
        </div>
    </>
}

export default ConsoleLog