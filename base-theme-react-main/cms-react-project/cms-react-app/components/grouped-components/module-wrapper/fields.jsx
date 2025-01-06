// Import necessary field components and type aliases
import {

} from '@hubspot/cms-components/fields';

import ModuleSettings from '../../module-components/module-settings/fields.jsx';

export default function GeneralModuleSettings ({ idOverride }) {
    const id = idOverride;
    
    return (
        <>
            <ModuleSettings />
        </>
    )
}