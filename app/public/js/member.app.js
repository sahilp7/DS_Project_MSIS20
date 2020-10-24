membersApp = new Vue ({
  el: '#members',
  data: {
    MembList: [{
      member_id: '',
      first_name: '',
      last_name: '',
      is_active: '',
      gender: '',
      date_of_birth: '',
      mobile_number: '',
      work_number: '',
      street_address: '',
      city: '',
      state: '',
      zip_code: '',
      email_address: '',
      station: '',
      chief: '',
      position_title: '',
      radio: ''
    }],
    newMember: {
      member_id: '',
      first_name: '',
      last_name: '',
      is_active: '',
      gender: '',
      date_of_birth: '',
      mobile_number: '',
      work_number: '',
      street_address: '',
      city: '',
      state: '',
      zip_code: '',
      email_address: '',
      station: '',
      chief: '',
      position_title: '',
      radio: ''
    },
    memberId:{}
  },
  methods: {
    fetchMember(){
      fetch('api/records/members.php')
        .then(response => response.json())
        .then(json => {
          this.MembList = json;
          console.log(this.MembList);
        });
    },
    createMember(){
      fetch('api/records/member_insert.php', {
          method: 'POST',
          body: JSON.stringify(this.newMember),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then(response => response.json())
        .then(json => {
          console.log("Returned from post:" + json);
          this.MembList.push(json[0]);
          this.newMember = this.newMemberData();
        });
      console.log("Creating (POSTing)...!");
      console.log(this.newMember);
    },
    // deleteData:function(id){
    //    if(confirm("Are you sure you want to remove this data?"))
    //    {
    //     axios.post('member_delete.php', {
    //      action:'delete',
    //      id:id
    //     }).then(function(response){
    //      application.fetchAllData();
    //      alert(response.data.message);
    //     });
    //    }
    //  },
    deleteMember(evt){
      console.log(this.memberID)
      fetch('api/records/member_delete.php', {
          method: 'POST',
          body: JSON.stringify(this.memberId),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        // .then(response => response.json())
        // .then(json => {
        //   console.log("Returned from delete:" + json);
        //   this.MembList.push(json[0]);
        //   this.newMember = this.newMemberData();
        // });
      console.log("Creating (POSTing)...!");
      console.log(this.memberId);
    },
    newMemberData() {
      return {
        member_id: '',
        first_name: '',
        last_name: '',
        is_active: '',
        gender: '',
        date_of_birth: '',
        mobile_number: '',
        work_number: '',
        street_address: '',
        city: '',
        state: '',
        zip_code: '',
        email_address: '',
        station: '',
        chief: '',
        position_title: '',
        radio: ''
      }
    }
  },
  created() {
    this.fetchMember();
}
});
