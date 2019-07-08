import React from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import { ADD_PLACE_LIVING, ADD_PLACE_VISITED, ADD_PLACE_VISITING } from '../../../GraphQL';



function ClickedCountryTiming(props) {
  const { country, cities } = props;
  function handleAddCountry(data, timing) {
    props.handleTripTiming(timing)
    props.handlePageChange();
  }
  return (
    <div className="clicked-country-timing-container">
      <Mutation
        mutation={ADD_PLACE_VISITED}
        variables={{ country, cities }}
        onCompleted={data => handleAddCountry(data, 0)}
      >
        {(mutation) => (
          <span onClick={mutation}>I visited here</span>
        )}
      </Mutation>
      <Mutation
        mutation={ADD_PLACE_VISITING}
        variables={{ country, cities }}
        onCompleted={data => handleAddCountry(data, 1)}
      >
        {(mutation) => (
          <span onClick={mutation}>I plan to visit here</span>
        )}
      </Mutation>
      <Mutation
        mutation={ADD_PLACE_LIVING}
        variables={{ country, cities }}
        onCompleted={data => handleAddCountry(data, 2)}
      >
        {(mutation) => (
          <span onClick={mutation}>I live here currently</span>
        )}
      </Mutation>
      {props.previousTrips ? (
        <div className="previous-trips-button">delete trips</div>
      ) : null}
    </div>
  );
}

ClickedCountryTiming.propTypes = {
  handleTripTiming: PropTypes.func,
  handlePageChange: PropTypes.func,
  previousTrips: PropTypes.bool,
  country: PropTypes.number,
  cities: PropTypes.number
};

export default ClickedCountryTiming;
