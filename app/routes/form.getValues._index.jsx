import FormEntry from "../views/form";

export const meta = () => {

    return [
        {title: "Aio-Inputs Form"},
        {name: "description", content: "Use inputs and get values with react"}
    ];
};
export const FormGetValues = () => {
    return <FormEntry/>
}

export default FormGetValues
