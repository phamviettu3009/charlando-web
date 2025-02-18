import { Fragment } from "react/jsx-runtime";

type IFPropsTypes = React.HTMLProps<Element> & {
    condition: boolean | string | object | null | undefined;
};

function IF({ condition, children }: IFPropsTypes) {
    return <Fragment>{condition && children}</Fragment>;
}

export default IF;
