import {cssBundleHref} from "@remix-run/css-bundle";
import rootStyles from "./assets/styles/rootStyle.css"

import {Links, LiveReload, Meta, Scripts, ScrollRestoration,} from "@remix-run/react";
import Content from "./components/content";
import NotFound from "./views/notFound";

const mainStyles = [
    {rel: "icon", type: "image/x-icon", href: "/favicon.svg"},
    {rel: "stylesheet", href: rootStyles},
    {rel: "preconnect", href: "https://fonts.googleapis.com"},
    {rel: "preconnect", href: "https://fonts.gstatic.com"},
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
    },
];

export const links = () => [
    ...(cssBundleHref ? [
        ...mainStyles,
        {rel: "stylesheet", href: cssBundleHref}
    ] : [
        ...mainStyles
    ]),
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
