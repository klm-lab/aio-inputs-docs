const Bracket = ({children}) => {
    return <>
        <div className="codeLine">
            <span>{"{"}</span>
        </div>
        <div className="codeLine">
            {children}
        </div>
        <div className="codeLine">
            <span>{"},"}</span>
        </div>
    </>
}

export default Bracket