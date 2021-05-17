# Project Name
SEEINTEL

## Description

SEEINTEL is an app for cyber security investigators. The app retrieves information from different APIs about flagged URLs, Domains and IPs. Based on the fetched threat intelligence, investigators can take decisions in a timely manner.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start searching for threat intelligence.
-  **Login:** As a user I can login to the platform so that I can search for threat intelligence.
-  **Logout:** As a user I can logout from the platform so no one else can use it.
-  **Search Information** As a user I want to search information about flagged URLs, Domains and IPs.
-  **See Detailed Information** As a user I want to see detailed information about flagged URLs, Domains and IPs.
-  **Save Information** As a user I can save the retrieved information on my dashboard.
-  **List Information** As a user I want to see the list of saved information on my dashboard.
-  **See Saved Information** As a user I want to see the saved piece of information.
-  **Delete Saved Information** As a user I want to delete the saved information.
-  **Add/Edit Notes To Saved Information** As a user I want to add notes to the saved information.

## Backlog

- Delete user account
- About page
- Search tips
- Model for IPs:
id - String
type - String
continent - String
as_owner - String
country - String
network - String
whois - String
whois_date - Number
asn - Number
jarm - String
last_analysis_results - Object
last_analysis_stats - Object
last_https_certificate - Object
last_https_certificate_date - String
last_modification_date - Number
regional_internet_registry - String
  
## Routes

- / - Homepage
- /about - About
- /auth/signup - Sign up form
- /auth/signin - Sign in form
- /user - User dashboard
- /user/tips - Searching tips
- /search/:id - Specific/Saved search result 
- 404

## Pages

- Homepage (public)
- About (public)
- Sign up (public)
- Sign in (public)
- User dashboard (user only)
- Search tips (user only)
- All search results (user only)
- Specific search result (user only)
- Saved search result (user only)
- 404 page (public)

## Components

- NavBar
- FooterBar
- Homepage
- About
- SignupPage
- SigninPage
- Dashboard
- SearchForm
- SearchTips
- SearchResult
- SavedSearchResult
- AddNote
- 404page

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.signin()
  - auth.user()

- External APIs
  - API for Domains

# Server

## Models

**User model**
- username: {
    type: String,
    required: true,
    unique: true
}
- email: {
    type: String
    required: true,
    unique: true
}
- password: {
    type: String,
    required: true
}
- notes: [{type: Schema.Types.ObjectId,ref:'Note'}]
- domain: [{type: Schema.Types.ObjectId,ref:'Domain'}]

**Domain Model**
id - String
type - String
categories - Object
whois - String
whois_date - Number
registrar - String
creation_date - Number
jarm - String
last_analysis_results - Object
last_analysis_stats - Object
last_dns_records - Array of Objects
last_dns_records_date - Number
last_https_certificate - Object
last_https_certificate_date - Number
last_modification_date - Number
last_update_date - Number


**Notes model**
- note: String
- domain: [{type: Schema.Types.ObjectId,ref:'Domain'}]

## API Endpoints/Backend Routes

- GET /auth/user
- POST /auth/signup
  - body:
    - username
    - email
    - password
- POST /auth/signin
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)
- GET search/:id 
- DELETE search/:id 
- PATCH search/:id 

## Links

### Trello/Kanban

https://trello.com/b/QvFpSpG7/project-3

### GitHub

https://github.com/DanielTraci/seeintel-client
https://github.com/DanielTraci/seeintel-server

[Deploy Link](http://heroku.com)


### Slides

[Slides Link](http://slides.com)


# !!! DANGEROUS WEBSITES to test the application. DO NOT ENTER ANY OF THESE WEBSITES !!!
<!-- 17ebook.com
dfwdiesel.net
divineenterprises.net
ginedis.com
gncr.org
hihanin.com
kingfamilyphotoalbum.com
likaraoke.com
mactep.org
magic4you.nu
marbling.pe.kr
nacjalneg.info
purplehoodie.com
qsng.cn
seksburada.net
sportsmansclub.net
stock888.cn
tathli.com
teamclouds.com
texaswhitetailfever.com
wadefamilytree.org
xnescat.info
yt118.com -->
