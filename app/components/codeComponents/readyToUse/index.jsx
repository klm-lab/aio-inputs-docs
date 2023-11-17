import KeyValue from "../keyValue";

const ReadyToUse = ({keys}) => {
    return keys.map(k => {
        return <KeyValue key={k.key} objKey={k.key} value={k.value} valueClassName={k.className}/>
    })
}

export default ReadyToUse