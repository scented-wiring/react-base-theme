export const Component = ({ fieldValues, hublParameters = {} }) => {
    const { 
        button_text: text,
    } = fieldValues;

    // Access the background_color field directly
    const buttonColor = fieldValues.group_style?.background_color || '#000000'; // Default color fallback

    return (
        <>
            {/* Render the style block only if the color is not the default (#000) */}
            {buttonColor !== '#000000' && (
                <style>
                    {`
                        .dynamic-button.btn-primary {
                            background-color: ${buttonColor};
                        }
                    `}
                </style>
            )}

            <a href="#" className="dynamic-button btn-primary bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-16 block w-auto ease-in-out duration-500">
                {text}
            </a>
        </>
    );
}

// Re-export the fields from fields.jsx
export { fields } from './fields.jsx';

// Export the metadata
export const meta = {
    label: 'Button',
    global: 'false',
    inline_help_text: 'This is a Button',
    host_template_types: ['PAGE'],
    icon: '',
    categories: ['DESIGN'],
}