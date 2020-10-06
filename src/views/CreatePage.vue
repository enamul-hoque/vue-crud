<template>
    <div class="create-page">
        <div class="title">
          <h2>Update Entry</h2>
        </div>

        <InsertForm />
    </div>
</template>

<script>
import InsertForm from "@/components/InsertForm";

export default {
    name: 'CreatePage',
    components: {
        InsertForm
    }
}
</script>
