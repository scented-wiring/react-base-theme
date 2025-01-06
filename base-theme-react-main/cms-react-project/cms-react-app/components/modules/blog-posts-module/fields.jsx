// Import necessary field components and type aliases
import {
    ModuleFields,
    BlogField,
    ChoiceField
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
        <ChoiceField
            label='Feed type'
            name='feed_type'
            id='feed_type'
            choices={[
                ['Latest', 'latest'],
                ['Most popular', 'popular']
            ]}
            default='latest'
        />
    </ModuleFields>
);