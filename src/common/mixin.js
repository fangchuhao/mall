import {debounce} from "./utils";
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin= {
  data() {
    return {
      itemListenerMixin: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh=debounce(this.$refs.scroll.refresh,500)
    this.itemListener= () => {
      this.newRefresh()
    }
    this.$bus.$on('goodsImgLoad',this.itemListener)
  }
}

export const backToTop= {
  data() {
    return {
      contentY: 0
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0,0)
    }
  },
  computed: {
    isShowBackTop() {
      return this.contentY > 700
    }
  }
}
