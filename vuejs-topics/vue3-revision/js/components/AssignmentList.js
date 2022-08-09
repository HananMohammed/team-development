import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

export default {
  components: {
    assignment: Assignment,
    AssignmentTags: AssignmentTags,
    panel: Panel,
  },
  template: `
        <panel v-show="assignments.length" class="w-100 bg-gray-700 p-4 border border-gray-600 rounded-lg">
            <div class="flex justify-between items-start">
                <p class="font-bold mb-2">
                    {{title}}
                    <span>({{assignments.length}})</span>
                </p>
                <button v-show="canHide" @click="$emit('toggle')">&times;</button>
            </div>

            <assignment-tags 
            v-model="currentTag"
            :initialTags="assignments.map(a => a.tag)" ></assignment-tags>
             <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <assignment  v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment"></assignment>
            </ul>
            <slot></slot>
            <template #footer>
                footer goos here
            </template>
        </panel>

    `,
  props: {
    assignments: Array,
    title: String,
    canHide: { type: Boolean, default: false },
  },
  data() {
    return {
      currentTag: "all",
    };
  },
  computed: {
    filteredAssignments() {
      if (this.currentTag == "all") {
        return this.assignments;
      }
      return this.assignments.filter((a) => a.tag === this.currentTag);
    },
  },
};