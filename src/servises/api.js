import PropTypes from 'prop-types';

const BASE_URl = 'https://api.themoviedb.org/';
const KEY = '85df022f753c73f98c2e0e8a3e0f9791';

export const fetchQuery = async query => {
  const res = await fetch(`${BASE_URl}${query}api_key=${KEY}`);
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(new Error('error'));
};

fetchQuery.propTypes = {
  query: PropTypes.string.isRequired,
};
