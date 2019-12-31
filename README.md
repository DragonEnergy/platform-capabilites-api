# platform-capabilites
11/23/19 
Nodejs api for storing platform capabilites. Initial commit simple file structure setup with express and body parser. Routes for 
-All Platforms
-All Types
-All Platoforms of specific type (Booking & eCommerce)

12/30/19
-All Routes right now are read only.
-No CRUD Functionality yet.
-No Access Control yet

Need to know content and key structure be we continue to proceed added more functionaility

All Data is sourced from DATA directory. 
.json is imported and parsed and appended on the endpoint URL

current routes: api is nested in http://localhost:3000/api/...
1. /platforms --lists all platforms
2. /ecommerce --lists ecommerce platforms only
3. /booking --lists booking platforms only
4. /types --lists type of platforms

Using Insomnia REST client
