// Import necessary field components and type aliases
import {
    ImageField,
} from '@hubspot/cms-components/fields';

export default function ImageFields ({ idOverride }) {
    const id = idOverride;

    return (
        <>
            <ImageField
                name="image_src"
                id={id}
                label="Image"
                default={{ 
                    src: 'https://25847486.fs1.hubspotusercontent-eu1.net/hubfs/25847486/anthony-cantin-Y-_GJL9gxbQ-unsplash-1.jpg', 
                    height: 100, 
                    alt: 'image' }}
                resizable={true}
                loading='lazy'
            />
        </>
    )
}
