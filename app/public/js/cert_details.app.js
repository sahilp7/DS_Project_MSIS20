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
      fetch('api/records/cert_details.php')
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
          certifications[item.certification_name].push(item.date_granted);
          certifications[item.certifsication_name].push(item.date_expired)
        } else {
          certifications[item.certification_name].push(item.Member_Name);
          certifications[item.certification_name].push(item.date_granted);
          certifications[item.certification_name].push(item.date_expired)s
        }
      });
      return certifications;
    }
  },
  created() {
    this.fetchCertDet();
  }
});
