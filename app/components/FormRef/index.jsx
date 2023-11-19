import {routes} from "../../util/constants";
import AppLink from "../appLink";

const {ROOT, RESET, GET_VALUES} = routes.FORM

const FormRef = () => {
    return <p className="description">
        You can <AppLink aria-label="To reset your inputs" className="link" to={ROOT + RESET}>RESET</AppLink> or also
        get all <AppLink aria-label="To get values from your inputs" className="link"
                         to={ROOT + GET_VALUES}>VALUES</AppLink> by
        using the <AppLink aria-label={"Link to form utilities"} className="link" to={ROOT + GET_VALUES}>FORM
        OBJECT</AppLink>.
    </p>
}

export default FormRef