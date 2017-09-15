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

const _latest = base => fetchURI('/latest.json', /* {
  base, // not available with free account
} */);

// For testing
// const _latest = () => fetch('/latest.json').then(response => response.json());


// Add this to allow us to not have to change the 'BASE' param which we can't do
// with a free account!
const latest = base => _latest(base).then(json => {
  if (base === json.base) {
    return Promise.resolve(json);
  } else if (json.rates[base]) {
    const rate = json.rates[base];
    const rates = Object.keys(json.rates).reduce((out, curr) => ({
      ...out,
      [curr]: json.rates[curr] / rate,
    }), {});

    return Promise.resolve({
      ...json,
      base,
      rates,
    });
  } else {
    // throw
  }
});

export {
  latest,
};
