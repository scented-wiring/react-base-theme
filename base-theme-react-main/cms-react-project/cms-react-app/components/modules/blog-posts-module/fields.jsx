// Import necessary field components and type aliases
import {
    ModuleFields,
    BlogField
} from '@hubspot/cms-components/fields';

export const fields = (
    <ModuleFields>
        <BlogField
            name="blog_field"
            id="blog_field"
            label="Blog posts"
            type="blog"
            default={190509636815}
        />
    </ModuleFields>
);