import React from "react";
import godzillaCloneList from "../../lists/godzillaCloneList";

const GodzillaClonePath = (props) => {
  const currentPath = props.location.pathname;
  const currentGodzillaCloneFind = godzillaCloneList.find((godzillaClone) => {
    return "/godzilla-clone-list" + godzillaClone.link === currentPath;
  });
  const godzillaCloneName = currentGodzillaCloneFind.name;
  const godzillaCloneAppearances = currentGodzillaCloneFind.appearances;
  const godzillaCloneAbilities = currentGodzillaCloneFind.abilities;
  const godzillaCloneSizeMetric = currentGodzillaCloneFind.height.meters;
  const godzillaCloneSizeImperial = currentGodzillaCloneFind.height.feet;
  let godzillaCloneImage;

  if (currentGodzillaCloneFind.image !== undefined) {
    godzillaCloneImage = currentGodzillaCloneFind.image;
  }

  const GodzillaCloneImageDisplay = () => {
    if (currentGodzillaCloneFind.image !== undefined) {
      return <img src={godzillaCloneImage} alt={godzillaCloneName} />;
    } else {
      return null;
    }
  };

  const GodzillaCloneAppearancesDisplay = () => {
    return (
      <>
        <h4>Appearances</h4>
        <ul className="kaiju-list">
          {godzillaCloneAppearances.map((appearance) => {
            return <li>{appearance}</li>;
          })}
        </ul>
      </>
    );
  };

  const GodzillaCloneAbilitiesDisplay = () => {
    return (
      <>
        <h4>Abilities</h4>
        <ul className="kaiju-list">
          {godzillaCloneAbilities.map((ability) => {
            return <li>{ability}</li>;
          })}
        </ul>
      </>
    );
  };

  return (
    <>
      <div className="kaiju-header">
        <h2>Godzilla Clone</h2>
        <h3 className="kaiju-name">{godzillaCloneName}</h3>
        <GodzillaCloneImageDisplay />
      </div>

      <div className="kaiju-information">
        <GodzillaCloneAppearancesDisplay />
      </div>

      <div className="kaiju-information">
        <GodzillaCloneAbilitiesDisplay />
      </div>

      <div className="kaiju-information">
        <h4>Height</h4>
        <ul className="kaiju-size">
          <li>Meters: {godzillaCloneSizeMetric}</li>
          <li>Feet: {godzillaCloneSizeImperial}</li>
        </ul>
      </div>
    </>
  );
};

export default GodzillaClonePath;
