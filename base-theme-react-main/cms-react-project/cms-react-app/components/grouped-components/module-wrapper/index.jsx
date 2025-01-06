import Background from '../../../components/module-components/background/index.jsx';

export default function Wrapper ({ modulePath, children, customClasses, customContentClasses, hideContentWidth, hideModuleWidth }) {
    const moduleId = modulePath.module_settings.module_anchor;
    const moduleHide = modulePath.module_settings.hide_module;
    const bgColor = modulePath.module_settings.background_settings.background_color;
    const customBgColor = modulePath.module_settings.background_settings.custom_bg_color;
    const contentWidth = hideContentWidth ? null : modulePath.group_style.module_widths.content_width;
    const moduleWidth = hideModuleWidth ? null : modulePath.group_style.module_widths.module_width;
    const spacing = modulePath.group_style.module_spacing.module_padding;
    const align = modulePath.group_style.content_alignment.horizontal_align;
    const alignClass = `align-${align}`;
    
    const padding = {
        padding: `${spacing.padding.top.value}${spacing.padding.top.units} ${spacing.padding.right.value}${spacing.padding.right.units} ${spacing.padding.bottom.value}${spacing.padding.bottom.units} ${spacing.padding.left.value}${spacing.padding.left.units}`,
    };

    const dynamicStyles = {
        ...padding,
        ...(bgColor === 'bg-custom' && { backgroundColor: customBgColor }),
    };

    if (moduleHide) {
        return null;
    }

    return (
        <section id={moduleId} className={` ${alignClass} wrapper base-wrapper relative ${spacing} ${customClasses} ${bgColor} ${ moduleWidth === 'contained' ? 'mx-auto max-w-[1440px]' : 'max-w-full'}`} style={dynamicStyles}>
            <Background fieldPathing={modulePath.module_settings} />
            <div className={`mx-auto z-10 relative ${customContentClasses} ${contentWidth ? `max-w-[${contentWidth}px]` : ''} text-dark bg-white`}>
                {children}
            </div>
        </section>
    );
};