import React, { Component } from "react";
import { RedirectCheckout } from "@bambora/checkout-sdk-web";
import { ModalCheckout, Event } from "@bambora/checkout-sdk-web";

// new RedirectCheckout("<<YOUR-SESSION-TOKEN-HERE>>");

export default class PaymentApi extends Component {
  render() {
    //const checkout = new ModalCheckout("<<YOUR-SESSION-TOKEN-HERE>>");

    // checkout.on(
    //   Event.Authorize,
    //   (payload) => console.log(payload.data.txnid)
    //   // The transaction ID is logged to the console upon authorize.
    // );

    //checkout.show();
    
    return <div className="container pt-2 col-10 mx-auto my-2 text-center">
        <button className="btn btn-outline-danger text-uppercase mb-3 px-5">
            Pay Now
        </button>
    </div>;
  }
}
