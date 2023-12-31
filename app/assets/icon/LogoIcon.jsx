const LogoIcon = ({size = 25, ...rest}) => {
    return <svg width={size + "px"} height={size + "px"} {...rest} viewBox="0 0 48 48" version="1"
                xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 48 48">
        <path id="base" fill="var(--primary-color)" d="M40,35v5H8v-5H4v5c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4v-5H40z"/>
        <g fill="var(--primary-color)">
           <g id="top">
               <polygon points="24,23.4 17,15 31,15"/>
               <rect x="22" y="4" width="4" height="14"/>
           </g>
            <g id="top2">
                <polygon points="24,23.4 17,15 31,15"/>
                <rect x="22" y="4" width="4" height="14"/>
            </g>
            <g id="top3">
                <polygon points="24,23.4 17,15 31,15"/>
                <rect x="22" y="4" width="4" height="14"/>
            </g>
            <g id="top4">
                <polygon points="24,23.4 17,15 31,15"/>
                <rect x="22" y="4" width="4" height="14"/>
            </g>
            <g id="right">
                <path
                    d="M31.5,26.9L30.8,28l3.5,1.9l0.6-1.2c1.6-3,2.6-4.7,3.5-5.2C39.3,23,41,23,44,23v-4 C36.3,19,35.6,19.4,31.5,26.9z"/>
                <polygon points="38.4,31 29.4,35 28,25"/>
            </g>
            <g id="left">
                <path
                    d="M16.5,26.9l0.6,1.2L13.6,30L13,28.8c-1.6-3-2.6-4.7-3.5-5.2C8.7,23,7,23,4,23v-4 C11.7,19,12.4,19.4,16.5,26.9z"/>
                <polygon points="20,25 18.6,35 9.6,31"/>
            </g>
        </g>
    </svg>
}

export default LogoIcon