import Media from "components/Media";
import Emoji from "./Emoji";
import Input from "./Input";

function Bottom(): JSX.Element {
    return (
        <div className="message-bottom">
            <Media />
            <Input />
            <Emoji />
        </div>
    );
}

export default Bottom;
