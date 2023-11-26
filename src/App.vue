<script setup lang="ts">
    import InputField from './components/InputField.vue'
</script>

<template>
    <div class="input-fields">
        <InputField label="Имя" :required="true" />
        <InputField label="Фамилия" :required="true" />
        <InputField label="Отчество" />
        <InputField label="Дата рождения" :type="'date'" :required="true" />
    </div>
</template>

<style scoped>
    .input-fields {
        display: flex;
        flex-flow: column nowrap;
    }
</style>
