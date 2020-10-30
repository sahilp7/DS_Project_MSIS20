var assigncertapp = new Vue({
  el: '#assigncertapp',
  data: {
    MembList: [],
    certifications: [],
    table:{}

  },
  methods: {
    fetchMemb() {
      fetch('api/records/members_assign.php')
      .then(response => response.json())
      .then(json => {assigncertapp.MembList = json})
    },

    fetchcert() {
      fetch('api/records/cert_assign.php')
      .then(response => response.json())
      .then(json => {assigncertapp.certifications = json})
    },

    handleCert(){
      console.log(this.table)
      fetch('api/records/membercert_assign.php', {
        method:'POST',
        body: JSON.stringify(this.table),
        headers: {
          "Content-Type": "application/json; charset=utf-8"

        }
      })
    }},

  created() {
    this.fetchMemb();
    this.fetchcert();
  }
});
