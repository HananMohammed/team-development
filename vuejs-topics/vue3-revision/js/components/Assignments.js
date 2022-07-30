import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    name: 'Assignments',
    components: {
        AssignmentList,
        AssignmentCreate
    },
    template: `
        <div class="space-y-8"> 
            <assignment-list v-if="filers.inProgress" :assignments="filers.inProgress" title="In progress"></assignment-list>
            <assignment-list v-if="filers.completed"  :assignments = "filers.completed" title = "Completed"></assignment-list>
            <assignment-create  :assignments="assignments"></assignment-create>
        </div>
    `,
    data() {
        return {
            assignments: [
                {name: 'Arabic assignment ', complete: false, id: 1},
                {name: 'Science assignment ', complete: false, id: 2},
                {name: 'English assignment ', complete: false, id: 3},
            ],
        }
    },
    methods: {
    },
    computed: {
        filers() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    }
}

