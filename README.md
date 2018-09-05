# react

Install eslint airbnb presets
npx install-peerdeps --dev eslint-config-airbnb

#Unit Tests
Remember that unit tests should test behavior and NOT implementation

#Good Test
- Set Initial State
- Simulate clicking a button that increments a counter
- Check to see if counter state was incremented

#Brittle Test
- Set Initial State
- Simulate clicking a button that increments counter
- Check to see if a particular function was called

Use unique attributes, such as data-test to find components rather than id, name etc.
  --> Enzyme selectors - attribute selector
  
"Strip trailing spaces on save" --> When you save indent will be removed on blank lines.
