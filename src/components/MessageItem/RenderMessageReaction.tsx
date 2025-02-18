import MessageReaction from "types/MessageReaction";
import IF from "../IF";

type RenderMessageReactionPropsType = {
    messageReactions?: MessageReaction[] | null;
};

function RenderMessageReaction({
    messageReactions,
}: RenderMessageReactionPropsType) {
    return (
        <IF condition={messageReactions && messageReactions.length >= 1}>
            <div className="message-item__reaction">
                {messageReactions?.map((messageReaction) => {
                    return (
                        <span className="ps-1 pe-1" key={messageReaction.icon}>
                            {messageReaction.icon}
                            <IF condition={messageReaction.quantity > 0}>
                                <span
                                    className={`ps-1 ${
                                        messageReaction.toOwn
                                            ? "message-reaction--has-owner"
                                            : ""
                                    }`}
                                >
                                    {messageReaction.quantity}
                                </span>
                            </IF>
                        </span>
                    );
                })}
            </div>
        </IF>
    );
}

export default RenderMessageReaction;
