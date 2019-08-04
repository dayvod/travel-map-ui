import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import { REMOVE_PLACE_VISITING, REMOVE_PLACE_VISITED } from "../../../GraphQL";
import TrashIcon from "../../../icons/TrashIcon";

function ClickedCountryTiming(props) {
  function handleAddCountryTiming(timing) {
    props.handleTripTiming(timing);
    props.handlePageChange(1);
  }
  function trashClicked() {}
  console.log(props);
  let placeVisitingId = null;
  let placeVisitedId = null;
  let setMutation = null;
  switch (props.previousTrip.tripTiming) {
    case 0:
      placeVisitedId = props.previousTrip.id;
      setMutation = REMOVE_PLACE_VISITED;
      break;
    case 1:
      placeVisitingId = props.previousTrip.id;
      setMutation = REMOVE_PLACE_VISITING;
      break;
    default:
      break;
  }
  return (
    <div className="clicked-country-timing-container">
      <span onClick={() => handleAddCountryTiming(0)}>I visited here</span>
      <span onClick={() => handleAddCountryTiming(1)}>
        I plan to visit here
      </span>
      <span onClick={() => handleAddCountryTiming(2)}>
        I live here currently
      </span>
      {props.previousTrip !== null ? (
        <Mutation
          mutation={setMutation}
          variables={
            props.previousTrip.tripTiming === 0
              ? { placeVisitedId }
              : { placeVisitingId }
          }
          onCompleted = {() => console.log('deleted')}
        >
          {mutation => (
            <div className="previous-trips-button" onClick = {mutation}>
              delete trips
              <TrashIcon cityKey = {props.country} trashClicked = {trashClicked} />
            </div>
          )}
        </Mutation>
      ) : null}
    </div>
  );
}

ClickedCountryTiming.propTypes = {
  handleTripTiming: PropTypes.func,
  handlePageChange: PropTypes.func,
  clickedCountryArray: PropTypes.array,
  previousTrip: PropTypes.object,
  country: PropTypes.number
};

export default ClickedCountryTiming;
