export default function Background({fieldPathing}) {
    const backgroundSettings = fieldPathing.background_settings;
    const backgroundType = fieldPathing.background_settings.background_type;
    const overlayEnabled = fieldPathing.background_settings.enable_overlay;
    const overlayColor = fieldPathing.background_settings.overlay_color;
    const customOverlayColor = fieldPathing.background_settings.custom_overlay_color;

    let backgroundContent;
    let overlay;

    if (backgroundType === 'image') {
        backgroundContent = <img className="object-cover w-full h-full" src={backgroundSettings.background_image.src} alt={backgroundSettings.background_image.alt} />;
    } else if (backgroundType === 'video') {
        backgroundContent = <video className="object-cover w-full h-full" src={backgroundSettings.background_video} autoPlay loop muted />;
    } else if (backgroundType === 'color') {
        return null
    }

    if (overlayEnabled) {
       overlay = <div className={`overlay absolute z-2 top-0 left-0 w-full h-full opacity-30 ${overlayColor ? `bg-${overlayColor}` : ''}`} style={overlayColor === 'custom' ? { backgroundColor: customOverlayColor } : {}}></div>
    }

    return (
        <>
            {overlay}
            <div className="image-wrapper absolute z-1 top-0 left-0 w-full h-full">
                {backgroundContent}
            </div>
        </>
    );
}