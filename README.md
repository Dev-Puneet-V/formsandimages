[Multiple file upload](https://formsandimages-production.up.railway.app/mypostform) is a demo application that demostrates the **Multiple file upload** feature.


### Prerequisite
1. [Node.js](https://nodejs.org/en/docs/)
2. [Cloudinary account](https://cloudinary.com/)

### Setup
1. Install npm packages


        npm install
        npm install -D nodemon
2. Create `.env` file

        touch .env
3. Populate `.env` file with the following keys and corresponding values
```
    PORT=4000
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_secret=
    CLOUDINARY_URL=

```

### Run the application
```
    npm run dev
```