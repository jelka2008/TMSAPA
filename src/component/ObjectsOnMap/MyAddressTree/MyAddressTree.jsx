import React, { Component } from "react";
import ItemAddressRec from "./ItemAddressRec/ItemAddressRec";
import DataAddressTree from "../../../testData/DataAddressTree";

class MyAddressTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAddress098: [...DataAddressTree],
    };
  }
  render() {
    return (
      <div className="address_box">
        <ItemAddressRec
          className="nested"
          dataAddress={this.state.dataAddress098}
        />
      </div>
    );
  }
}

export default MyAddressTree;
