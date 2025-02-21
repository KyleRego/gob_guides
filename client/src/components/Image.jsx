export default function Image({src, text, width}) {
    return <figure title={text} style={{width: width}}>
        <img style={{maxWidth: "100%"}} src={src} />

        <figcaption>
            {text}
        </figcaption>
    </figure>
}