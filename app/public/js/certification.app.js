certifApp = new Vue ({
  el: '#certifs',
  data: {
    CertList: [{
      certification_id: '',
      certification_name: '',
      agency: '',
      standard_expiry: ''
    }],
    newCert: {
      certification_id: '',
      certification_name: '',
      agency: '',
      standard_expiry: ''
    },
    certId:{}
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
    createCert(){
      fetch('api/records/certification_insert.php', {
          method: 'POST',
          body: JSON.stringify(this.newCert),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then(response => response.json())
        .then(json => {
          console.log("Returned from post:" + json);
          this.CertList.push(json[0]);
          this.newCert = this.newCertData();
        });
      console.log("Creating (POSTing)...!");
      console.log(this.newCert);
    },

    deleteCert(evt){
      console.log(this.certId)
      fetch('api/records/cert_delete.php', {
          method: 'POST',
          body: JSON.stringify(this.certId),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })

      console.log("Creating (POSTing)...!");
      console.log(this.memberId);
    },
    newCertData() {
      return {
        certification_id: '',
        certification_name: '',
        agency: '',
        standard_expiry: ''
      }
    },
    fetchData:function(certification_id){
      axios.post('edit_cert.php', {
        action:'fetchSingle',
        certification_id:certification_id
      }).then(function(response){
        application.certification_name = response.data.certification_name;
        application.agency = response.data.agency;
        application.standard_expiry = response.data.standard_expiry;
        application.myModel = true;
        application.actionButton = 'Update';
        application.dynamicTitle = 'Edit Data';
      });
    }
  },
  created() {
    this.fetchCert();
}
});
