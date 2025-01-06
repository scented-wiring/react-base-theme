// Import necessary field components and type aliases
import {
    RichTextField,
    ChoiceField
} from '@hubspot/cms-components/fields';

export default function TitleFields ({idOverride}) {
    const id = idOverride;
    return (
        <>
            <ChoiceField
                name='title_size'
                id={id}
                label='Title size'
                choices={[
                    ['h1', 'H1'],
                    ['h2', 'H2'],
                    ['h3', 'H3'],
                    ['h4', 'H4'],
                    ['h5', 'H5'],
                    ['h6', 'H6'],
                ]}
                default='h2'
            />
            <RichTextField
                label="Title"
                id={`${id}module_title`}
                name="module_title"
                enabledFeatures={["bold", "text_color"]}
                default="<h1>This is a module title</h1>"
            />
        </>
    )
}
