<script>
import Assignments from "./components/Assignments";
export default {
  name:'App',
  template: `
        <assignments />
    `,

  components: {
    'assignments': Assignments
  }
}
</script>