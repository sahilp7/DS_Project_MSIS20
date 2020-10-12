var appcert = new Vue({
  el: '#certInsert',
  data: {
    CertList:[]
  },
  created() {
    this.fetchCert();
  },
  methods: {
    fetchCert: function() {
      fetch('api/records/certifications.php')
      .then(response => response.json())
      .then(data => (this.CertList=data));
    }
  }
  });
