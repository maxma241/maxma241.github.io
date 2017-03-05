<template>
    <div>
        <md-list>
        <md-subheader>技能</md-subheader>
        <md-list-item v-for="(s,i) in sks">
            <div class="skill-list" >
                <span class="span-margin">{{s.name}}</span>
                <div class="skill-bar-wrap">
                    <div class="skill-bar" :style="{width:`${s.width}%`, backgroundColor: `rgb(${255-s.value+55}, ${s.value}, 0)`}"></div>
                </div>
            </div>
        </md-list-item>
        </md-list>
    </div>
</template>


<script>
    export default {
        props:['skills'],
        data(){
          return {
              sks:[]
          }  
        },
        methods:{
           
        },
        mounted(){
           this.sks = this.skills.map(s=>({name:s.name, value:Math.floor((s.value/100)*255), width:s.value}) );
           console.log(this.sks);
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
    .span-margin {
        margin-left: 10px;
        margin-right: 10px;
    }
</style>