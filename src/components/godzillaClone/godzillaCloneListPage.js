import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const GodzillaCloneLink = (props) => {
  console.log(props);
  return (
    <li className="kaiju-link">
      <Link to={"/godzilla-clone-list" + props.godzillaClone.link}>
        {props.godzillaClone.name}
      </Link>{" "}
      <Link to={"/godzilla-clone-list/edit"}>edit</Link>{" "}
      <a
        href="./godzilla-clone-list"
        onClick={() => {
          props.deleteGodzillaClone(props.godzillaClone._id);
        }}
      >
        delete
      </a>
    </li>
  );
};

// class GodzillaCloneMount extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { godzillaClones: [] };
//   }

//   componentDidMount() {
//     axios
//       .get("http://localhost:5000/godzilla-clones/")
//       .then((response) => {
//         this.setState({ godzillaClones: response.data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   render() {
//     return this.state.godzillaClones.map((res, i) => {
//       return <GodzillaCloneLink godzillaClone={res} key={res._id} />;
//     });
//   }
// }

class GodzillaCloneListDisplay extends Component {
  constructor(props) {
    super(props);

    this.deleteGodzillaClone = this.deleteGodzillaClone.bind(this);

    this.state = { godzillaClones: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/godzilla-clones/")
      .then((response) => {
        this.setState({ godzillaClones: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  GodzillaCloneLinkList() {
    return this.state.godzillaClones.map((currentGodzillaClone) => {
      return (
        <GodzillaCloneLink
          godzillaClone={currentGodzillaClone}
          deleteGodzillaClone={this.deleteGodzillaClone}
          key={currentGodzillaClone._id}
        />
      );
    });
  }

  deleteGodzillaClone(id) {
    axios
      .delete("http://localhost:5000/godzilla-clone-list/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      godzillaClones: this.state.godzillaClones.filter((el) => el._id !== id)
    });
  }

  render() {
    return (
      <>
        <div className="kaiju-header">
          <h2>Godzilla Clone</h2>
        </div>

        <div className="kaiju-list">
          <ul>{this.GodzillaCloneLinkList}</ul>

          <li>
            <Link to="/godzilla-clone-list/create">Add Godzilla Clone</Link>
          </li>
        </div>
      </>
    );
  }
}

export default GodzillaCloneListDisplay;
