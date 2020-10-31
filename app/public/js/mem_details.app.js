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
    },
    filterTable() {
      // Variables
      let dropdown, table, rows, cells, country, filter;
      dropdown = document.getElementById("countriesDropdown");
      table = document.getElementById("myTable");
      rows = table.getElementsByTagName("tr");
      filter = dropdown.value;

      // Loops through rows and hides those with countries that don't match the filter
      for (let row of rows) { // `for...of` loops through the NodeList
        cells = row.getElementsByTagName("td");
        country = cells[0] || null; // gets the 2nd `td` or nothing
        // if the filter is set to 'All', or this is the header row, or 2nd `td` text matches filter
        if (filter === "All" || !country || (filter === country.textContent)) {
          row.style.display = ""; // shows this row
        } else {
          row.style.display = "none"; // hides this row
        }
      }
    }
  },
  computed: {
    groupedMembers() {
      var members = {};
      this.MemDet.forEach((item) => {
        if (members[item.Member_Name] == undefined) {
          members[item.Member_Name] = [];
          members[item.Member_Name].push(item.certification_name);
        } else {
          members[item.Member_Name].push(item.certification_name);
        }
      });
      return members;
    },
    groupedDateGranted() {
      var dategrant = {};
      this.MemDet.forEach((item) => {
        if (members[item.Member_Name] == undefined) {
          members[item.Member_Name] = [];
          members[item.Member_Name].push(item.date_granted);
        } else {
          members[item.Member_Name].push(item.date_granted);
        }
      });
      return dategrant;
    },
  },
  created() {
    this.fetchMemDet();
  }
});
