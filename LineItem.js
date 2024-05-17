import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({item,handleCheck,handledelete}) => {
  return (
    <li className="item" key={item.id}>
            <input
             type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
          />
             <label style={(item.checked)?{textDecoration:'line-through'} :null}
             onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
             <FaTrashAlt
             roll ="button"
             onClick={()=>handledelete(item.id)}
            tabIndex="0"
            aria-label={`Delete ${item.id}`}

            />
        </li>
  )
}

export default LineItem