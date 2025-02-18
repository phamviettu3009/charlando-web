import "./line.scss";

type LineProps = React.HTMLProps<HTMLDivElement> & {
    width?: number | string;
    color?: string;
};

function Line(props: LineProps): JSX.Element {
    const { width = "100%", color = "#fff", ...rest } = props;
    return (
        <div
            {...rest}
            className={`line ${rest.className}`}
            style={{ width: width, backgroundColor: color }}
        />
    );
}

export default Line;
