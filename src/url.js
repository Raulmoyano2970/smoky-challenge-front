let url = 'https://backsmoky.onrender.com/api/'

if(process.env.NODE_ENV === "production"){
    url = process.env.REACT_APP_URL
}

module.exports = url
