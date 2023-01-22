import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "./with-spinner/with-spinner";
import collectionOverview from "./collection.overview";
import { selectIsCollectionsFetching } from "../../react/shop/shop.selector";
import { compose } from "redux";


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching 
});

const collectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionOverview);

export default collectionOverviewContainer;