// Import necessary field components and type aliases
import {
    FieldGroup,
    BooleanField,
    TextField
} from '@hubspot/cms-components/fields';

import BackgroundFields from '../../module-components/background/fields.jsx';

export default function ModuleSettings ({idOverride}) {
    const id = idOverride;

    return (
        <>
            <FieldGroup id={id} name="module_settings" label="Module settings" expanded="false">
                <BooleanField
                    name="hide_module"
                    id="hide_module"
                    label="Hide Module"
                    inlineHelpText="When toggling this on, you hide the module on the page, use if you want to keep module on the page but it is not ready for publishing with the rest of the page"
                    helpText=""
                    type="boolean"
                    display="toggle"
                    default={false}
                />
                <TextField
                    name="module_anchor"
                    id="module_anchor"
                    label="Module Anchor"
                    inlineHelpText="This gives your section an ID you can use for anchoring to it, example name it moduleAnchor and then in the link #moduleAnchor, when link is clicked it wil now go to this section"
                    default="moduleAnchor" 
                />
                <BackgroundFields />
            </FieldGroup>
        </>
    )
}