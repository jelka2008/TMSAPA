import React from "react";
import { typeObject } from "../../../testData/typeObject";
import { v4 as uuidv4 } from "uuid";

const HandActions = (props) => {
  const geoIconsFilter = typeObject.filter((icon) => icon.icon_name);
  const geoIcons = geoIconsFilter.map((icon) => {
    const selectMarkerStyle =
      props.iconUserMarker && icon.icon_name === props.iconUserMarker
        ? "select-geoIcon_current"
        : "";
    return (
      <div className={selectMarkerStyle} key={icon.icon_name}>
        <figure
          id={icon.icon_name}
          onClick={() => {
            props.handleSelectMark(icon.icon_name);
          }}
          key={uuidv4()}
        >
          <img src={`/img/iconGEO/${icon.icon_name}`} alt={icon.title} />
          <figcaption>{icon.shortTitle || icon.title}</figcaption>
        </figure>
      </div>
    );
  });
  const renderTypes = typeObject.map((icon) => {
    return (
      <div key={icon.type}>
        <input type="checkbox" id={icon.type} value={icon.type} />
        <label htmlFor={icon.type}>{icon.shortTitle || icon.title}</label>
      </div>
    );
  });
  const tagsTypeObject = typeObject.map((tag) => {
    return (
      <tag className="tagTypeObject" key={tag.type}>{`#${
        tag.shortTitle || tag.title
      } `}</tag>
    );
  });

  return (
    <div className="hand_actions">
      <div className="select-image-block">
        <p>
          <b>Выбери персонажа чтобы поставить на карту</b>
        </p>
        <div className="select-geoIcon">{geoIcons}</div>
      </div>
      {props.showDataSelectObject && (
        <div className="aboutSelectObject">
          <h6>Сведения</h6>
          <span
            className="close-button"
            onClick={props.onClickCloseButton}
          ></span>
          <b>id: </b>
          <span>{props.selectObject.id}</span>

          {props.activeEditData ? (
            <>
              <input
                placeholder="имя"
                type="text"
                className="form-control"
                id="name"
                value={props.selectObject.name}
                name="name"
                onChange={props.changeInputHandler}
              />
              <input
                placeholder="адрес"
                type="text"
                className="form-control"
                id="address"
                value={props.selectObject.address}
                name="address"
                onChange={props.changeInputHandler}
              />
              <textarea
                placeholder="заслуги"
                type="text"
                className="form-control"
                id="comments"
                value={props.selectObject.comments}
                name="comments"
                onChange={props.changeInputHandler}
              />
              <input
                placeholder="ссылка"
                type="text"
                className="form-control"
                id="linkSourse"
                value={props.selectObject.linkSourse}
                name="linkSourse"
                onChange={props.changeInputHandler}
              />
              {tagsTypeObject}
            </>
          ) : (
            <>
              <label>{props.selectObject.name}</label>
              <label>{props.selectObject.address.city}</label>
              <label>{props.selectObject.comments}</label>
              <label>{props.selectObject.linkSourse}</label>
            </>
          )}

          <div className="buttons_block">
            {props.activeEditData ? (
              <button onClick={props.onSaveData}>Сохранить</button>
            ) : (
              <button onClick={props.onActiveEditData}>Править</button>
            )}
            <button>More...</button>
          </div>
        </div>
      )}
      <div className="show-map-type-objects">
        <p>
          <b>Фильтр отображаемых объектов:</b>
        </p>
        <div>{renderTypes} </div>
      </div>
    </div>
  );
};

export default HandActions;
