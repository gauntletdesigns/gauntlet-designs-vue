<template>
  <div>
    <label id="input-calendar" label="Date " label-for="input-calendar">
      <b-form-datepicker
        :min="min"
        id="input-calendar"
        v-model="form.calendar"
        placeholder="Calendar"
      />
    </label>
  </div>
</template>
<script>
export default {
  name: "Calendar",
  props: {
    form: {},
  },

  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const minDate = new Date(today);
    return {
      value: "",
      min: minDate,
    };
  },
};
</script>

<style scoped lang="scss"></style>
