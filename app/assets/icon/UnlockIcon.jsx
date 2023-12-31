const UnlockIcon = ({size = 30, ...rest}) => {
    return <svg style={{
        transform: "translateY(6px)"
    }} fill="var(--package)" width={size + "px"} height={size + "px"} {...rest} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path
                d="M12,22a7,7,0,0,0,5-11.894V7A5,5,0,0,0,7.67,4.5a1,1,0,1,0,1.73,1A3,3,0,0,1,15,7V8.683A7,7,0,1,0,12,22Zm0-10a1.994,1.994,0,0,1,1,3.723V18a1,1,0,0,1-2,0V15.723A1.994,1.994,0,0,1,12,12Z"></path>
        </g>
    </svg>
}

export default UnlockIcon