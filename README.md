# FX

## Instructions

`npm install && npm serve`

Then go to http://localhost:5000

## Extra

I was aware that Cynthia said that you reviewed these on Weds so I thought I'd get it done quite quickly as I have other offer deadlines to hit! Things I would have done having more time:

- The graphs etc. on the info panel
- Testing! I didn't want to spend too long testing as this was going to take quite a long time anyway.
- Wasn't sure how to implement the actual exchange functionality, I thought I might just have it update states in the store for balances etc. but decided against it as this would all be handled through an API really and optimisitic updating would not be used for a financial transaction in a UI.
- Wasn't sure whether to bring some fonts and icons in, perhaps could have looked at feather icons for the stock icon in the center.
- Annoyingly the an `<input type='number' />` doesn't present a keyboard with a decimal in iOS in the browser. Even if it did, in Chrome the onChange even doesn't fire for these characters and has weird edge cases so an `<input type='text' />` was used.
