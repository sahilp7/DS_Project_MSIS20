var appcert = new Vue({
  el: '#members',
  data: {
    MembList:[]
  },
  created() {
    this.fetchMemb();
  },
  methods: {
    fetchMemb: function() {
      fetch('api/records/members.php')
      .then(response => response.json())
      .then(data => (this.MembList=data));
    }
  }
  });
