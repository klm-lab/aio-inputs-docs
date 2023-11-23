import Line from "../../components/line";
import Iframe from "../../components/iframe/Iframe";
import PageButton from "../../components/pageButton";

const CheckboxAndRadio = ({link, validLink, name, nextName, prevLink, nextLink}) => {

    return <div className="data">
        <h1 className="title">Input type {name} examples</h1>
        <p className="titleIntro">
            For {name} type, you have to specify type {name} and the label for user convenience when creating inputs.
            You
            can group them by name,
            and if so, for validation, add it to one of them and they will share it. But if you want, add it to all of
            them. It is up to you. Control them with the <span className="oKey hl">checked</span> properties
        </p>
        <Line/>
        <h2 className="subTitle up">
            {name} input with no validation
        </h2>
        <Iframe height={600} title="Checkbox input with no validation" src={link}/>
        <h2 className="subTitle up">
            {name} input with validation
        </h2>
        <Iframe height={600} title="Checkbox input with validation" src={validLink}/>
        <p className="description">
            Hit next for {nextName} examples with aio-inputs
        </p>
        <div className="foot">
            <PageButton to={prevLink} prev/>
            <PageButton to={nextLink}/>
        </div>
    </div>
}

export default CheckboxAndRadio