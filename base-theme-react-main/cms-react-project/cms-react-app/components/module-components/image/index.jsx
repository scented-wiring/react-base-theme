export default function Image({src, loading}) {
    return (
        <div className="image-wrapper">
            <img src={src} loading={loading} />
        </div>
    );
}