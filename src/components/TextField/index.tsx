import React from "react";
import "./text-field.scss";

type TexFieldPropsType = React.HTMLProps<HTMLInputElement> & {
    leading?: JSX.Element | null;
    trailing?: JSX.Element | null;
};

function TextField(props: TexFieldPropsType): JSX.Element {
    const { leading, trailing, ...rest } = props;
    return (
        <div className="input-wrapper">
            {leading && <div className="input-wrapper__leading">{leading}</div>}
            {trailing && (
                <div className="input-wrapper__trailing">{trailing}</div>
            )}
            <input {...rest} className={`input ${rest.className ?? ""}`} />
        </div>
    );
}

export default TextField;
