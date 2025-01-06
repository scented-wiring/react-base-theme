// Import necessary field components and type aliases
import {
    ChoiceField,
    FieldGroup,
} from '@hubspot/cms-components/fields';

export default function TitleStyleFields () {
    return (
        <>
            <FieldGroup name="title_style" label="Title styling">
                <ChoiceField
                    id='title_text_color_select'
                    name='title_text_color_select'
                    label='Title Text Color'
                    choices={[
                        ['primary', 'Primary'],
                        ['secondary', 'Secondary'],
                        ['custom', 'Custom']
                    ]}
                    default='primary'
                />
            </FieldGroup> 
        </>
    )
}
