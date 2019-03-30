<template>
  <div class="home">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swipeitemlist" :key="item.url"><img :src="item.image" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Axios from 'axios';
import { Toast } from 'mint-ui'

@Component({
  components: {
    
  },
})
export default class Home extends Vue {
  swipeitemlist = []
  created() {
    this.getLunbotu()
  }
  getLunbotu() {
    Axios.get('https://news-at.zhihu.com/api/4/news/latest')
    .then(response => {
      if (response.status === 200) {
        this.swipeitemlist = response.data.top_stories
        console.log('yes')
      } else {
        Toast('轮播图加载失败')
        console.log('no')
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
}

.mint-swipe-item {
  &:nth-child(1) {
    background: red;
  }
  &:nth-child(2) {
    background: blue;
  }
  &:nth-child(3) {
    background: yellowgreen
  }
}
</style>
