// Vue.js, receiving a "Same Origin Policy" error message
var apiURL = 'https://www.opentdb.com/api.php?amount=10&difficulty=easy'

var quiz = new Vue({
  el: '#demo',

  data: {
    category: ['any'],
    difficulty: ['easy', 'medium', 'hard'],
    commits: null
  },

  created: function() {
    this.fetchData()
  },
  watch: {
    currentSession: 'fetchData'
  },
  filters: {
    truncate: function(v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    }
  },
  methods: {
    fetchData: function() {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL + self.currentSession)
      xhr.onload = function() {
        self.commits = JSON.parse(xhr.responseText)
        console.log(self.commits[0].html_url)
      }
      xhr.send()
    }
  }
})