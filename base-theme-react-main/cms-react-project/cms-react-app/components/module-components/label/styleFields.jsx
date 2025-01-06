// Import necessary field components and type aliases
import {
    ColorField,
    ChoiceField,
    FieldGroup
} from '@hubspot/cms-components/fields';

export default function LabelStyleFields ({ idOverride }) {
    const id = idOverride;
    
    return (
        <>
            <FieldGroup name="label_style" id="label_style" label="Label styling">
                <ChoiceField
                    id="text_transform"
                    name='text_transform'
                    label='Text transform'
                    choices={[
                        ['uppercase', 'Uppercase'],
                        ['normal-case', 'Default']
                    ]}
                    default='uppercase'
                />
                <ChoiceField
                    id='text_color_select'
                    name='text_color_select'
                    label='Text Color'
                    choices={[
                        ['primary', 'Primary'],
                        ['secondary', 'Secondary'],
                        ['custom', 'Custom']
                    ]}
                    default='primary'
                />
                <ColorField
                    label="Text Color"
                    id="text_color"
                    name="text_color"
                    default="#ffffff"
                    visibility={{
                        controlling_field: 'text_color_select',
                        controlling_value_regex: 'custom',
                        operator: 'EQUAL',
                    }} 
                /> 
            </FieldGroup> 
        </>
    )
}
