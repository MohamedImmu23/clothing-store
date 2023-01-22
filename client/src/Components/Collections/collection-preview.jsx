import React from "react"
import "../Collections/collection-preview.styles.scss"
import CollectionItem from "../Collections/Collection-item.jsx"
import { withRouter } from "react-router";

const CollectionPreview = ({items, title, history, match}) => {
  return (
    <div className="collection-preview" >
      <h1 className="title cursor-pointer" onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)} >{title}</h1>
      <div className="preview">
        {items
          .filter((items, idx) => idx < 4)
          .map(items => (
          <CollectionItem key={items.id} item = {items} />
        ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
