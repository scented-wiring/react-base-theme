// Import necessary field components and type aliases
import {
    ModuleFields,
    TextField,
    RichTextField,
    ColorField,
    FieldGroup,
    RepeatedFieldGroup
} from '@hubspot/cms-components/fields';

import TextFields from '../../fields/textFields.jsx';

/**
 * Module fields definition with a Style section organized into tabs
 */
export const fields = (
    <ModuleFields>
        <TextFields />
        
        <RepeatedFieldGroup
            name="text_group"
            label="Text group"
            occurrence={{
                min: 1,
                max: 500,
                default: 3,
            }}
            default={[
                {
                    text_item: 'This is a text'
                },
                {
                    text_item: 'This is a text 2'
                },
                {
                    text_item: 'This is a text 3'
                },
            ]}
            >   
            <TextField
                label="Text"
                name="text_item"
                default="This is a text"
                required 
            />
        </RepeatedFieldGroup>

        {/* Group for Style Tab with Nested Tabs */}
        <FieldGroup name="groupStyle" label="Styles" tab="STYLE">
            {/* Text Styling Tab */}
            <ColorField
                label="Background Color"
                name="background_color"
                default="#ffffff"
            />
            <ColorField
                label="Text Color"
                name="text_color"
                default="#000000"
            />
        </FieldGroup>
    </ModuleFields>
);
