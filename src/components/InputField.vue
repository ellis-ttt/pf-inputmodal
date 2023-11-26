<script setup lang="ts">
    defineProps<{
        label: string
        type?: 'date'
        required?: boolean
        minlength?: number
        maxlength?: number
        size?: number
    }>()
</script>

<template>
    <div class="content">
        <label :for="label">
            {{ `${required ? `*` : ``} ${label}` }}
        </label>
        <input
            :type="type || 'text'"
            :id="label"
            :name="label"
            :required="required || undefined"
            :minlength="minlength ?? 0"
            :maxlength="maxlength ?? 10"
            :size="size ?? 15"
        />
    </div>
</template>

<style scoped>
    .content {
        display: flex;
        flex-flow: row nowrap;
        justify-content: right;
    }
    input {
        margin: 1vh;
    }
</style>
