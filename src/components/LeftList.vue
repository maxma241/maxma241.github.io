<template>
  <div>
        <div>
        <md-list>
<!--personal-->
            <md-list-item>
                <md-avatar class="md-large">
                    <img src="http://i.imgur.com/lAA9UVJ.png" alt="People">
                </md-avatar>
                <md-icon class="md-primary md-size-1x">people</md-icon>
                <span>{{introduce.cname}}({{introduce.ename}})</span>
                
            </md-list-item>
            <md-divider class="md-inset"></md-divider>

            <md-list-item>
                <md-icon class="md-primary">email</md-icon> <span>{{introduce.email}}</span>
            </md-list-item>

            <md-list-item>
            <md-icon>
                <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" alt="github">
            </md-icon>
                <span>
                    <a :href="introduce.github" target="_blank">github.com/maxma241</a>
                </span>
            </md-list-item>

            <md-list-item>
            <md-icon class="md-primary">location_city</md-icon> <span>{{introduce.livedIn}}</span>
            </md-list-item>

            <md-list-item>
            <md-icon class="md-primary">phone</md-icon> <span>{{introduce.phone}}</span>

            <md-divider class="md-inset"></md-divider>
            </md-list-item>

<!--skill-->
            <slot></slot>
        </md-list>
        
        </div>
  </div>
</template>
<script>

    export default {
       props:['introduce']
    }
</script>

<style lang="scss">
    .list-width {
            display: flex;
            justify-content: flex-end;
        }
</style>