import ExternalLink from "../externalLink";
import Netlify from "../../assets/icon/Netlify";
import {GITHUB_LINK} from "../../util/constants";

const Footer = () => {

    return <div className="flexCenterSpace footer">
        <div/>
        <div>
            <ExternalLink aria-label={"Link to github profile"} to={GITHUB_LINK}>
                @KLM-LAB
            </ExternalLink> <span className="text">Docs and examples licensed under</span> <ExternalLink
            to="https://choosealicense.com/licenses/mit/">
            MIT
        </ExternalLink>
        </div>
        <ExternalLink aria-label={"Link to netlify home page"} to="https://www.netlify.com">
            <Netlify/>
        </ExternalLink>
    </div>
}

export default Footer