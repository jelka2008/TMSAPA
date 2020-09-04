import React from "react";
import { typeObject } from "../../../testData/typeObject";
// import { v4 as uuidv4 } from "uuid";

interface HandActionsProps {
  handleSelectMark(iconUserMarker: string): void;
  iconUserMarker: string;
  dataSelectObject: {
    id: number;
    name: string;
    address: string;
    comments: string;
    linkSource: string;
  };
  showDataSelectObject: boolean;
  changeInputHandler(event: React.ChangeEvent): void;
  onSaveData(): void;
  onClickCloseButton(): void;
  onActiveEditData(): void;
  activeEditData: boolean;
}

const HandActions: React.FC<HandActionsProps> = (props) => {
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
          key={icon.icon_name}
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
      <span className="tag_type_object" key={tag.type}>{`#${
        tag.shortTitle || tag.title
      } `}</span>
    );
  });

  return (
    <div className="hand_actions">
      <div className="select-image-block item_hand_actions">
        <h6>Выбери персонажа чтобы поставить на карту</h6>
        <div className="select-geoIcon">{geoIcons}</div>
      </div>
      {props.showDataSelectObject && (
        <div className="about_select_object item_hand_actions">
          <h6>Сведения</h6>
          <span
            className="close-button"
            onClick={props.onClickCloseButton}
          ></span>
          <b>id: </b>
          <span>{props.dataSelectObject.id}</span>

          {props.activeEditData ? (
            <>
              <input
                placeholder="имя"
                type="text"
                className="form-control"
                id="name"
                value={props.dataSelectObject.name}
                name="name"
                onChange={props.changeInputHandler}
              />
              <input
                placeholder="адрес"
                type="text"
                className="form-control"
                id="address"
                value={props.dataSelectObject.address}
                name="address"
                onChange={props.changeInputHandler}
              />
              <textarea
                placeholder="заслуги"
                className="form-control"
                id="comments"
                value={props.dataSelectObject.comments}
                name="comments"
                onChange={props.changeInputHandler}
              />
              <input
                placeholder="ссылка"
                type="text"
                className="form-control"
                id="linkSource"
                value={props.dataSelectObject.linkSource}
                name="linkSource"
                onChange={props.changeInputHandler}
              />
              {tagsTypeObject}
            </>
          ) : (
            <>
              <div>{props.dataSelectObject.name}</div>
              <div>{props.dataSelectObject.address}</div>
              <div>{props.dataSelectObject.comments}</div>
              <div>{props.dataSelectObject.linkSource}</div>
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
      <div className="show_map_type_objects item_hand_actions">
        <h6>Фильтр отображаемых объектов:</h6>
        <div>
          <div className="show_map_type_objects-list">{renderTypes} </div>
        </div>
      </div>
    </div>
  );
};

export default HandActions;
