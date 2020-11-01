certDetailsApp = new Vue({
  el: '#certDetailView',
  data: {
    CertDet: [{
      certification_name: '',
      Member_Name: '',
      date_granted: '',
      date_expired: ''
    }]
  },
  methods: {
    fetchCertDet() {
      fetch('api/certifications/cert_details.php')
        .then(response => response.json())
        .then(json => {
          this.CertDet = json;
          console.log(this.CertDet);
        });
    }
  },
  computed: {
    groupedCerts() {
      var certifications = {};
      this.CertDet.forEach((item) => {
        if (certifications[item.certification_name] == undefined) {
          certifications[item.certification_name] = [];
          certifications[item.certification_name].push(item.Member_Name);
        } else {
          certifications[item.certification_name].push(item.Member_Name);
        }
      });
      return certifications;
    }
  },
  created() {
    this.fetchCertDet();
  }
});
