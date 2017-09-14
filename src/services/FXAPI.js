import { queryStringFromObject } from '../utils/URIUtils';

const URI_BASE = '//openexchangerates.org/api';
const APP_ID = 'e7ebc4bf4b6c4f73aa4e6cfbc0239eb6';

const apiURI = (path, opts = {}) => {
  const { protocol } = window.location;
  const qs = queryStringFromObject({
    ...opts,
    app_id: APP_ID,
  });
  return `${protocol}${URI_BASE}${path}${qs}`;
}

const fetchURI = (path, opts = {}) =>
  fetch(apiURI(path, opts)).then(response => response.json());

// const latest = base => fetchURI('/latest.json', /* {
//   base, // not available with free account
// } */);

const latest = () => fetch('/latest.json').then(response => response.json());

export {
  latest,
};
