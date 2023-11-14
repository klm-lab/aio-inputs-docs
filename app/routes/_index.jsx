import Home from "../src/views/home/Home";

export const meta = () => {

    return [
        {title: "KLM Portfolio"},
        {name: "description", content: "Bienvenue sur le portfolio de KLM!"},
    ];
};

export default function Index() {
    return <Home/>;
}
