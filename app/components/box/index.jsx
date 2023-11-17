import InfoIcon from "../../assets/icon/InfoIcon";

const Box = ({className, message}) => {
    return <div className={className}>
        <InfoIcon/>
        {message}
    </div>
}

export default Box