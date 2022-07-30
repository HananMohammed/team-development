export default {
    name: 'AssignmentCreate',
    template: `
             <form @submit.prevent="add">
                <div class="border border-gray-600 text-black">
                    <input v-model="newAssignment" type="text" placeholder="new assignment....." class="p-3">
                    <button type="submit" class="bg-white p-3 border-l">Add</button>
                </div>
            </form>
    `,
    props: {
        assignments: Array
    },
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            console.log(this.assignments)
            this.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1
            });

            this.newAssignment = '';
        }
    },
}