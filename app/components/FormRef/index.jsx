import {Link} from "@remix-run/react";
import {routes} from "../../util/constants";

const {ROOT,RESET,GET_VALUES} = routes.FORM

const FormRef = () => {
    return <p className="description">
        You can <Link aria-label="To reset your inputs" className="link" to={ROOT + RESET}>RESET</Link> or also get all <Link  aria-label="To get values from your inputs" className="link" to={ROOT + GET_VALUES}>VALUES</Link> by
        using the <Link aria-label={"Link to form utilities"} className="link" to={ROOT + GET_VALUES}>FORM OBJECT</Link>.
    </p>
}

export default FormRef