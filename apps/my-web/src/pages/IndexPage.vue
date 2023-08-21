<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    />
    <task
      v-model="right"
      label="Test Checkbox"
      color="accent"
      @update:model-value="(val: boolean) => right = !right"
    />
    <Button
      class="my-button"
      label="Click Me"
      background-color="#fff"
      @click="notify"
    />
  </q-page>
</template>

<script setup lang="ts">
import { Todo, Meta } from 'components/models'
import ExampleComponent from 'components/ExampleComponent.vue'
import { ref } from 'vue'
import { Button, Task } from 'vue-ui'

const right = ref(false)

function notify () {
  alert('Clicked')
}

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1'
  },
  {
    id: 2,
    content: 'ct2'
  },
  {
    id: 3,
    content: 'ct3'
  },
  {
    id: 4,
    content: 'ct4'
  },
  {
    id: 5,
    content: 'ct5'
  }
])
const meta = ref<Meta>({
  totalCount: 1200
})
</script>

<style lang="scss">
.my-button {
  background-color: #9C27B0;
}
</style>
