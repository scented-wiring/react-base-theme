// Import necessary field components and type aliases
import {
    TextField
} from '@hubspot/cms-components/fields';

export default function BigTextFields ({idOverride}) {
    const id = idOverride;

    return (
        <TextField
            label="Big text"
            id={id}
            name="module_big_text"
            default="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quia aperiam corrupti omnis doloribus culpa esse tempora repellendus impedit, perferendis expedita porro iste ab facere quae ad officiis, quas beatae."
        />
    )
}
