<template>
  <div id="terminal" class="console" />
</template>
<script>
import Terminal from './Xterm'
import 'xterm/dist/xterm.css'
export default {
  name: 'Console',
  props: {
    terminal: {
      type: Object,
      default: function() {

      }
    }
  },
  data() {
    return {
      term: null,
      terminalSocket: null
    }
  },
  mounted() {
    console.log('pid : ' + this.terminal.pid + ' is on ready')
    const terminalContainer = document.getElementById('terminal')
    this.term = new Terminal()
    this.term.open(terminalContainer)
    // open websocket
    this.terminalSocket = new WebSocket('ws://127.0.0.1:3000/terminals/')
    this.terminalSocket.onopen = this.runRealTerminal
    this.terminalSocket.onclose = this.closeRealTerminal
    this.terminalSocket.onerror = this.errorRealTerminal
    this.term.attach(this.terminalSocket)
    this.term._initialized = true
    console.log('mounted is going on')
  },
  beforeDestroy() {
    this.terminalSocket.close()
    this.term.destroy()
  },
  methods: {
    runRealTerminal() {
      console.log('webSocket is finished')
    },
    errorRealTerminal() {
      console.log('error')
    },
    closeRealTerminal() {
      console.log('close')
    }
  }
}
</script>
