import React from "react"
import { Route } from "react-router-dom";
import { fetchCollectionsStart } from "../react/shop/shop.action";
import {connect} from "react-redux";
import CollectionOverviewContainer from "../Components/Collections/collection-overview.container.jsx";
import CollectionPageContainer from "./collection-page/collection-page.container";
import { useEffect } from "react";

const ShopPage = ({fetchCollectionsStart, match}) => {

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
    );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);