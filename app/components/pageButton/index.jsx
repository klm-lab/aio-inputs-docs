import "./pageButton.css"

const PageButton = ({onClick, text="Next"}) => {
    return <button data-text={
        text === "Next" ? text + " →" : "← " + text
    } onClick={onClick} className="next">{text}</button>
}

export default PageButton