<template>
    <div>
        <md-list>
        <md-list-item v-for="s in skills">
            <div class="list-height">
                {{s.name}}
                <div class="skill-bar-wrap">
                    <div class="skill-bar" :style="{width:s.value +'%'}"></div>
                </div>
            </div>
        </md-list-item>
        </md-list>
    </div>
</template>


<script>
    export default {
        props:['skills'],
        computed:{
            cssskills(){}
        }
    }
</script>

<style lang="scss">
    .md-list-item-container  {
        .skill-bar-wrap {
            height: 15px;
            width: 100px;
            min-height: 2px;
            background: black;
            display: inline-block;
            border-radius: 25px;
            .skill-bar {
                height: 15px;
                background: #00796b;
                border-radius: 25px 0 0 25px;
            }
        }
    }
</style>