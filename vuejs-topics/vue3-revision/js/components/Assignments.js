import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    name: 'Assignments',
    components: {
        AssignmentList,
        AssignmentCreate
    },
    template: `
        <div class="flex gap-8"> 
            <assignment-list v-if="filers.inProgress" :assignments="filers.inProgress" title="In progress">
                <assignment-create @add="add"></assignment-create>
            </assignment-list>
            <assignment-list
               v-if="showCompleted" 
               :assignments = "filers.completed" 
               @toggle = "showCompleted = !showCompleted"
               title = "Completed" can-hide>
                          
            </assignment-list>
        </div>
    `,
    data() {
        return {
            assignments: [],
            showCompleted : true
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
    },
    created(){
        fetch("http://localhost:3001/assignments")
            .then(response=>response.json())
            .then(assignments=>{
                this.assignments = assignments
            })
    }
}

