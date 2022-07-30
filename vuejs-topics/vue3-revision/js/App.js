import Assignments from "./components/Assignments.js";
export default {
    name:'App',
    template: `
        <assignments />
    `,

    components: {
        'assignments': Assignments
    }
}