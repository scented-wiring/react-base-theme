// Import necessary field components and type aliases
import {
    ModuleFields,
    TextField,
    RepeatedFieldGroup
} from '@hubspot/cms-components/fields';

/**
 * Module fields definition with a Style section organized into tabs
 */
export const fields = (
    <ModuleFields>
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
                    text_item: 'This is a text',
                    text_item_more: 'THIS IS A BODY TEXT'
                },
                {
                    text_item: 'This is a text 2',
                    text_item_more: 'THIS IS A BODY TEXT'
                },
                {
                    text_item: 'This is a text 3',
                    text_item_more: 'THIS IS A BODY TEXT'
                },
            ]}
            >   
            <TextField
                label="Text"
                name="text_item"
                default="This is a text"
                required 
            />
            <TextField
                label="Text"
                name="text_item_more"
                default="THIS IS A BODY TEXT"
                required 
            />
        </RepeatedFieldGroup>
        <TextField
                label="Text"
                name="text_item_more_two"
                default="THIS IS A BODY TEXT 2222"
                required 
            />
    </ModuleFields>
);
