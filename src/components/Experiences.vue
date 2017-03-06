<template>
    <div>
        <md-card-header>
            <md-icon class="md-primary">work</md-icon>
            <span class="md-title">{{title}}</span>
            <md-divider class="about-inset"></md-divider>
        </md-card-header>

        <md-card-content class="about-inset">
            <div v-for="exp in exps">
                <h3>
                    {{exp.position}}, 
                    <a v-if="exp.companyUrl" :href="exp.companyUrl" target="_blank">{{exp.workAt}}</a>
                    <span v-else>{{exp.workAt}}</span>
                </h3>
                <div class="exp-content">
                    <span>{{exp.duration}}</span>
                    <h4>{{exp.description}}</h4>
                    <ul>
                        <li v-for="item in exp.highlights">{{item}}</li>
                    </ul>
                </div>
            </div>
        </md-card-content>
    </div>
</template>
<script>
    export default {
        props:['exps'],
        data() {
            return {
                title:'Work Experience'
            }
        }
    }
</script>
<style lang="scss">
ul {
    list-style-type: circle;
    font-size: 1.1em;
    li {
        display: list-item;
        margin-left: 30px;
    }
}
.exp-content {
    margin-left: 20px;
}
</style>