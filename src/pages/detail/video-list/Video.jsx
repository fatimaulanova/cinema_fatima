import {useRef} from "react";

const Video = props => {
    const item = props.item;

    const iframeRef = useRef(null)
    return (
        <div className="videos__item">
            <h2 className="video__title mb-3">{item.name}</h2>
            <iframe ref={iframeRef}
                    src={`https://www.youtube.com/embed/${item.key}`}
                    frameBorder="0"
                    width='100%'
                    height={300}
                    allowFullScreen/>
        </div>
    )
}

export default Video