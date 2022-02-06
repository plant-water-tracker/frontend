# frontend
# *Plant Water Tracker*: Bloom Tech Build Week, February 2022

The Plant Water Tracker will remind users when it's time to feed that foliage and quench your plants' thirst.

### ☝️ **Pitch**

Ensuring that all your plants are consistently watered is actually pretty difficult. The Plant Water Tracker is an app that helps to solve those problems. 

With an easy to use interface for creating a plant watering schedule tailored to each individual plant, *Plant Water Tracker* will remind users when it's time to feed that foliage and quench your plants' thirst.

### ✅  **MVP**

1. `user` can sign-up / create an account by providing a unique `username`, a valid mobile `phoneNumber` and a `password`. 

2. `user` can login to an authenticated session using the credentials provided at account creation / signup.

3. Authenticated `user` can Create, Update and Delete a `plant` object. At a minimum, each `plant` must have the following properties: 
    - `id`: Integer
    - `nickname`: String
    - `species` : String
    - `h2oFrequency`: Type determined by implementation
    - `image`: (optional)

4. Authenticated `user` can view a list of created `plants`.  A `plant` can be deleted or selected to present `user` with a detail view where `user` can then update any property of the selected `plant`. 

5. Authenticated `user` can update their `phoneNumber` and `password`.


### *Heroku/Vercel API*

Deployed URL: [https://plant-water-tracker.vercel.app]


# *API Endpoints*

https://plant-water-tracker.herokuapp.com/api/plants

https://plant-water-tracker.herokuapp.com/api/users


# *Meet the Team*

`David Aihe`
-Front End Engineer-

Github: [https://github.com/personFour]

---------------------------------------------------------------------------------------------------------------------

`Brittni Karat`
-Backend Engineer-

Github: [https://github.com/personFour]