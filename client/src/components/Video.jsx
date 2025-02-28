export default function Video({src, w, caption}) {
    return <div title={caption} style={{maxWidth: "100%"}}>
            <video style={{width: w, maxWidth: "100%"}} autoPlay loop muted playsInline>
                <source src={src} type="video/mp4" />
            </video>
            <p>
                {caption}
            </p>
        </div>;
}