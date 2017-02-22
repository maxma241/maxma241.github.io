<template>
    <div>
        <md-list>
        <md-list-item v-for="(s,i) in skills">
            <div class="list-height">
                {{s.name}}
                <div class="skill-bar-wrap">
                    <div class="skill-bar" :style="{width:`${s.value}%`, background: `rgb(${100-s.value+15}%, ${s.value+10}%, 0%)`}"></div>
                </div>
            </div>
        </md-list-item>
        </md-list>
    </div>
</template>


<script>
    export default {
        props:['skills'],
        methods:{
            // cssskills(i){
            //     let bar = "skill-bar";
            //     return bar;
            //     let sValue = this.skills[i].value;
            //     if (sValue >= 80) {
            //         return bar + " skill-bar-80";
            //     } else if (sValue >= 60) {
            //         return bar + " skill-bar-60";
            //     } else if (sValue >= 40) {
            //         return bar + " skill-bar-40";
            //     }
            //     return bar + " skill-bar-20";
            // }
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
                border-radius: 25px 0 0 25px;
            }
        }
    }
</style>