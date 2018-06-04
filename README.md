# Backend-AirBnb-Reviews
This project is the backend for an inherited front-end component - reviews section - of AirBnb like app. The objective was to stress test the backend to handle high loads during busy times for a service that handles scale (i.e. AirBnb).

# Related Projects
  - https://github.com/RICHbraddahz/Airbnb-Similar-Listings
  - https://github.com/RICHbraddahz/descriptions
  - https://github.com/RICHbraddahz/bookings
  - https://github.com/seabnb/reviews (inherited front-end repo)

# Installation
- Start Webpack in Dev mode: npm run dev
- Start server: npm start
- To start, in your browser navigate to: http://localhost:3004

# Functionality
- Incorporated caching using Redis to increase throughput from 52 requests per second to 210 requests per second while keeping latency to 12 ms on legacy hardware
  - See server side code: 
    ./server/index.js
- Improved read query times in MongoDB by indexing on secondary field, which resulted in 1000x improvements in query time
  - See code in database directory: 
      ./database/models/seedMongo.js 
      ./database/models/queryMongo.js
- Stored 10 million data points in MongoDB database and reduced seeding time by 10.65X by switching ORM from mongoose to MongoClient
  - See code in database directory (see above for file paths)

