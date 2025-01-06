// Import necessary field components and type aliases
import {
    ModuleFields,
    TextField,
    ColorField,
    FieldGroup,
} from '@hubspot/cms-components/fields';

import TextFields from '../../fields/textFields.jsx';

/**
 * Module fields definition with a Style section organized into tabs
 */
export const fields = (
    <ModuleFields>
         <TextField
            label="Button text"
            id="button_text"
            name="button_text"
            default="Click me !"
            inlineHelpText="This is a module field"
            helpText="This is a module field"
        />

        {/* Group for Style Tab with Nested Tabs */}
        <FieldGroup name="group_style" label="Styles" tab="STYLE">
            <ColorField
                label="Background Color"
                name="background_color"
                default="#000000"
            />
        </FieldGroup>
    </ModuleFields>
);