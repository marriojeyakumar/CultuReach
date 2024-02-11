import React from 'react';
import PropTypes from 'prop-types';

const EventItem = ({ event }) => {
  const { host_id, start_time, name, location, description, tags, cultures } = event;
};

EventItem.propTypes = {
  event: PropTypes.shape({
    host_id: PropTypes.number.isRequired,
    start_time: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    cultures: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default EventItem;
