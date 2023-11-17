import rootStyles from "./assets/styles/app.css"
import fontStyles from "./assets/styles/fonts.css"

import {Links, LiveReload, Meta, Scripts, ScrollRestoration,} from "@remix-run/react";
import Content from "./components/content";
import NotFound from "./views/notFound";

export const links = () => [
    {rel: "icon", type: "image/x-icon", href: "/favicon.svg"},
    {rel: "stylesheet", href: rootStyles},
    {rel: "stylesheet", href: fontStyles},
    {rel: "preconnect", href: "https://fonts.gstatic.com"},
];
export default function App() {

    return <html lang="en" className="notranslate" translate="no">
    <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <Meta/>
        <title>Aio-Inputs Docs</title>
        <Links/>
    </head>
    <body>
    <Content/>
    <ScrollRestoration/>
    <Scripts/>
    <LiveReload/>
    </body>
    </html>
}

export const ErrorBoundary = ({error}) => {
    return <NotFound error={error}/>
}