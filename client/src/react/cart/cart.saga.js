import { all, call, takeLatest, put, select } from "@redux-saga/core/effects"; 
import { clearCart, setCartFromFirebase } from "./cart.actions";
import userActionTypes from "../user/user.types"
import { getUserCartRef } from "../../Components/firebase/firebase-utils";
import { selectCurrentUser } from "../user/user.selectors"
import { selectCartItems } from "./cart.selectors"
import ActionTypes from "./cart.types";

export function* clearCartOnSignOut() {
    yield put(clearCart());
  }
  
  export function* updateCartInFirebase() {
    const currentUser = yield select(selectCurrentUser);
    if (currentUser) {
      try {
        const cartRef = yield getUserCartRef(currentUser.id);
        const cartItems = yield select(selectCartItems);
        yield cartRef.update({ cartItems });
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  export function* checkCartFromFirebase({ payload: user }) {
    const cartRef = yield getUserCartRef(user.id);
    const cartSnapshot = yield cartRef.get();
    yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
  }
  
  export function* onSignOutSuccess() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
  }
  
  export function* onUserSignIn() {
    yield takeLatest(userActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
  }
  
  export function* onCartChange() {
    yield takeLatest(
      [
        ActionTypes.ADD_ITEM,
        ActionTypes.REMOVE_ITEM,
        ActionTypes.CLEAR_ITEM_FROM_CART
      ],
      updateCartInFirebase
    );
  }
  
  export function* cartSagas() {
    yield all([call(onSignOutSuccess), call(onCartChange), call(onUserSignIn)]);
  }