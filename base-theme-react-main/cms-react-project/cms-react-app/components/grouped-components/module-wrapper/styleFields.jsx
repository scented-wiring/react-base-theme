// Import necessary field components and type aliases
import {
    FieldGroup,
    ChoiceField,
    SpacingField,
    AlignmentField,
} from '@hubspot/cms-components/fields';

export default function ModuleStyles ({ 
    idOverride, 
    hideContentWidth,
    hideModuleWidth,
}) {
    const id = idOverride;
    
    return (
        <>
            <AlignmentField
                label='Content alignment'
                id='content_alignment'
                name= 'content_alignment'
                required= {false}
                type= 'alignment'
                alignmentDirection= 'HORIZONTAL'
                default= {{
                    horizontal_align: 'CENTER'
                }}
            />
            <FieldGroup id={id} name="module_spacing" label="Module Spacing">
                <SpacingField
                    label='Spacing around content'
                    id='module_padding'
                    name= 'module_padding'
                    required= {false}
                    type= 'spacing'
                    visibility={{ hidden_subfields: { margin: 'true' } }}
                    default= {{
                        padding: {
                            top: { 
                                value: 57, 
                                units: 'px' 
                            },
                            bottom: { 
                                value: 57, 
                                units: 'px' 
                            },
                            left: { 
                                value: 57, 
                                units: 'px' 
                            },
                            right: { 
                                value: 57, 
                                units: 'px'
                            }
                        }
                    }}
                />
                <SpacingField
                    label='Spacing around content mobile'
                    id='module_padding_mobile'
                    name= 'module_padding_mobile'
                    required= {false}
                    type= 'spacing'
                    visibility={{ hidden_subfields: { margin: 'true' } }}
                    default= {{
                        padding: {
                            top: { 
                                value: 57, 
                                units: 'px' 
                            },
                            bottom: { 
                                value: 57, 
                                units: 'px' 
                            },
                            left: { 
                                value: 57, 
                                units: 'px' 
                            },
                            right: { 
                                value: 57, 
                                units: 'px'
                            }
                        }
                    }}
                />
            </FieldGroup>
            <FieldGroup id={id} name="module_widths" label="Module Widths">
                {!hideModuleWidth && (
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
                )}
                {!hideContentWidth && (
                    <ChoiceField
                        label="Content Width"
                        name="content_width"
                        id="content_width"
                        choices={[
                            ['1080', '1080px'],
                            ['1200', '1200px'],
                            ['1440', '1440px']
                        ]}
                        default="1440"
                    />
                )}
            </FieldGroup>
        </>
    )
}