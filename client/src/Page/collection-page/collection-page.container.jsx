import { compose } from "redux";
import { connect } from "react-redux";
import { selectIsCollectionsLoaded } from "../../react/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import CollectionPage from "./CollectionPage";
import WithSpinner from "../../Components/Collections/with-spinner/with-spinner";

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
});

const collectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default collectionPageContainer;