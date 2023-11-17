import CopyIcon from "../../assets/icon/CopyIcon";

const Code = ({children}) => {

    return <div className="flexCenterSpace codeWrapper">
        <div className="flexCenter code">
            {children}
        </div>
        <div className="copy">
            <CopyIcon/>
        </div>
    </div>
}

export default Code