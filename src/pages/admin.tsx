import { defineComponent } from "vue";
import { AdminLayout } from "../components/layouts/admin";
export default defineComponent({
  setup() {
    return () => (
      <div>
        <AdminLayout />
      </div>
    );
  },
});
