import { RichText } from '@hubspot/cms-components';

export default function TextSample({label1,label2, content, image}) {
    if(!label1 && !label2 && !content) return null;

    return (
        <div className="card__header">
            <span className="label">{label1}</span>
            <hr />
            <RichText fieldPath="text_settings.content" />
            <hr />
            <span className="label">{label2}</span>
            <img src={image.src} alt={image.alt} height={image.max_height} width={image.max_width} loading={image.loading} />
        </div>
    )
}