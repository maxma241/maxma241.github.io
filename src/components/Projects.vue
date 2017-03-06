<template>
    <div>
        <md-card-header>
            <md-icon class="md-primary">build</md-icon>
            <span class="md-title">{{title}}</span>
            <md-divider class="about-inset"></md-divider>
        </md-card-header>

        <md-card-content class="about-inset">
            <div v-for="(item, index) in pro">
                <h3>
                    <span>{{index+1}}. {{item.title}}</span>
                    <a v-if="item.url" :href="item.url" target="_blank">URL</a>
                    <a v-if="item.repository" :href="item.repository" target="_blank">GitHub</a>
                    <span class="meta">[{{item.meta.join(', ')}}]</span>
                </h3>
                <div class="pro-content">
                    <h4>{{item.description}}</h4>
                </div>
            </div>
        </md-card-content>
    </div>
</template>
<script>
    export default {
        props:['pro'],
        data() {
            return {
                title:'Projects'
            }
        }
    }
</script>
<style lang="scss">
.pro-content {
    margin-left: 20px;
}
.meta {
    font-size: 0.8em;
}
</style>