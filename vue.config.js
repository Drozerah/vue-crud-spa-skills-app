module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
      ? '' 
      // set production path to '' to simply open in the browser
      // -> https://cli.vuejs.org/guide/deployment.html#github-pages
      // -> https://stackoverflow.com/questions/41392166/vue-js-build-not-working
      : '/'
  }