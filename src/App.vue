<template>
  <div id="app">
      <div class="sidenav-fixed">
        <md-sidenav class="md-left md-fixed" ref="sidenav">
          <left-list :introduce="data.introduce" >
            <skill :skills="data.skills" />
          </left-list>
        </md-sidenav>
      </div>
      <div class="page-content">
        <div class="header">
          <md-whiteframe md-elevation="3">
            <md-toolbar>
              <md-button class="md-icon-button nav-show" @click.native="toggleSidenav">
                <md-icon>menu</md-icon>
              </md-button>
              <h1 class="md-title title">
                Max Ma Resume
              </h1>
            </md-toolbar>
          </md-whiteframe>
        </div>
        <div class="main-content">
          <md-card class="nav-margin">
            <md-card-header>
              <h2>Background</h2>
            </md-card-header>
            <about :about="data.introduce.about" />
            <experiences :exps="data.experiences" />
            <educations :edu="data.educations" />
            <projects :pro="data.projects" />
          </md-card>
        </div>
      </div>
  </div>
</template>

<script>
import LeftList from './components/LeftList';
import Skill from './components/Skill';
import About from './components/About';
import Experiences from './components/Experiences';
import Educations from './components/Educations';
import Projects from './components/Projects';
import Data from './data';

export default {
  components: {
    LeftList,
    Skill,
    About,
    Experiences,
    Educations,
    Projects
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
    -moz-box-sizing: inherit;
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
}

h1, h2, h3 {
  font-weight: normal;
}

ul {
  padding: 0;
}

.page-content {
    min-height: 100%;
    .header {
      position: fixed;
      width: 100%;
      z-index: 3;
    }
    .main-content {
      padding-right: 8px;
      padding-bottom: 8px;
      padding-top: 64px;
      margin-top: 0px;
      z-index: 0;
      height: 100vh;
      overflow: auto;
  }
}
.sidenav-fixed {
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
}

.md-sidenav.md-left .md-sidenav-content {
  margin-top: 64px;
}
.nav-show {
    display: block;
}
.nav-margin {
  margin-top: 5px;
  margin-left: 5px;
}

@media (min-width:  992px) {
  .md-sidenav.md-left .md-sidenav-content {
    top: 0;
    pointer-events: auto;
    box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
    transform: translate3D(0,0,0);
  }
  .main-content {
    margin-left: 310px;
  }
  .nav-show {
    display: none;
  }
}
</style>
