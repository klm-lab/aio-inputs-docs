import {Link} from "@remix-run/react";

const ExternalLink = ({children, to, className = "link"}) => {
    return <Link to={to} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
    </Link>
}
export default ExternalLink