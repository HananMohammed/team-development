import Assignment from "./Assignment.js";

export default {
    components: {
        'assignment': Assignment
    },
    template: `
        <section v-show="assignments.length">
            <p class="font-bold mb-2">
                {{title}}
                <span>({{assignments.length}})</span>
            </p>
            <div class="flex gap-2">
                <button v-for="tag in tags" class="border rounded px-1 py-px text-xs">{{tag}}</button>
            </div>
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <assignment  v-for="assignment in assignments" :key="assignment.id" :assignment="assignment"></assignment>
            </ul>
        </section>

    `,
    props: {
        assignments: Array,
        title: String
    },
    computed: {
        tags() {
            return ['science', 'Math']
        }
    }

}