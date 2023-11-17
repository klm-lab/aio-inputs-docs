import {routes} from "../util/constants";
import useRedirect from "../hook/useRedirect";
import TrackEntry from "../views/track";

export const meta = () => {

    return [
        {title: "Aio-Inputs Form"},
        {name: "description", content: "Use inputs track with react"}
    ];
};

const {ROOT, TRACKING_TOOL} = routes.TRACK

export const Track = () => {
    useRedirect(ROOT, TRACKING_TOOL);
    return <TrackEntry/>
}

export default Track
