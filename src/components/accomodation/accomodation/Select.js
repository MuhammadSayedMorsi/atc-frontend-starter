import React from "react";

import Select from "react-select";

const options = [
  { value: "Select Accomodation Type", label: "Select Accomodation Type" },
  { value: "Villa", label: "Villa" },
  { value: "Mansion", label: "Mansion" },
  { value: "Lodge", label: "Lodge" },
  { value: "comping", label: "comping" },
];

class SelectBox extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        className="__select"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder="Select Accomodation Type"
      />
    );
  }
}
export default SelectBox;
