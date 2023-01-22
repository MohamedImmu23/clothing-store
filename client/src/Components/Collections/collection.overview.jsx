import React from "react"
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview  from "./collection-preview"
import { selectCollectionForPreview } from "../../react/shop/shop.selector";

const collectionsOverview = ({collections}) => {
    return ( 
        <div className="collections-overview" >
            { 
                collections.map(({id, ...othercollectionsprops}) => (
                    <CollectionPreview key={id} {...othercollectionsprops}  />
                ))
             }
        </div>
     );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})
 
export default connect(mapStateToProps)(collectionsOverview); 