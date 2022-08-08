export default {
    name: 'AssignmentCreate',
    template: `
             <form @submit.prevent="add">
                <div class="border border-gray-600 w-400 text-black flex">
                    <input v-model="newAssignment" type="text" placeholder="new assignment....." class="p-3">
                    <button type="submit" class="bg-white p-3 border-l">Add</button>
                </div>
            </form>
    `,
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.newAssignment)
            this.newAssignment = '';
        }
    },
}