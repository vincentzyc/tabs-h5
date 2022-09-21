import WidgetItems from "@/components/widget-items/index";
import './css/style.styl'

export default {
  name: "CustomPopup",
  components: {
    WidgetItems
  },
  props: {
    list: Array,
    parentItem: Object,
    popupStyle: Object,
    lazyRender: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      showPopup: false
    }
  },
  methods: {
    open() {
      this.BUS.setOpenedCustomPopup(this)
      this.showPopup = true;
    },
    close(handleClose = false) {
      this.BUS.setOpenedCustomPopup(false)
      this.showPopup = false;
      this.$emit('close', handleClose)
    },
    clickOverlay() {
      this.$emit('clickOverlay')
    }
  },
  render() {
    const { list, parentItem } = this
    if (!Array.isArray(list)) return null
    const listNode = list.length > 0
      ? list.map(item => <WidgetItems ref="wgList" item={item} key={item.key} parentItem={parentItem} />)
      : []
    return (
      <van-popup lazyRender={this.lazyRender} vModel={this.showPopup} class="custom-popup" style={{ backgroundColor: this.popupStyle?.backgroundColor, maxWidth: "576px", overflowY: "initial" }} onClick-overlay={() => this.clickOverlay()}>
        <svg class="close-icon" viewBox="0 0 1024 1024" onClick={() => this.close(true)}><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-981.333333a469.333333 469.333333 0 1 0 469.333333 469.333333A469.333333 469.333333 0 0 0 512 42.666667z m207.402667 676.437333a20.224 20.224 0 0 1-28.629334 0l-178.944-178.944-178.944 178.944a20.245333 20.245333 0 1 1-28.629333-28.629333l178.944-178.944-178.645333-178.645334a20.245333 20.245333 0 0 1 28.629333-28.629333l178.645333 178.645333 178.645334-178.645333a20.245333 20.245333 0 1 1 28.629333 28.629333l-178.645333 178.645334 178.944 178.944a20.224 20.224 0 0 1 0 28.629333z" fill="#ffffff"></path></svg>
        <div class="popup-wrap" style={{ padding: this.$util.changeRem(this.popupStyle?.padding) }}>
          {this.$slots.header}
          {...listNode}
          {this.$slots.footer}
        </div>
      </van-popup>
    )
  }
}