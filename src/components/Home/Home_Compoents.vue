<script lang="ts">
import {useCounterStore} from '../../stores/counter';
import {configStore} from '../../stores/config';
import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs';
export default {
  components: { Box, Camera, LambertMaterial, PointLight, Renderer, Scene },
  // data(){
  //   return {
  //     inputValue:this.$refs.value
  //   }
  // },
  mounted(){
   
  }
};
</script>

<template>
  <Renderer ref="renderer" >
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <LambertMaterial />
      </Box>
    </Scene>
  </Renderer>
</template>