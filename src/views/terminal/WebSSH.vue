<template>
  <div class="xterm-container">
    <my-terminal :terminal="terminal"/>
  </div>
</template>

<script>
import Console from './Console'

export default {
  name: 'WebSSH',
  components: {
    'my-terminal': Console
  },
  data() {
    return {
      terminal: {
        pid: 1,
        name: 'terminal',
        cols: 400,
        rows: 400
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
  .xterm-container{
    margin:10px;
    width: 50%;
    height: auto;
  }
</style>
