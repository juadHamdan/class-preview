import "./side-drawer.css";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

const SideDrawer = ({
    children,
    show,
    onClose,
    rtl = false,
    transition = "slide",
    transitionTime = 300
}) => {

    function handleOutsideClick(e) {
        if(e.target.className.includes("side-drawer-bg")){
            onClose()
        }
    }

    const sideDrawerStyle = {
        right: rtl ? '' : '0',
        left: rtl ? '0' :  ''
    };

    return (
        <CSSTransition
            in={show}
            timeout={transitionTime}
            classNames={`side-drawer-${transition}${rtl && transition === 'slide' ? '-left' : '-right'}`}
            unmountOnExit
        >
            <div className="side-drawer-bg" onClick={(e) => handleOutsideClick(e)}>
                <div style={sideDrawerStyle} className="side-drawer">
                    <div className="component">
                        {children}
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

SideDrawer.propTypes = {
    children: PropTypes.element,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    rtl: PropTypes.bool,
    transition: PropTypes.oneOf(["scale", "fade", "slide"]),
    transitionTime: PropTypes.number
};

export default SideDrawer;