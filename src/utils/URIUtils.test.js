import { queryStringFromObject } from './URIUtils.js';

test('expect queryStringFromObject to create the strings correctly', () => {
  expect(queryStringFromObject({
    greeting: 'hello',
  })).toBe('?greeting=hello');

  expect(queryStringFromObject({
    greeting: 'hello',
    number: 400,
  })).toBe('?greeting=hello&number=400');

  expect(queryStringFromObject({
    number: 400,
    name: undefined, // should this work?
    url: '/@test*?http://',
    script: '<script>alert("rce")</script>',
  })).toBe('?number=400&name=undefined&url=%2F%40test*%3Fhttp%3A%2F%2F&script=%3Cscript%3Ealert(%22rce%22)%3C%2Fscript%3E');
});
