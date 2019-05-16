<template>
    <div class="about">
        <h1>This is an about page</h1>
        <p>{{ flode }}</p>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({})
    export default class Home extends Vue {
        flode: string = "";

        created() {
            const data = JSON.parse(sessionStorage.getItem('data') || '{}');
            this.flode = data.flode;
        }
    }
</script>
