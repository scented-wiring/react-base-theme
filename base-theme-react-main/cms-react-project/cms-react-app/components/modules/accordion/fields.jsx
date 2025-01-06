// Import necessary field components and type aliases
import {
    ModuleFields,
    FieldGroup,
    RichTextField,
    ChoiceField,
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
        <ButtonFields idOverride="buttons" />
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
                default='1080'
            />
            <ChoiceField
                label='Content Position'
                name='content_position'
                id='content_position'
                choices={[
                    ['left', 'Left'],
                    ['center', 'Center'],
                    ['right', 'Right']
                ]}
                default='center'
            />
            <ChoiceField
                label='Content Alignment'
                name='content_alignment'
                id='content_alignment'
                choices={[
                    ['left', 'Left'],
                    ['center', 'Center'],
                    ['right', 'Right']
                ]}
                default='left'
            />
            <LabelStyleFields />
            <TitleStyleFields />
        </FieldGroup>
    </ModuleFields>
);