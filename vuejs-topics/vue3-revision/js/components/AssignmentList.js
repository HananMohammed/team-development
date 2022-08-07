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
                <button 
                v-for="tag in tags" 
                @click="currentTag = tag"
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-blue-500 text-blue-500': tag === currentTag
                }"
                >{{tag}}</button>
            </div>
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <assignment  v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment"></assignment>
            </ul>
        </section>

    `,
    props: {
        assignments: Array,
        title: String
    },
    data(){
        return{
            currentTag:'all'
        }
    },
    computed: {
        filteredAssignments(){
            if (this.currentTag == 'all'){
                return this.assignments
            }
            return this.assignments.filter(a => a.tag === this.currentTag)
        },
        tags() {
            //All the elements of a Set must be unique
            return ['all', ...new Set(this.assignments.map(a => a.tag))]
        }
    }

}