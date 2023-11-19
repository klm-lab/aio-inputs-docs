// import {useLocation} from "@remix-run/react";
// import {useCallback, useEffect} from "react";
// import {routes} from "../../util/constants";
//
// const {FORM: {GET_VALUES}} = routes;
// let v = 0;
// const useHashLocation = (props) => {
//     const {hash} = useLocation();
//
//     const onScroll = useCallback(() => {
//         const {getValuesRef, resetRef} = props;
//         const SCROLL = window.scrollY;
//         const BODY = document.body.scrollHeight;
//         //console.log(document.body.scrollTop, window.visualViewport.height)
//         console.log(SCROLL)
//
//         if (SCROLL > BODY * .4) {
//             v = 40
//         }
//         if (SCROLL > BODY * .6) {
//             v = 60
//         }
//         if (SCROLL > BODY * .9) {
//             v = 90
//         }
//
//         //  console.log(v)
//
//         switch (hash) {
//             case GET_VALUES: {
//                 if (getValuesRef) {
//                     // console.log(getValuesRef.current)
//                     // if (getValueRef.current.scrollY > window.scrollY) {
//                     //     console.log("navigate")
//                     // }
//                 }
//             }
//             default: {
//                 return;
//             }
//         }
//     }, [hash, props])
//
//     useEffect(() => {
//         window.addEventListener("scroll", onScroll);
//         return () => {
//             window.removeEventListener("scroll", onScroll)
//         }
//     }, [onScroll]);
// }