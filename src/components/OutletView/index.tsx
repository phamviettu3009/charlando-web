import "./outlet-view.scss";

type OutletViewPropsType = React.HTMLProps<HTMLDivElement>;

function OutletView({ ...rest }: OutletViewPropsType) {
    return (
        <div {...rest} className="outlet-view">
            {rest.children}
        </div>
    );
}

export default OutletView;
