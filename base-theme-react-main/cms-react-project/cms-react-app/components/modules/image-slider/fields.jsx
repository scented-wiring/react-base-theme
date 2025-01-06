// Import necessary field components and type aliases
import {
    ModuleFields,
    TextField,
    RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';

/**
 * Module fields definition with a Style section organized into tabs
 */
export const fields = (
    <ModuleFields>
        <TextField
            label="Title"
            name="module_title"
            default="Hello world!"
            inlineHelpText="This is a module field"
            helpText="This is a module field"
        />
        <RepeatedFieldGroup
            name="text_group"
            label="Text group"
            inlineHelpText="This is a module group"
            helpText="This is a module group"
            occurrence={{
                min: 1,
                max: 500,
                default: 3,
            }}
            default={[
                {
                    text_item: 'This is a text 1',
                    content_item: 'This is a content text, cant be how ever long you want 11'
                },
                {
                    text_item: 'This is a text 2',
                    content_item: 'This is a content text, cant be how ever long you want 22'
                },
                {
                    text_item: 'This is a text 3',
                    content_item: 'This is a content text, cant be how ever long you want 33'
                },
            ]}
        >   
            <TextField
                label="Text"
                id="text_item"
                name="text_item"
                default="This is a text"
                inlineHelpText="This is a module field"
                helpText="This is a module field"
                required
                locked="false"
                global="false"
            />
            <TextField
                label="Content"
                id="content_item"
                name="content_item"
                default="This is a content text, cant be how ever long you want"
                inlineHelpText="This is a module field"
                helpText="This is a module field"
                visibility={{
                    controlling_field: 'text_item',
                    controlling_value_regex: 'text_item',
                    operator: 'NOT_EMPTY',
                }}
            />
        </RepeatedFieldGroup>
    </ModuleFields>
);