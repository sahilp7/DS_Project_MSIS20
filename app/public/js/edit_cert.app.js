editcertapp = new Vue ({
  el: '#editcertapp',
  data: {
    Updatedcert: []
  },
  methods: {
    editCert(evt){
      fetch('api/certifications/cert_edit.php', {
          method: 'POST',
          body: JSON.stringify(this.Updatedcert),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
    },

    editCertData() {
      this.Updatedcert={
        certification_id: '',
        certification_name: '',
        agency: '',
        standard_expiry: ''
      }
    }

  },
  created() {
    this.editCertData();
}
});
