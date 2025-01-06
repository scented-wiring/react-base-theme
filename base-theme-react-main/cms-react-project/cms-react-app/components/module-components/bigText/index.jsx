export default function BigText({fieldValues}) {
    const text = fieldValues.module_big_text
    return (
        <p className="big-text big">
            {text}
        </p>
    );
}