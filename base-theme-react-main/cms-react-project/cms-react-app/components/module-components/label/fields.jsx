// Import necessary field components and type aliases
import {
    TextField,
} from '@hubspot/cms-components/fields';

export default function LabelFields({ idOverride }) {
    const id = idOverride;

    return (
        <>
            <TextField
                label="Label"
                id={id}
                name="label_text"
                default="This is a label" 
            />
        </>
    );
}
