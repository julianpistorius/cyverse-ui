import React from 'react';
import { SvgIcon } from 'material-ui';
import { marg } from '../styles';

const LaunchIcon = ({ size = 24, ...rest }) => {
    return (
        <SvgIcon { ...rest }
            style={{
                height: size,
                width: size,
                ...marg(rest),
                ...rest.style
            }}
        >
            <path className="cls-2" d="M2,22a.33.33,0,0,1-.37-.39c.42-2.25,1.29-3.86,3.73-4.43l-.11,1.21a.33.33,0,0,0,.32.35h1.2C6,21.18,4.23,21.67,2,22Z" transform="translate(-0.24 -0.49)"/><path className="cls-3" d="M21.89.61C16.47,2.07,11.8,4.69,8.35,9.28a.48.48,0,0,1-.41.19C5.1,9.31,3,10.86.79,12.37a.49.49,0,0,0,.31.89c1.51-.06,3-.58,4.51.18a.48.48,0,0,1,.22.56l-.27.91a.49.49,0,0,0,.1.46l2.55,2.86a.49.49,0,0,0,.5.14L9.94,18a.48.48,0,0,1,.55.2c.88,1.49.25,3.07.18,4.61a.49.49,0,0,0,.89.31C13,21,14.71,18.9,14.5,16a.48.48,0,0,1,.2-.42c4.76-3.39,7.08-8.33,8.62-13.77C23.65.44,22.92.33,21.89.61Zm-6.57,9.84a1.84,1.84,0,1,1,1.84-1.84A1.84,1.84,0,0,1,15.32,10.46Z" transform="translate(-0.24 -0.49)"/>
        </SvgIcon>
    )
};

export default LaunchIcon
