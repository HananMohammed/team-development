import Assignments from "./components/Assignments.js";
import Panel from "./components/Panel.js";
export default {
  name: "App",
  components: {
    assignments: Assignments,
    panel: Panel,
  },
  template: `
        <div class="grid gap-6">
            <assignments />
            <panel theme="light">
                <template v-slot:heading>here heading</template>
                <template v-slot:default>here default</template>
                <template v-slot:footer>here footer</template>

            </panel>
        </div>

    `,
};