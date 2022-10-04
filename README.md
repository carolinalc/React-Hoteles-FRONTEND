# React Hotels

## Description

React Hotels is a hotel management platform where users can view hotels by category, make comments and bookings.

### User Stories

- 404: As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
- Not Found:  As an anon/user I can see a 500 page if if something on the server is not working properly.
- Signup: As an anon I can sign up in the platform so that I can making comments and bookings.
- Login: As a user I can login to the platform so that I can see hotels by category.
- Logout: As a user I can logout from the platform so no one else can use it.
- Add comment: As a user I can add a comment about diferents hotels so that I can share it with the community.
- Add booking: As a user I can choose a hotel and make a booking with check-in, check-out time, guests and leave a comment in the hotel.
- Delete Booking: As a user I can delete a booking I have previously created.
- Create a Hotel: As a manager I can add a hotel to the list of hotels by category and complete its features.
- Edit a Hotel: As a manager I can edit all the features of the hotel.
- Delete a Hotel: As a manager I can edit delete a hotel.
- See Bookings: As a manager I can see the list of bookings made by customers.
- Delete Bookings: As a manger I can delete a booking made by costumer.

### Backlog

Search:
- Have a search engine to search for hotels.

User Perfil:
- Ability to edit and delete comments.
- Display price and pension in the booking.
- Add photo carousel of hotels
- Be able to make a booking as a payment platform 

Geo Location:
- See hotels in a map.

Hotels:
- Add photo carousel of hotels

## User

### Routes

- / - Homepage
- /hotels - view hotels by categories
- /about - about the platform's creators

## Client

### Routes

- / - Homepage
- /auth/signup - Signup form
- /auth/login - Login form
- /hotels - hotels categories
- /hotels/:id - hotels details
- /booking/:id/create - create a booking
- /booking/:id/details - view a booking details
- /coment/:id - view all the comments make it by community
- /coment/:id/create- create a commment
- /profile - details about me
- /profile/edit - edit my profile
- /profile/:id/delete - delete a booking
- /profile/verify
- 404
- 500

## Admin

### Routes

- / - Homepage
- /auth/signup - Signup form
- /auth/login - Login form
- /hotels - hotels categories
- /hotels/:id - hotels details
- /hotels/create - create a hotel
- /hotels/:id - edit a hotel
- /hotels/:id - delete a hotel 
- /booking/:id/details - view a booking details
- /booking/:idBooking/delete - delete a booking
- /coment/:id - view all the comments make it by community
- /booking - get all bookings
- /profile/admin - details about me
- /profile/edit - edit my profile
- /profile/:id/delete - delete a booking
- 404
- 500

## Pages

- Home Page (Public)
- About us (Public)
- Hotels (Public)
- Sign in Page (anon only)
- Log in Page (anon only)
- Hotels details (user only)
- User Perfil (user only)
- Booking details (admin only)
- Create a Hotel (admin only)
- 404 Page (public)
- 500 Page (public)

## Components

- MyNavbar
- Footer

Autorization:
- IsAdmin
- IsPrivate

List Hotel Categories:
- List Hotel Ciudad
- List Hotel Resort
- List Hotel Rural
- List Hotel Temático

Profile:
- Admin Booking
- Client Booking
- Edit Perfil

See:
- Booking
- Comments

Create:
- Creat Comment
- Create Booking

Hotel:
- EditHotel


## Service

Auth Services:
-  signupService(user)
- loginService(user)
- verifyService()

Booking Services:
- createAllBooking(id, bookingCreate)
- getAllBooking()
- deleteBooking(id)
- getBookingDetails(id)

Commnet Services:
- getComments(id)
- createComments(id, newComment)

Hotels Services:
- getIsAdmin() 
- getProfileData()
- getProfileEdit(_id, updateProfile)
- getBookingProfile()
- deleteBookingUser()

Profile services:
- getIsAdmin()
- getProfileData()
- getProfileEdit(_id, updateProfile)
- getBookingProfile() 
- deleteBookingUser()

## Server

### Models

User Models:
 - username: String / required
 - email: String / required / unique
 - password: String / required 
 - password2: String / required 
 - imagen: String / default
 - role: String / enum / default

Hotel Models:
- nombre: String
- imagen: String
- estrellas: String
- categorias: String / enum: categorias
- ubicacion: String
- precios: Number
- pension: String / enum: pension
- descripcion: String

Booking Models:
- fechaEntrada: String
- fechaSalida: String
- huespedes: Number
- checkin: String / enum: checkin
- comentarios: String
- clienteId: Schema.Types.ObjectId / ref: "User"
- hotelId: Schema.Types.ObjectId / ref: "Hotel"

Comments Models:
- clienteId: Schema.Types.ObjectId / ref: "User"
- comentarios: String
- valoracion: Number / enum: valoracion
- hotelId: Schema.Types.ObjectId / ref: "Hotel"

### Utils

Categorias:
- categorias =  ["ciudad", "resort", "rural", "tematico"]

Check In:
- checkin = ["10:00-13:00", "16:00-19:00", "Special Time"]

Pension:
- pension = [ "Con desayuno",  "media pension",  "pension completa"]

Valoracion: 
- valoracion =  [0, 1, 2, 3, 4, 5]

## Backend Routes

Auth Routes:

- GET /auth/verify

- POST /auth/signup
* body: email, password, password2, username

-POST /auth/login
* body email, password
 
Booking Routes:

- GET /

- POST /:id/create
* body: fechaEntrada, huespedes, checkin , comentarios, fechaSalida, clienteId, hotelId, id, _id

- GET /:idBooking

- DELETE /:idBooking/delete

- GET /:id/detail

Comment Routes:

- GET /:id

- POST /:id/create
* body: clienteId, comentario, valoracion, hotelId, id, _id

Hotel Routes:

- GET /selectores

- GET /ciudad

- GET /resort

- GET /rural

- GET /tematico

- POST /create
* body: nombre, estrellas, categorias, ubicacion, precios, pension, descripcion, imagen

- GET /:id

- DELETE /:id

- PATCH /:id

Profile:

- GET /admin

- GET /booking

- GET /user

- PATCH /:id/edit
* body: username, email, imagen, _id

- DELETE /delete

Uploader:

- POST /


# Links

## GitHub

https://github.com/carolinalc/React-Hoteles-BACKEND

https://github.com/carolinalc/React-Hoteles-FRONTEND


## Netlify

https://react-hotel-maria-carol.netlify.app/hotels

## Slides

https://docs.google.com/presentation/d/1SU5eodpzXqqKh-SLVlS_242NemsB_ykll7jw2d0_EgE/edit#slide=id.g13396e964f4_0_167




