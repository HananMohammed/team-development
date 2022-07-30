export default {
    name: 'Assignment',
    template: `
        <li class="p-3 flex justify-between">
            <label>
                {{assignment.name}} 
                <input type="checkbox" v-model="assignment.complete" class="ml-2">
            </label>
        </li>
    `,
    props: {
        assignment: Object
    }
}