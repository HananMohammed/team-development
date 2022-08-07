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
            <assignment-create @add="add"></assignment-create>
        </div>
    `,
    data() {
        return {
            assignments: [
                {name: 'Arabic assignment ', complete: false, id: 1, tag:"arabic"},
                {name: 'Science assignment ', complete: false, id: 2, tag:"science"},
                {name: 'English assignment ', complete: false, id: 3, tag:"english"},
            ],
        }
    },
    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1
            });
        }
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

