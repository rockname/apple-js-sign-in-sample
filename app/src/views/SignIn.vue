<template>
  <div class="signIn">
    <img alt="rockname icon" src="../assets/rockname.png" />
    <div id="appleid-signin" data-color="black" data-border="true" data-type="sign in"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SignIn extends Vue {
  created() {
    let appleSignInScript = document.createElement('script')
    appleSignInScript.setAttribute('src', 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js')
    document.head.appendChild(appleSignInScript)
  }
}
</script>

<style>
#appleid-signin {
  padding-top: 10px;
  width: 200px;
  margin: auto;
}
</style>
