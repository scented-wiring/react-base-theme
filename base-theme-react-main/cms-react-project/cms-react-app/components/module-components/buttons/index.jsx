export default function Buttons({fieldValues}) {
    const buttons = fieldValues.buttons;

    // If there are no buttons, render nothing
    if (buttons.length === 0) {
        return null;
    }

    return (
        <div className="btn-group flex flex-wrap gap-10 mt-8">
            {buttons.map((item, index) => (
                <a
                    key={index}
                    href={item.link?.url?.href || '#'}
                    className={`btn btn--${item.button_style || 'default'} transition-all duration-500 ease-in-out`}
                    target={item.link?.open_in_new_tab ? '_blank' : '_self'}
                    rel={item.link?.no_follow ? 'nofollow' : ''}
                >
                    {item.button_text || 'Button'}
                </a>
            ))}
        </div>
    );
}