import Assignment from "./Assignment.js";
export default {
    components:{
        'assignment':Assignment
    },
    template: `
        <section v-show="assignments.length">
            <p class="font-bold mb-2">{{title}}</p>
            <ul>
                <assignment  v-for="assignment in assignments" :key="assignment.id" :assignment="assignment"></assignment>
            </ul>
        </section>

    `,
    props: {
        assignments:Array,
        title: String
    },


}