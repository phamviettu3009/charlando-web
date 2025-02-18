import {
    Button as MUIButton,
    CircularProgress,
    ButtonProps,
} from "@mui/material";

type ButtonPropsType = ButtonProps & {
    isLoading?: boolean;
};

function Button({ isLoading, ...rest }: ButtonPropsType) {
    return (
        <MUIButton {...rest}>
            {isLoading ? (
                <CircularProgress size={25} color="inherit" />
            ) : (
                rest.children
            )}
        </MUIButton>
    );
}

export default Button;
