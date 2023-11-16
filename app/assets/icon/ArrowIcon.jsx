const ArrowIcon = ({size = 25, ...rest}) => {
    return <svg className="arrow" fill="var(--icon-color)" width={size + "px"} height={size + "px"} {...rest}
                viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"></path>
        </g>
    </svg>
}

export default ArrowIcon