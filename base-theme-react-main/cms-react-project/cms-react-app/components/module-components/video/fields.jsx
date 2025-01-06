// Import necessary field components and type aliases
import {
    FileField,
} from '@hubspot/cms-components/fields';

export default function VideoFields ({idOverride}) {
    const id = idOverride;

    return (
        <>
            <FileField
                type="file"
                picker="video"
                id={id}
                name="video_src"
                label="Video"
                default="https://25847486.fs1.hubspotusercontent-eu1.net/hubfs/25847486/12254923_3840_2160_24fps.mp4"
            />
        </>
    )
}
