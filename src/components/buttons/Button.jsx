import PropTypes from 'prop-types';
import './button.scss';

const Button = ({className, onClick, children, ...props}) => {
    return (
        <button className={`btn ${className}`} type={props.type}
                onClick={onClick ? () => onClick() : null}>
            {children}
        </button>
    );
};

export const OutlineButton = props => {
    return (
        <button className={`btn-outline btn ${props.className}`}
                onClick={props.onClick ? () => props.onClick() : null}>
            {props.children}
        </button>
    )
};

Button.propTypes = {
    onClick: PropTypes.func
}
export default Button;
