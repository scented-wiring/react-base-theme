export default function Video({src, loading}) {
    return (
        <div className="video-wrapper">
            <video src={src} controls></video>
        </div>
    );
}