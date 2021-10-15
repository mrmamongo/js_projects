import React, {useState} from "react";
import List from "../List";
import Badge from "../Badge";

import closeIcon from "../../assets/close.svg"


import "./AddList.scss";
import DB from "../../assets/db.json";

const AddList = ({ colors, onAdd}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, setSelectedColor] = useState(colors[0].id);
    const [inputValue, setValue] = useState("")

    const onClose = () => {
        setVisiblePopup(false);
        setValue('');
        setSelectedColor(colors[0].id);
    }

    const addList = () => {
        if (!inputValue) {
            alert('Enter list name');
            return;
        }
        const color = DB.colors[selectedColor - 1].name;
        onAdd({id: Math.random(), name: inputValue, color});
        onClose();
    }
    return (
        <div className="add-list">
            <List click = {() => {setVisiblePopup(!visiblePopup)}}
                items={[{
                icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>,
                name: 'Add List',
                className: 'list__add_button'
            }]}
            />
            {visiblePopup && <div className="add-list__popup">
                <img
                    onClick={onClose}
                    src={closeIcon} alt='close popup' className="add-list__popup-close-btn"/>
                <input value={inputValue} onChange={event => {setValue(event.target.value)}} className="field" type="text" placeholder="List name"/>
                    <ul className="add-list__popup-colors">
                        {
                            colors.map((color) => {
                                return <li><Badge
                                    click={()=>{setSelectedColor(color.id)}}
                                    key={color.id} color={color.name}
                                    className={selectedColor === color.id && 'active'}
                                /></li>
                            })
                        }
                    </ul>
                <button className="button" onClick={() => {addList()}} >Add</button>
            </div>}
        </div>
    )
}

export default AddList;