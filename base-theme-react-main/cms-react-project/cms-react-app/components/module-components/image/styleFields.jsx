// Import necessary field components and type aliases
import {
    ChoiceField,
    FieldGroup,
} from '@hubspot/cms-components/fields';

export default function ImageStyleFields () {
    return (
        <>
            <FieldGroup name="image_style" label="Image styling">
                <ChoiceField
                    name='image_transform'
                    label='Image transform'
                    choices={[
                        ['uppercase', 'Uppercase'],
                        ['normal-case', 'Default']
                    ]}
                    default='uppercase'
                />
            </FieldGroup> 
        </>
    )
}
