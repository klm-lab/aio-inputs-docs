import InfoIcon from "../../assets/icon/InfoIcon";

const Box = ({className, message, children}) => {
    return <div className={className}>
        <InfoIcon/>
        {message ?? children}
    </div>
}

export default Box