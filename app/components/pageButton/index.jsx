import AppLink from "../appLink";

const PageButton = ({to, prev, ...rest}) => {
    const text = prev ? "Prev" : "Next";
    return <AppLink aria-label={"Navigate to " + to} to={to} data-text={
        prev ? "← " + text : text + " →"
    } className="next" {...rest}>{text}</AppLink>
}

export default PageButton