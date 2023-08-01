<script setup lang="ts">
// Typed props with default values
interface Props {
  type?: 'normal' | 'warning' | 'danger'; // Optional
  display: 'block' | 'inlined'; // Required
}

const props = withDefaults(defineProps<Props>(), {
  type: 'normal',
  display: 'block',
});
</script>
