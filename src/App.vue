<template>
  <div id="app">
    <!--<div class="col-md-3">
      <md-sidenav>
      <md-whiteframe md-elevation="6">
        <left-list :introduce="data.introduce" >
          <skill :skills="data.skills" />
        </left-list>
      </md-whiteframe>
      </md-sidenav>
    </div>
    <div class="col-md-9">
      <md-card>
        <md-card-header>
          <h2>BackGround</h2>
        </md-card-header>
        <about :about="data.introduce.about" />
      </md-card>
    </div> -->
      <div>
        <md-toolbar>
          <md-button class="md-icon-button nav-show" @click.native="toggleSidenav">
            <md-icon>menu</md-icon>
          </md-button>
          <h1 class="md-title title">
            Max Ma Resume
          </h1>
        </md-toolbar>

        <md-sidenav class="md-left" ref="sidenav">
          <left-list :introduce="data.introduce" >
            <skill :skills="data.skills" />
          </left-list>
        </md-sidenav>
     
        <md-card class="nav-margin">
          <md-card-header>
            <h3>BackGround</h3>
          </md-card-header>
          <about :about="data.introduce.about" />
          <experiences :exps="data.experiences"/>
          <educations :edu="data.educations"/>
        </md-card>
      </div>
  </div>
</template>

<script>
import LeftList from './components/LeftList';
import Skill from './components/Skill';
import About from './components/About';
import Experiences from './components/Experiences';
import Educations from './components/Educations';
import Data from './data';

export default {
  components: {
    LeftList,
    Skill,
    About,
    Experiences,
    Educations
  },
  name: 'app',
  data () {
    return {
      data:Data
    }
  },
  methods:{
    toggleSidenav() {
      this.$refs.sidenav.toggle();
    }
  }
}
</script>

<style lang="scss">
 @import '../node_modules/vue-material/dist/vue-material.css';
* {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1, h2, h3 {
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

.page-content {
    min-height: 100%;
    max-height: 100%;
    flex: 1;
    display: flex;
    flex-flow: column;
}

.md-list-item .md-list-item-container {
    min-height: 38px;
    justify-content: flex-end;
}

.head-layout {
  width: 350px;
}

.md-sidenav.md-left .md-sidenav-content {
    margin-top: 64px;
}
.nav-show {
    display: block;
}
.nav-margin {
  margin: 5px 10px;
}

@media (min-width:  992px) {
  .md-sidenav.md-left .md-sidenav-content {
    top: 0;
    pointer-events: auto;
    transform: translate3D(0,0,0);
  }
  .nav-margin {
    margin-left: 310px;
  }
  .nav-show {
    display: none;
  }
}
</style>
