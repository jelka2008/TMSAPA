import React from "react";

class ItemAddressRec extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaderLayer: false,
      addressLayer: this.children,
    };
  }

  // componentDidMount() {
  //   getLayerTree();
  // }

  // getLayerTree() {
  //   this.setState({
  //     loaderLayer: true,
  //   });
  // }

  render() {
    return this.props.dataAddress.map((item) => {
      return (
        <div className={this.props.className} key={item.id}>
          {item.group && (
            <span onClick={this.props.getLayerTree}>
              {item.children ? "+" : "-"}
            </span>
          )}
          <span>{item.data}</span>
          {item.children && (
            <ItemAddressRec className="nested" dataAddress={item.children} />
          )}
        </div>
      );
    });
  }
}

export default ItemAddressRec;
