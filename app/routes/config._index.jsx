import {routes} from "../util/constants";
import ConfigEntry from "../views/config";
import useRedirect from "../hook/useRedirect";

export const meta = () => {

    return [
        {title: "Aio-Inputs Config"},
        {name: "description", content: "Use inputs config with react"}
    ];
};

const {ROOT, ASYNC_DELAY} = routes.CONFIG

export const Config = () => {
    useRedirect(ROOT, ASYNC_DELAY);
    return <ConfigEntry/>
}

export default Config
