# Talent App

# Brief
To build an app that allows users to filter an array of supplied talent, and output the names of talent whose location matches the location supplied. 

# Installation & Testing
- Yarn add react
- Yarn add cypress
- yarn cypress:open to run test

# Run
- Yarn start

# Approach & Notes
- Decided to bootstrap the project with create-react-app as oppossed to manually setting up with webback/Babel to save some time.
- Used React as believed react hooks(useState and useEffect) would work quite well for what was needed.
- Only really just getting into the swing of things with TypeScript, but feeling more and more comfortable with it. Can really see the benefits of using it.
- Only wrote one entire test for the program as believed that individual unit testing for each spcific section wasn't needed.
- Decided to code mobile-first and made sure it was responsive on smaller screens and then scaled for desktops.
- Saw no need of separating sections into individual components.
- Also decided against sass as it was quite a simple app.

# Amendments
- Changed from filtering location to just searching, to allow user to search other locations not on the select element options.


