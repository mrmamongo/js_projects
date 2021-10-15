import React from 'react'
import classNames from "classnames";
import './Badge.scss'

const Badge = ({color, click, className}) => {
    return (
            <i className={classNames(`badge`,{[`badge--${color}`]: color}, {active: className})}
            onClick={click}/>
    );
}

export default Badge;