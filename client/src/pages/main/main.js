import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getNames, createName } from "../../redux/reducers/reducer";
import { signOut } from "../../redux/reducers/users";
import Namecard from "../../components/namecard/namecard";

import './main.css'

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
        dispatch(getNames());
  }, []);

  const token = useSelector((store) => store.users.token);

  setTimeout(() => {
    if (token === '') {
      navigate("/")
    }
  }, 500)

  const handleCreateClick = (body) => {
    dispatch(createName(body))
  }

  const handleLeaveClick = () => {
    dispatch(signOut())
  }

  const names = useSelector((store) => store.reducer.names);




  return (
    <div className="worksheet">
      {names ? (
        <div className="namesContainer">
          <div className="namesContainer__namesfield">
            {names.map((name) => {
              return (
                <div className="namesContainer__name" key={name.id}>
                  <Namecard name={name} />
                </div>
              );
            })}
          </div>
          <button
            className="namesContainer__button"
            type="button"
            onClick={() => {
              handleCreateClick("New name");
            }}
          >
            + Add name
          </button>
          <button type="button" onClick={()=>{handleLeaveClick()}} className="namesContainer__button">X</button>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default Main;
