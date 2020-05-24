import {debounce} from "./utils";

export const itemListenerMixin= {
  data() {
    return {
      itemListenerMixin: null
    }
  },
  mounted() {
    const refresh=debounce(this.$refs.scroll.refresh,500)
    this.itemListener= () => {
      refresh()
    }
    this.$bus.$on('goodsImgLoad',this.itemListener)
  }
}
