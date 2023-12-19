import {LIB_NAME} from "../../util/constants";

const NotFound = () => {

    return "not found"
}

export default NotFound;

export const meta = () => {

    return [
        {title: `404 ${LIB_NAME}`},
        {name: "description", content: "Page not found"},
    ];
};

