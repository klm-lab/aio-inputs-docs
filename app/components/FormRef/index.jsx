import {Link} from "@remix-run/react";
import {routes} from "../../util/constants";

const {ROOT,RESET,GET_VALUES} = routes.FORM

const FormRef = () => {
    return <p className="description">
        You can <Link className="link" to={ROOT + RESET}>RESET</Link> or also get all <Link className="link" to={ROOT + GET_VALUES}>VALUES</Link> by
        using the form object shown <Link className="link" to={ROOT}>HERE</Link>.
    </p>
}

export default FormRef