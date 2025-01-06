// Import necessary field components and type aliases
import {
    ModuleFields,
    FieldGroup,
} from '@hubspot/cms-components/fields';

import GeneralModuleSettings from '../../grouped-components/module-wrapper/fields.jsx';
import ModuleStyles from '../../grouped-components/module-wrapper/styleFields.jsx';

export const fields = (
    <ModuleFields>
        <GeneralModuleSettings />
        <FieldGroup name="group_style" label="Styles" tab="STYLE">
            <ModuleStyles hideContentWidth={true} />
        </FieldGroup>
    </ModuleFields>
);