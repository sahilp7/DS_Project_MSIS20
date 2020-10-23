expCertifApp = new Vue ({
  el: '#exp_certifs',
  data: {
    CertList: [{
      first_name: '',
      certification_name: '',
      agency: '',
      standard_expiry: ''
    }],
    newCert: {
      certification_id: '',
      certification_name: '',
      agency: '',
      standard_expiry: ''
    }
  },
  methods: {
    fetchCert(){
      fetch('api/records/certifications.php')
        .then(response => response.json())
        .then(json => {
          this.CertList = json;
          console.log(this.CertList);
        });
    },
  },
  created() {
    this.fetchCert();
}
});
