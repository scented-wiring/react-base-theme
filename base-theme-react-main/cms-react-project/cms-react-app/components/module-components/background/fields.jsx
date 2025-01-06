// Import necessary field components and type aliases
import {
    ImageField,
    ChoiceField,
    FieldGroup,
    FileField,
    BooleanField,
    ColorField,
} from '@hubspot/cms-components/fields';

export default function BackgroundFields ({idOverride}) {
    const id = idOverride;

    return (
        <>
            <FieldGroup id={id} name="background_settings" label="Background settings" expanded="false">
                <ChoiceField
                    name='background_type'
                    id='background_type'
                    label='Background type'
                    choices={[
                        ['video', 'Video'],
                        ['image', 'Image'],
                        ['color', 'Color']
                    ]}
                    default='image'
                />
                <ImageField
                    name="background_image"
                    label="Image"
                    default={{ 
                        src: 'https://25847486.fs1.hubspotusercontent-eu1.net/hubfs/25847486/anthony-cantin-Y-_GJL9gxbQ-unsplash-1.jpg', 
                        alt: 'image' 
                    }}
                    resizable={false}
                    visibility={{
                        controlling_field: 'background_type',
                        controlling_value_regex: 'image',
                        operator: 'EQUAL',
                    }} 
                />
                <FileField
                    type="file"
                    picker="video"
                    name="background_video"
                    label="Video"
                    default="https://25847486.fs1.hubspotusercontent-eu1.net/hubfs/25847486/12254923_3840_2160_24fps.mp4"
                    visibility={{
                        controlling_field: 'background_type',
                        controlling_value_regex: 'video',
                        operator: 'EQUAL',
                    }} 
                />
                <BooleanField
                    name="enable_overlay"
                    id="enable_overlay"
                    label="Enable Overlay"
                    type="boolean"
                    display="toggle"
                    default={false}
                    visibility={{
                        controlling_field: 'background_type',
                        controlling_value_regex: 'color',
                        operator: 'NOT_EQUAL',
                    }} 
                />
                <ChoiceField
                    name='overlay_color'
                    id='overlay_color'
                    label='Overlay color'
                    choices={[
                        ['primary', 'Primary'],
                        ['secondary', 'Secondary'],
                        ['tertiary', 'Tertiary'],
                        ['dark', 'Dark'],
                        ['light', 'Light'],
                        ['grey', 'Grey'],
                        ['black', 'Black'],
                        ['white', 'White'],
                        ['custom', 'Custom']
                    ]}
                    default='primary'
                    visibilityRules='ADVANCED'
                    advancedVisibility={{
                        boolean_operator: 'AND',
                        criteria: [
                            {
                                controlling_field: 'background_type',
                                controlling_value_regex: 'color',
                                operator: 'NOT_EQUAL',
                            },
                            {
                                controlling_field: 'enable_overlay',
                                controlling_value_regex: 'true',
                                operator: 'EQUAL',
                            }
                        ]
                    }}
                />
                <ColorField
                    label="Custom Overlay Color"
                    id="custom_overlay_color"
                    name="custom_overlay_color"
                    default="#ffffff"
                    visibilityRules='ADVANCED'
                    advancedVisibility={{
                        boolean_operator: 'AND',
                        criteria: [
                            {
                                controlling_field: 'enable_overlay',
                                controlling_value_regex: 'true',
                                operator: 'EQUAL',
                            },
                            {
                                controlling_field: 'background_type',
                                controlling_value_regex: 'color',
                                operator: 'NOT_EQUAL',
                            },
                            {
                                controlling_field: 'overlay_color',
                                controlling_value_regex: 'custom',
                                operator: 'EQUAL',
                            }
                        ]
                    }}
                /> 
                <ChoiceField
                    name='background_color'
                    id='background_color'
                    label='Background color'
                    choices={[
                        ['bg-primary', 'Primary'],
                        ['bg-secondary', 'Secondary'],
                        ['bg-tertiary', 'Tertiary'],
                        ['bg-dark', 'Dark'],
                        ['bg-light', 'Light'],
                        ['bg-grey', 'Grey'],
                        ['bg-black', 'Black'],
                        ['bg-white', 'White'],
                        ['bg-custom', 'Custom']
                    ]}
                    default='bg-primary'
                    visibility={{
                        controlling_field: 'background_type',
                        controlling_value_regex: 'color',
                        operator: 'EQUAL',
                    }} 
                />
                <ColorField
                    label="Custom Background Color"
                    id="custom_bg_color"
                    name="custom_bg_color"
                    default="#ffffff"
                    visibilityRules='ADVANCED'
                    advancedVisibility={{
                        boolean_operator: 'AND',
                        criteria: [
                            {
                                controlling_field: 'background_type',
                                controlling_value_regex: 'color',
                                operator: 'EQUAL',
                            },
                            {
                                controlling_field: 'background_color',
                                controlling_value_regex: 'bg-custom',
                                operator: 'EQUAL',
                            }
                        ]
                    }}
                /> 
            </FieldGroup> 
        </>
    )
}