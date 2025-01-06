// Import necessary field components and type aliases
import {
    TextField,
    LinkField,
    RepeatedFieldGroup,
    ChoiceField
} from '@hubspot/cms-components/fields';

export default function ButtonFields ({idOverride}) {
    const id = idOverride;

    return (
        <>
            <RepeatedFieldGroup
                label="Buttons"
                id={id}
                name="buttons"
                occurrence={{
                    min: null,
                    max: 500,
                    default: 1,
                }}
                default={[
                    {
                        button_style: '1',
                        button_text: 'Click me!',
                        link: {
                            no_follow: false,
                            open_in_new_tab: false,
                            url: {
                                content_id: null,
                                href: "",
                                type: "EXTERNAL"
                            }
                        }
                    }
                ]}
            >
                <ChoiceField
                    label='Button style'
                    name='button_style'
                    choices={[
                        ['1', '1'],
                        ['2', '2'],
                        ['3', '3'],
                        ['4', '4'],
                        ['5', '5'],
                        ['custom', 'Custom']
                    ]}
                    default='1'
                />
                <TextField
                    label="Button text"
                    name="button_text"
                    default="Click me!"
                    required
                />
                <LinkField
                    label="Button link"
                    name="link"
                    type="link"
                    supportedTypes={[
                        "EXTERNAL",
                        "CONTENT",
                        "FILE",
                        "EMAIL_ADDRESS",
                        "BLOG",
                        "CALL_TO_ACTION",
                        "PHONE_NUMBER"
                    ]}
                    default={{
                        no_follow: false,
                        open_in_new_tab: false,
                        url: {
                            content_id: null,
                            href: "",
                            type: "EXTERNAL"
                        }
                    }}
                />
            </RepeatedFieldGroup>
        </>
    )
}