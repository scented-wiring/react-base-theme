export const Component = ({ fieldValues }) => {
    const testStylesTail = "https://25847486.fs1.hubspotusercontent-eu1.net/hub/25847486/hub_generated/template_assets/190675882192/1732667430597/react-test-theme-christoffer/assets/css/"
    const testStyles = "https://25847486.fs1.hubspotusercontent-eu1.net/hub/25847486/hub_generated/template_assets/190675535066/1732668918723/react-test-theme-christoffer/assets/css/"
    
    return (
        <section className="base-wrapper relative pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
            <link rel="stylesheet" href={`${testStylesTail}main.min.css`} />
            <link rel="stylesheet" href={`${testStyles}theme-overrides.css`} />
        </section>
    );
}

// Re-export the fields from fields.jsx
export { fields } from './fields.jsx';

// Export the metadata
export const meta = {
    label: `ThemeStyles`,
    is_available_for_new_content: false,
    host_template_types: ['PAGE','BLOG_LISTING'],
    categories: ['text'],
}
