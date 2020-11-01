editmembersapp = new Vue ({
  el: '#editmembersapp',
  data: {
    Updatedmember: []
  },
  methods: {
    editMember(evt){
      fetch('api/members/member_edit.php', {
          method: 'POST',
          body: JSON.stringify(this.Updatedmember),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
    },

    editMemberData() {
      this.Updatedmember={
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
    this.editMemberData();
}
});
