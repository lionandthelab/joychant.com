
<template>
<div>
    <img v-bind:src="require('../assets/fund.png')" />
  <div class="card card-body mt-4" id="forms">
    
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>이름</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>연락처</label>
        <input
          v-model="form.phone"
          class="form-control"
          type="phone"
          required
        />
      </div>

      <div class="form-group mt-4">
        <label>문의 내용</label>
        <input
          v-model="form.question"
          class="form-control"
          type="question"
          required
        />
      </div>
      <button type="submit" class="btn btn-success mt-3">
        Create User
      </button>
    </form>
  </div>
  </div>
</template>
<script>
import { createUser } from "@/firebase";
import { reactive } from "vue";
export default {
  setup() {
    const form = reactive({ name: "", phone: "", question : "" });
    const onSubmit = async () => {
      await createUser({ ...form });
      form.name = "";
      form.phone = "";
      form.question = "";
    };
    return { form, onSubmit };
  },
};
</script>
<style scoped>
  img{
    width: 70%;
    height: 70%;
    align-self: center;
  }
  #forms{
    width: 70%;
    height: 70%;
    align-self: center;
  }
</style>
