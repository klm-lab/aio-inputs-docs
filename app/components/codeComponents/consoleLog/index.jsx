import DotProperty from "../dotProperty";

const ConsoleLog = ({name = "form", method, comment = false, space, noConsole, content, property}) => {
    return <>
        {comment && <div style={{
            marginTop: space ? "1rem" : 0
        }} className="codeLine">
            <span className="comment">{"// " + comment}</span>
        </div>}
        <div className="codeLine">
            {!noConsole ?
                <DotProperty name="console" value="log"
                             params={
                                 <DotProperty name={name} method={!property} value={method} params={content}/>
                             }
                /> :
                <DotProperty name={name} method={!property} value={method} params={content}/>
            }
        </div>
    </>
}

export default ConsoleLog