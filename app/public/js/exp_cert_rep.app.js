expCertifApp = new Vue ({
  el: '#exp_certifs',
  data: {
    ExpList: [{
      first_name: '',
      last_name: '',
      certification_name: '',
      date_expired: ''
    }]
  },
  methods: {
    fetchCert(){
      fetch('api/records/exp_cert_report.php')
        .then(response => response.json())
        .then(json => {
          this.ExpList = json;
          console.log(this.ExpList);
        });
    },
  },
  created() {
    this.fetchCert();
}
});
