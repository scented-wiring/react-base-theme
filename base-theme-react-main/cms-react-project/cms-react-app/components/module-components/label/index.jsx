export default function Label({fieldValues, transform, color, text}) {
    // const label = fieldValues.label_text

    return (
        <div className={` ${color || ''} label font-bold text-xl ${transform || ''}`}>
            {/* {label} */}
            {text}
        </div>
    );
}