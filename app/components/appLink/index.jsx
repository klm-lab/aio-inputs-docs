import {Link} from "@remix-run/react";

const AppLink = ({to, onClick, className, children, ...rest}) => {
    return <Link prefetch="intent" to={to} onClick={onClick}
                 className={className} {...rest}>
        {children}
    </Link>
}

export default AppLink