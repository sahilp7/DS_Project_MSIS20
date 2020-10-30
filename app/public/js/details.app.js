detailsApp = new Vue({
  el: '#detailView',
  data: {
    MemDet: [{
      member_id: '',
      first_name: '',
      last_name: '',
      certification_name: '',
      date_granted: '',
      date_expired: ''
    }]
  },
  methods: {
    fetchMemDet() {
      fetch('api/records/member_details.php')
        .then(response => response.json())
        .then(json => {
          this.MemDet = json;
          console.log(this.MemDet);
        });
    },
  },
  created() {
    this.fetchMemDet();
  }
});
