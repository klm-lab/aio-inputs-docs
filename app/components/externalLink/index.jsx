import {Link} from "@remix-run/react";

const ExternalLink = ({children, to, className = "link", ...rest}) => {
    return <Link to={to} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
        {children}
    </Link>
}
export default ExternalLink