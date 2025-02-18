import IF from "../IF";

type DateTimeContentPropsType = {
    timeOfMessageSentDisplay: string;
    consecutiveMessages: boolean;
};

function DateTimeContent({
    timeOfMessageSentDisplay,
    consecutiveMessages,
}: DateTimeContentPropsType): JSX.Element {
    return (
        <IF condition={!consecutiveMessages}>
            <span className="message-item__sent-time">
                {timeOfMessageSentDisplay}
            </span>
        </IF>
    );
}

export default DateTimeContent;
