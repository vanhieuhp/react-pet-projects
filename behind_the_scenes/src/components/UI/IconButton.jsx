import {log} from '../../log.js';
import {memo} from "react";

export default memo(function IconButton({children, icon, ...props}) {
        log('<IconButton /> rendered', 2);

        const Icon = icon;
        return (
            <button {...props} className="button">
                <Icon className="button-icon"/>
                <span className="button-text">{children}</span>
            </button>
        );
    }
)