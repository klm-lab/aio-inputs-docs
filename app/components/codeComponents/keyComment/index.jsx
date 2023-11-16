const KeyComment = ({comment, full}) => {
    return <div className="codeLine">
        <span className="comment">{`${full ? "" : "// "}${comment}`}</span>
    </div>
}

export default KeyComment