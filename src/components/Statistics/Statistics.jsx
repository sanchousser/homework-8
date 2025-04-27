export const Statistics = ({good, neutral, bad, total, positive}) => {
    return (
        <>
            <p><b>Good:</b> {good}</p>
            <p><b>Neutral:</b> {neutral}</p>
            <p><b>Bad:</b> {bad}</p>
            <p><b>Total:</b> {total}</p>
            <p><b>Positive Feedback:</b> {positive}%</p>

        </>
    )
}