// Import necessary field components and type aliases
import {
    FieldGroup,
    TextField,
    RichTextField,
    ImageField,
} from '@hubspot/cms-components/fields';


export default function TextFields () {
    return (
        <FieldGroup
            name="text_settings"
            label="Text group"
        >
            <TextField
                label="Label"
                name="label1"
                default="Label 22222"
            />
            <RichTextField
                label="Content"
                name="content"
                type="richtext"
                default="<h1>This is a title</h1><h3>Example content here2</h3>"
            />
            <TextField
                label="Label2"
                name="label2"
                default="Label 44444"
            />
            <ImageField
                label="Image"
                name="image"
                default={{
                    src: '../../../assets/images/test-image.jpg',
                    max_width: 450,
                    max_height: 450,
                    alt: "This is a test",
                    loading: "lazy"
                }}
                required
            />
        </FieldGroup>
    )
}