<template>
    <div>
      <assignment-list :assignments="inProgressAssignments" title="In progress"></assignment-list>
      <assignment-list :assignments = "completedAssignments" title = "Completed"></assignment-list>
    </div>
</template>
<script>
import AssignmentList from "./AssignmentList";
export default {
  name: 'Assignments',
  components:{
    AssignmentList
  },
  data() {
    return {
      assignments: [
        {name: 'Arabic assignment ', complete: false, id: 1},
        {name: 'Science assignment ', complete: false, id: 2},
        {name: 'English assignment ', complete: false, id: 3},
      ]
    }
  },
  computed:{
    inProgressAssignments() {
      this.assignments.filter(assignment => !assignment.complete)
      console.log(this.assignments)
    },

    completedAssignments() {
      this.assignments.filter(assignment => assignment.complete)
      console.log(this.assignments)
    }
  }
}
</script>
