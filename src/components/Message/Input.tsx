import TextField from "components/TextField";
import SendIcon from "@mui/icons-material/Send";

function Input(): JSX.Element {
    return (
        <TextField
            className="input--rounded-full"
            trailing={
                <SendIcon className="message-bottom__input-trailing-icon" />
            }
        />
    );
}

export default Input;
