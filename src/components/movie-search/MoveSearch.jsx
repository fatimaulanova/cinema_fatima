import {useState} from 'react';
import Button from "../buttons/Button";
import './movie-search.scss';
import {useNavigate} from "react-router-dom";
import {category} from "../../config/config";

const MovieSearch = props => {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState(props.keyword ? props.keyword : '');

    const onSearch = (e) => {
        e.preventDefault();
        if(searchInput.trim().length > 0) {
            navigate(`/${category[props.category]}/search/${searchInput}`)
        }
    }

    return (
        <div className='search-bar mb-4'>
            <form className="form"
                    onSubmit={onSearch}>
                <input type="text"
                       value={searchInput}
                       onChange={(e) => setSearchInput(e.target.value)}
                       placeholder='Enter keyword'/>
                <Button className={'small'}>
                    Search
                </Button>
            </form>
        </div>
    );
};

export default MovieSearch;
