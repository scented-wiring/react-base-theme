export default function Title({text, fieldValues}) {
    const HeadingTag = `${fieldValues.title_size}`;

    return (
        <div className={`title`}>
            <HeadingTag dangerouslySetInnerHTML={{ __html: text }}>
            </HeadingTag>
        </div>
    );
}