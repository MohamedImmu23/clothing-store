import { all, call } from "@redux-saga/core/effects";
import { shopSaga } from "./shop/shop.saga";
import { userSaga } from "./user/user.saga";
import { cartSagas } from "./cart/cart.saga";

export default function* rootSaga() {
    yield all([call(shopSaga), call(userSaga), call(cartSagas)]);
};