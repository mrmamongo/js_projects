import React from "react";
import classNames from 'classnames'
import Badge from "../Badge";
import removeIcon from '../../assets/remove.svg'

import './List.scss';

const List = ({ items, isRemovable, click, onRemove}) => {

    const removeList = (obj) => {
        if (window.confirm('Are you sure?')){
            onRemove(obj);
        }
    }
    return (
        <ul className="list" onClick={click}>
            {items.map((obj) => (
                <li
                    onClick={obj.click}
                    key={obj.id}
                    className={classNames(obj.className, {active: obj.active})}>
                    <i>{obj.icon ? obj.icon :
                        (<Badge color={obj.color}/>)}
                    </i>
                    <span>{obj.name}</span>
                    {isRemovable && <img onClick={() => {removeList(obj)}} className='list__remove-button' src={removeIcon} alt='remove icon'/>}
                </li>
            ))}
        </ul>)
}

export default List;