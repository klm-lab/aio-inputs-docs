import Home from "../views/getStarted";

export const meta = () => {

    return [
        {title: "Aio-Inputs Docs"},
        {name: "description", content: "Welcome!"}
    ];
};

export default function Root() {
    return <Home/>;
}
