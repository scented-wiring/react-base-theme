// Import necessary field components and type aliases
import {
    ModuleFields,
    FieldGroup,
    RichTextField,
    ChoiceField,
    RepeatedFieldGroup
} from '@hubspot/cms-components/fields';

import ModuleSettings from '../../module-components/module-settings/fields.jsx';
import LabelFields from '../../module-components/label/fields.jsx';
import LabelStyleFields from '../../module-components/label/styleFields.jsx';
import TitleFields from '../../module-components/title/fields.jsx';
import TitleStyleFields from '../../module-components/title/styleFields.jsx';
import BigTextFields from '../../module-components/bigText/fields.jsx';
import ButtonFields from '../../module-components/buttons/fields.jsx';

export const fields = (
    <ModuleFields>
        <ModuleSettings />
        <LabelFields />
        <TitleFields />
        <BigTextFields />
        <RichTextField
            label="Rich Text Field"
            id="module_content"
            name="module_content"
            default="<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quia aperiam corrupti omnis doloribus culpa esse tempora repellendus impedit, perferendis expedita porro iste ab facere quae ad officiis, quas beatae.</p>"
        />
        <ButtonFields idOverride="buttons"/>
        <ChoiceField
            label='Text columns layout'
            name='text_col_layout'
            id='text_col_layout'
            choices={[
                ['2', '2 pr row'],
                ['3', '3 pr row'],
                ['4', '4 pr row']
            ]}
            default='3'
        />
        <RepeatedFieldGroup
            label="Text columns"
            id="text_columns"
            name="text_columns"
            occurrence={{
                min: 2,
                max: 500,
                default: 3,
            }}
            default={[
                {}
            ]}
        >
            <LabelFields idOverride="column_labels" />
            <RichTextField
                label="Rich Text Field"
                id="column_content"
                name="column_content"
                default="<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quia aperiam corrupti omnis doloribus culpa esse tempora repellendus impedit, perferendis expedita porro iste ab facere quae ad officiis, quas beatae.</p>"
            />
            <ButtonFields idOverride="column_buttons" />
        </RepeatedFieldGroup>
        <FieldGroup name="group_style" label="Styles" tab="STYLE">
            <ChoiceField
                label='Module Width'
                name='module_width'
                id='module_width'
                choices={[
                    ['full', 'Full screen'],
                    ['contained', 'Contained in grid']
                ]}
                default='full'
            />
            <ChoiceField
                label='Content Width'
                name='content_width'
                id='content_width'
                choices={[
                    ['1080', '1080px'],
                    ['1200', '1200px'],
                    ['1440', '1440px']
                ]}
                default='1440'
            />
            <LabelStyleFields />
            <TitleStyleFields />
        </FieldGroup>
    </ModuleFields>
);