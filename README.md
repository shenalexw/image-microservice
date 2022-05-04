# Image Microservice

---

### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)

---

## Description

Image microservice that allows users to get the first image from the unsplash api.

NOTE: Since this is a demo, the api can only handle 50 request every hour. Me mindful of how you are using this microservice!

---

## How To Use

#### Installation
- Node 14.0 +

```
git clone https://github.com/shenalexw/image-microservice.git
npm install
npm start
```

#### Set Up
- Create a unsplash account developer account.
- Create an application where you can retrieve an access token
- Create a .env file in the root directory of the program and input the following.

```
UNSPLASH_API_KEY="INPUT_KEY_HERE"
```
You may request the key from myself.



## API Reference

#### HTTP URL
```
http://localhost:3123/image
```
#### Routes
```
POST /image
```

Send a POST HTTP Request to the HTTP URL with a request json body
```json
{
    "keyword": "apple"
}
```

Response will be in json
```json
{
    "image": "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixid=MnwzMjU4NzN8MHwxfHNlYXJjaHwxfHxhcHBsZXxlbnwwfHx8fDE2NTE3MDY2OTE&ixlib=rb-1.2.1"
}
```







