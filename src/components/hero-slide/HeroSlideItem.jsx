import {useNavigate} from "react-router-dom";
import apiConfig from "../../config/apiConfig";
import useTmdb from "../../config/useTmdb";
import {category} from "../../config/config";
import Button, {OutlineButton} from "../buttons/Button";
import * as PropTypes from "prop-types";

const HeroSlideItem = (props) => {
    const navigate = useNavigate()
    const item = props.item
    const background = apiConfig.originalImage(
        item.backdrop_path || item.poster_path
    )
    const {getVideos} = useTmdb()

    const getTrailer = async () => {
        const res = await getVideos(category.movie, item.id)
        const modal = document.querySelector(`#modal_${item.id}`)

        if (res.results.length > 0) {
            const videoSrc =
                'https://www.youtube.com/embed/' + res.results[0].key
            modal.querySelector('iframe').setAttribute('src', videoSrc)
        }
        modal.classList.toggle('active')
    }

    return (
        <div
            className={`hero-slide__item ${props.className}`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button onClick={() => navigate('/movie/' + item.id)}>
                            Watch Now
                        </Button>
                        <OutlineButton className={'btn'} onClick={getTrailer}>
                            Watch Trailer
                        </OutlineButton>
                    </div>
                </div>
                <div className="hero-slide__item__content__poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="Poster" />
                </div>
            </div>
        </div>
    )
}

HeroSlideItem.propTypes = {
    className: PropTypes.string,
    item: PropTypes.any
};
export default HeroSlideItem