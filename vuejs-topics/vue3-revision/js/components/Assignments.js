import AssignmentList from "./AssignmentList.js";

export default {
    name: 'Assignments',
    components: {
        AssignmentList
    },
    template: `
        <div class="space-y-8"> 
            <assignment-list v-if="filers.inProgress" :assignments="filers.inProgress" title="In progress"></assignment-list>
            <assignment-list v-if="filers.completed"  :assignments = "filers.completed" title = "Completed"></assignment-list>
            <form @submit.prevent="add">
                <div class="border border-gray-600 text-black">
                    <input v-model="newAssignment" type="text" placeholder="new assignment....." class="p-3">
                    <button type="submit" class="bg-white p-3 border-l">Add</button>
                </div>
            </form>
        </div>
    `,
    data() {
        return {
            assignments: [
                {name: 'Arabic assignment ', complete: false, id: 1},
                {name: 'Science assignment ', complete: false, id: 2},
                {name: 'English assignment ', complete: false, id: 3},
            ],
            newAssignment:''
        }
    },
    methods: {
        add(){
            this.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1
            });

            this.newAssignment = '';
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

