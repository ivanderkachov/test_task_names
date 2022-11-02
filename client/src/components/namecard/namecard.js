import React, { useState } from "react";
import { useDispatch } from "react-redux";

import './namecard.css'

import { editName, deleteName, editRank} from "../../redux/reducers/reducer";

const Namecard = ({ name }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [edit, setEdit] = useState(name.name)
  const dispatch = useDispatch()

  const handleEditClick = (type) => {
    if (type==='save') {
      if (edit.trim()!=='') {
        dispatch(editName(name.id, edit));
        setEditToggle(!editToggle);
      } else {
        alert('Enter the name')
      }
    }
    if (type==='delete') {
      dispatch(deleteName(name.id))
    }
    setEditToggle(!editToggle)
  }

  const handleRankClick = (type) => {
    if (type==='UP') {
      const body = name.rank + 1
      dispatch(editRank(name.id, body))
    }else {
       const body = name.rank - 1;
       dispatch(editRank(name.id, body));
    }

  }

  const handleChange = (e) => {
    setEdit(e.target.value)
  }

  return (
    <>
      {!editToggle ? (
        <div className="nameContainer">
          <div className="nameContainer__rank">
            <span> RANK: </span>
            <span>{name.rank}</span>
          </div>
          <div className="nameContainer__name">
            <span>{name.name}</span>
          </div>

          <div className="nameContainer__buttons">
            <button type="button" onClick={() => {handleRankClick('UP')}}>Rank UP</button>
            <button type="button" onClick={() => {handleRankClick('DOWN')}}>Rank DOWN</button>
            <button type="button" onClick={() => {handleEditClick('edit')}}>Edit</button>
            <button type="button" onClick={() => {handleEditClick('delete')}}>Delete</button>
          </div>
        </div>
      ) : (
        <div className="nameContainer-edit">
          <input type="text" value={edit} onChange={handleChange} />
          <button onClick={() => {handleEditClick('save')}}>Save</button>
        </div>
      )}
    </>
  );
};

export default Namecard;
