detailsApp = new Vue({
  el: '#detailView',
  data: {
    MemDet: [{
      Member_Name: '',
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
    }
  },
  computed: {
    groupedMembers() {
      var members = {};
      this.MemDet.forEach((item) => {
        if (members[item.Member_Name] == undefined) {
          members[item.Member_Name] = [];
          members[item.Member_Name].push(item.certification_name)
        } else {
          members[item.Member_Name].push(item.certification_name);
        }
      });
      return members;
    }
  },
  created() {
    this.fetchMemDet();
  }
});
