<template>
  <div id="app">
    <!--<md-layout md-gutter>
       <md-layout md-flex md-flex-medium="33" md-hide-small>
    md-flex-medium="33" <br>
    md-hide-small
  </md-layout>
      <md-layout md-column md-gutter>
        <md-layout md-flex="20"> <List :introduce="Data.introduce"></List></md-layout>
      </md-layout>

      <md-layout md-column md-gutter>
        <md-layout md-flex="600"><div style="background-color: black;">23123</div></md-layout>
      </md-layout>
    </md-layout>-->
    <!--<md-layout md-gutter>
      <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="20">
        <List :introduce="Data.introduce"></List>
        <div style="background-color: sandybrown;  width: 100%;">123</div>
      </md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="20">
        <div style="background-color: blue; height: 800px; width: 100%;">123</div>
      </md-layout>
       <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="20">
        <div style="background-color: red; height: 800px; width: 100%;">123</div>
      </md-layout>

      <md-layout md-flex md-flex-medium="20" >
        <div style="background-color: black; height: 800px; width: 100%;">123</div>
      </md-layout>
    </md-layout>-->

    <md-layout md-gutter>
      <md-layout>
        <md-whiteframe md-elevation="6">
          <List :introduce="Data.introduce" >
            <Skill :skills="Data.skills"></Skill>
          </List>
        </md-whiteframe>
      </md-layout>
      
    </md-layout>
  </div>
</template>

<script>
import List from './components/List.vue';
import Skill from './components/Skill.vue';
import Data from './data';

export default {
  components: {
    List,
    Skill
  },
  name: 'app',
  data () {
    return {
      Data
    }
  }
}
</script>

<style lang="scss">
 @import '../node_modules/vue-material/dist/vue-material.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.md-list-item .md-list-item-container {
    min-height: 38px;
    justify-content: flex-end;
}
</style>
