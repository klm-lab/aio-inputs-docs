import Code from "../code";

const ImportStatement = () => {
    return <>
        <h2 className="subTitle">
            Import
        </h2>
        <p className="description">
            Import <span className="definition">useInputs</span> from <span
            className="package">aio-inputs</span> package
        </p>
        <Code>
            <div className="codeLine">
                <span className="keyword">import</span>
                <span>{"{"}</span>
                <span className="definition">useInputs</span>
                <span>{"}"}</span>
                <span className="keyword">from</span>
                <span className="package">"aio-inputs"</span>
            </div>
        </Code>
    </>
}

export default ImportStatement