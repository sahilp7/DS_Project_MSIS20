memRepApp = new Vue ({
  el: '#mem_rep',
  data: {
    MemList: [{
      first_name: '',
      last_name: '',
      station: '',
      radio: '',
      email_address: ''
    }]
  },
  methods: {
    fetchMember(){
      fetch('api/members/members_report.php')
        .then(response => response.json())
        .then(json => {
          this.MemList = json;
          console.log(this.MemList);
        });
    },
  },
  created() {
    this.fetchMember();
}
});
