import React, { useState } from "react";
import { connect } from "react-redux";

import { toggleEdit, setTitle } from "../../store/actions/titleActions";

// "connect" this component to the redux store

const Title = props => {
  // const [{ title, editing }, dispatch] = useReducer(reducer, initialState);
  const [name1, setName1] = useState("");
  const [url1, setUrl1] = useState("");

  const [name2, setName2] = useState("");
  const [url2, setUrl2] = useState("");

  // const [name3, setName3] = useState('');
  // const [url3, setUrl3] = useState('');

  const handleName1Changes = e => {
    setName1(e.target.value);
  };
  const handleUrl1Changes = e => {
    setUrl1(e.target.value);
  };

  const handleName2Changes = e => {
    setName2(e.target.value);
  };
  const handleUrl2Changes = e => {
    setUrl2(e.target.value);
  };

  return (
    <>
      {!props.editing ? (
        <>
          <button className="editIcon" onClick={props.toggleEdit}>EDIT</button>

          <a href={props.url1}> {props.name1} </a>
          <a href={props.url2}> {props.name2} </a>
        </>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            placeholder={props.name1}
            value={name1}
            onChange={handleName1Changes}
          />
          <input
            className="title-input"
            type="text"
            placeholder={props.url1}
            value={url1}
            onChange={handleUrl1Changes}
          />

          <input
            className="title-input"
            type="text"
            placeholder={props.name2}
            value={name2}
            onChange={handleName2Changes}
          />
          <input
            className="title-input"
            type="text"
            placeholder={props.url2}
            value={url2}
            onChange={handleUrl2Changes}
          />

          <button onClick={() => props.setTitle(name1, url1, name2, url2)}>
            Update Link
          </button>
        </div>
      )}
    </>
  );
};


const mapStateToProps = state => {
  console.log(state);
  // the keys of the returned obj will be props passed into the comp
  return {
    editing: state.linksR.editing,

    name1: state.linksR.name1,
    url1: state.linksR.url1,

    name2: state.linksR.name2,
    url2: state.linksR.url2
  };
};

export default connect(
  mapStateToProps,
  { toggleEdit, setTitle }
)(Title);
