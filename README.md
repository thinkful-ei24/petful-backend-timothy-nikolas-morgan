# Petful API

This is the RESTFul API for the Petful app. Hosted on Heroku [here](https://petful-backend.herokuapp.com).

### GET `/api/cat` endpoint
Returns information about the next cat in queue. 

Response 

`{

    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    
    name: 'Fluffy',
    
    sex: 'Female',
    
    age: 2,
    
    breed: 'Bengal',
    
    story: 'Thrown on the street'   
    
}`
### DELETE `/api/cat` endpoint
Removes the next cat in queue from the shelter.

### GET `/api/dog` endpoint
Returns information about the next dog in queue. 

Response 

`{
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    
    name: 'Zeus',
    
    sex: 'Male',
    
    age: 3,
    
    breed: 'Golden Retriever',
    
    story: 'Owner Passed away'
    
  }`
  
### DELETE `/api/dog` endpoint
Removes the next dog in queue from the shelter.


### Tech Stack
- Node.js
- Express
