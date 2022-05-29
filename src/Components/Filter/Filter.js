import React from "react";
import { Label } from "./Filter.styled";
import { getFilter } from 'redux/contacts/contact-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contacts-actions';

export default function Filter() {

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();


  return (
    <Label>
      Find contacts by Name
      <input onChange={e => dispatch(filterContacts(e.currentTarget.value))} type="text" name="filter" value={filter}/>
    </Label>
  );
}




