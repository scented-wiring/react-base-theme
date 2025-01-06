// Import necessary field components and type aliases
import {
    ChoiceField,
    FieldGroup,
} from '@hubspot/cms-components/fields';

export default function VideoStyleFields () {
    return (
        <>
            <FieldGroup name="video_style" label="Video styling">
                <ChoiceField
                    name='video_transform'
                    label='Video transform'
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
