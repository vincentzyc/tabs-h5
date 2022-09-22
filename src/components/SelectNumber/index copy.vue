<template>
  <div :style="$util.formatStyle(item.style)" class="wg-select-number-city3 clearfix" :ref="item.key">
    <div class="select-wrapper" :style="$util.formatStyle(item.tagStyle)">
      <CityPicker
        ref="belongPicker"
        :item="item"
        :scData="Data"
        @hadInitRegion="hadInitRegion"
        @handleClose="closeCityPicker"
        :pickerStyle="pickerStyle"
        :vanPickerConfig="vanPickerConfig"
        :belongCityList="belongCityList"
        :style="{ ...(item.hideRegion ? { display: 'none !important' } : {}), ...$util.formatStyle(item.label) }"
      />

      <div
        class="relative flex input-search-wrap"
        :style="{ borderColor: (item.search && item.search.borderColor) || '#fddc93' }"
      >
        <svg class="search-icon" viewBox="0 0 1024 1024">
          <path
            d="M910.933333 881.066667l-186.026666-186.026667a339.626667 339.626667 0 0 0 85.333333-225.28c0-188.586667-152.746667-341.333333-341.333333-341.333333s-341.333333 152.746667-341.333334 341.333333 152.746667 341.333333 341.333334 341.333333c86.613333 0 165.546667-32.426667 225.706666-85.76l186.026667 186.026667 30.293333-30.293333zM170.24 469.76c0-164.693333 133.973333-298.666667 298.666667-298.666667s298.666667 133.973333 298.666666 298.666667-133.973333 298.666667-298.666666 298.666667-298.666667-134.4-298.666667-298.666667z"
            fill="#bfbfbf"
          />
        </svg>
        <input
          :placeholder="item.placeholder"
          @input="inputNumber"
          class="input-search flex-auto"
          maxlength="8"
          ref="searchInput"
          type="text"
        />
        <div
          :class="{ disabled: disabled }"
          @click="searchNumber(keyWord)"
          class="search-button flex-none fs14"
          :style="$util.formatStyle(item.search)"
          >搜索</div
        >
      </div>

      <div class="flex hot-wrap" v-if="!item.hideHotSearch">
        <span :style="$util.formatStyle(item.hotText)" class="flex-none hot-search">{{
          item.hotText ? item.hotText.text : "热搜："
        }}</span>
        <div class="flex flex-wrap">
          <span
            :key="tag + index"
            :style="$util.formatStyle(item.hotStyle)"
            @click="hotSearch(tag)"
            class="hot-tag"
            v-for="(tag, index) in item.hotSearch"
            >{{ tag }}</span
          >
        </div>
      </div>

      <div class="number-rule" v-if="!item.hideRule">
        <ul class="flex flex-wrap space-between">
          <li
            :key="ruleItem.value + key"
            :style="{
              ...getRuleStyle(ruleItem),
              ...getRuleWidth,
            }"
            @click="handleSelectRule(ruleItem.value)"
            class="rule-item"
            v-for="(ruleItem, key) in ruleItems"
            >{{ ruleItem.label }}</li
          >
          <li :style="getRuleWidth" v-for="column in item.ruleColumn || 6" :key="column"></li>
        </ul>
      </div>
      <div class="nocity-num" v-show="showNoCityTip">
        您所在的城市暂无号码，为您推荐省内优质号码
      </div>
    </div>
    <div class="phone-list" v-if="phoneList.length > 0">
      <ul class="flex flex-wrap space-between">
        <li :key="phone + key" @click="lockNumber(phone, key)" class="phone-item" v-for="(phone, key) in phoneList">
          <div
            :style="phoneItemStyle(phone.num)"
            class="flex flex-center flex-column phone-number"
            :class="{ 'small-phone-number': item.hidePrice && item.hideSaleWord }"
          >
            <p :style="item.numStyle.numColor ? { color: item.numStyle.numColor } : {}">
              <strong :key="key" :style="getHighlight(num.highlight)" v-for="(num, key) in phone.item">{{
                num.numChar
              }}</strong>
            </p>
            <div class="flex align-middle space-around phone-info">
              <del
                :style="item.numStyle.priceColor ? { color: item.numStyle.priceColor } : {}"
                class="phone-price"
                v-if="!item.hidePrice"
              >
                {{ getShowMoney(phone.showMoney) }}
              </del>
              <p
                :style="item.numStyle.textColor ? { color: item.numStyle.textColor } : {}"
                class="phone-text"
                v-if="!item.hideSaleWord"
              >
                {{ item.saleWord || phone.showMsg }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <p class="empty-tip" v-else v-html="item.emptyTip"></p>
    <div class="change-button-wrap" v-show="showPNBtn">
      <div class="flex flex-center">
        <van-button
          :disabled="preDisabled"
          :style="$util.formatStyle(item.nextBtn)"
          @click="getPrePage()"
          class="change-button"
          icon="arrow-left"
          round
          type="primary"
          >上一页</van-button
        >
        <van-button
          :loading="nextLoading"
          :style="$util.formatStyle(item.nextBtn)"
          @click="getNextPage()"
          class="change-button"
          icon="arrow"
          icon-position="right"
          loading-text="下一页"
          round
          type="primary"
          >下一页</van-button
        >
      </div>
    </div>

    <CustomPopup :list="item.popupList" ref="selectNumCustomPopup">
      <div class="popup-wrapper" slot="header">
        <span>已选择</span>
        <span class="popup-title">靓号 {{ item.value }}</span>
        <span v-if="!item.hideRegion">{{ pickCity.join(" ") }}</span>
      </div>
    </CustomPopup>
    <van-popup
      style="
        width: 80%;
        max-width: 576px;
        overflow-y: initial;
        background-color: transparent;
      "
      v-if="item.autoDialogStyle"
      v-model="autoDialog"
    >
      <svg @click="closeAutoDialog()" class="close-icon" viewBox="0 0 1024 1024">
        <path
          d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-981.333333a469.333333 469.333333 0 1 0 469.333333 469.333333A469.333333 469.333333 0 0 0 512 42.666667z m207.402667 676.437333a20.224 20.224 0 0 1-28.629334 0l-178.944-178.944-178.944 178.944a20.245333 20.245333 0 1 1-28.629333-28.629333l178.944-178.944-178.645333-178.645334a20.245333 20.245333 0 0 1 28.629333-28.629333l178.645333 178.645333 178.645334-178.645333a20.245333 20.245333 0 1 1 28.629333 28.629333l-178.645333 178.645334 178.944 178.944a20.224 20.224 0 0 1 0 28.629333z"
          fill="#ffffff"
        />
      </svg>
      <div @click="selectDialogNum()">
        <img :src="item.autoDialogStyle.img" alt style="width: 100%" />
        <p
          :style="
            item.numStyle.numColor
              ? $util.formatStyle({
                  color: item.numStyle.numColor,
                  ...item.autoDialogStyle,
                })
              : $util.formatStyle(item.autoDialogStyle)
          "
          style="position: absolute; left: 50%; transform: translateX(-50%)"
          v-if="firstPhone"
        >
          <span :key="key" :style="getHighlight(num.highlight)" v-for="(num, key) in firstPhone.item">{{
            num.numChar
          }}</span>
        </p>
      </div>
    </van-popup>
  </div>
</template>

<script>
import axios from "axios";
import { Button } from "vant";
import "./css/index.styl";
import { CHOUJIN } from "@/assets/js/industries";
import CityPicker from "@/components/belong-city-picker";
import CustomPopup from "../wg-popup";
import { SelectNumberCity, SelectNumberCity3, SelectNumberCity5, ImgCity } from "@/assets/js/widgets";
import { onSelectNumberCity3 } from "@/emiton";
import { pageHasWidget } from "@/store";

const defaultNumSize = 8;
let CancelRequest,
  startTime = 0,
  endTime = 0;

export default {
  components: {
    "van-button": Button,
    CityPicker: CityPicker,
    CustomPopup: CustomPopup,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  inject: {
    isTabWg: { default: false },
  },
  data() {
    return {
      allNums: [],
      wgRef: null,
      timer: 0,
      pickerTimer: 0,
      rulesCount: 0,
      numIndex: 0,
      numSize: 8,
      nextLoading: false,
      autoDialog: false,
      firstPhone: null,
      pickCity: [],
      selectRule: "全部",
      keyWord: "",
      disabled: false,
      phoneList: [],
      Data: {},
      showPNBtn: true,
      showNoCityTip: false,
      pickerStyle: {
        locationColor: "#999999",
      },
      vanPickerConfig: {
        itemHeight: "38",
        showToolbar: true,
        swipeDuration: "500",
        visibleItemCount: "13",
      },
      belongCityList: [],
      wgSelectNumberCity: null,
      wgSelectNumberCity5: null,
      wgImgCity: null,
    };
  },
  computed: {
    preDisabled() {
      return this.numIndex <= 0;
    },
    ruleItems() {
      if (typeof this.item.ruleItems[0] === "string") {
        return [
          ...this.item.ruleItems.map(v => ({
            label: v,
            value: v,
          })),
        ];
      }
      return this.item.ruleItems;
    },
    rulesLength() {
      return this.item.ruleItems.length;
    },
    isChoujin() {
      return this.BUS.pageData.template.includes(CHOUJIN);
    },
    getRuleWidth() {
      let ruleWidth = "24%";
      if (this.item.ruleColumn) {
        if (this.item.ruleColumn !== 1) {
          ruleWidth = 100 / this.item.ruleColumn - 1 + "%";
        } else {
          ruleWidth = "100%";
        }
      }
      return { width: ruleWidth };
    },
  },
  methods: {
    getShowMoney(txt) {
      if (this.item.salePrice) return this.item.salePrice;
      if (typeof txt !== "string" || txt === "") return "";
      if (txt.includes("元")) return txt;
      return txt + "元";
    },
    getRuleStyle(ruleItem) {
      if (this.selectRule === ruleItem.value) {
        return this.$util.formatStyle({
          ...this.item.ruleStyle,
          backgroundColor: this.item.ruleStyle.selectBgColor,
          color: this.item.ruleStyle.selectColor,
        });
      } else {
        return this.$util.formatStyle(this.item.ruleStyle);
      }
    },
    getPrePage() {
      this.numIndex--;
      this.setPhoneList();
      this.$api.reportMatomo("上一页");
    },
    getNextPage() {
      this.numIndex++;
      this.setPhoneList();
      this.$api.reportMatomo("下一页");
    },
    setNextLoading(flag) {
      this.nextLoading = flag;
    },
    setPhoneList() {
      if (this.allNums.length === 0) {
        this.showPNBtn = false;
        return (this.phoneList = []);
      } else {
        this.showPNBtn = true;
      }
      const startIndex = this.numIndex * this.numSize;
      const endIndex = this.numIndex * this.numSize + this.numSize;
      const pagePhoneList = this.allNums.slice(startIndex, endIndex);
      if (Array.isArray(pagePhoneList) && pagePhoneList.length === 0) {
        this.setNextLoading(true);
        return this.changeNumber(true);
      }
      this.phoneList = pagePhoneList.filter(v => !v.isLock);
    },
    initAllNum(resNum) {
      this.allNums = Array.isArray(resNum) ? resNum : [];
      this.numIndex = 0;
      this.setPhoneList();
    },
    hotSearch(tag) {
      this.$refs.searchInput.value = tag;
      this.keyWord = tag;
      this.searchNumber();
    },
    closeAutoDialog() {
      this.autoDialog = false;
    },
    selectDialogNum() {
      this.closeAutoDialog();
      if (this.firstPhone) this.handleSelectNum(this.firstPhone);
    },
    showAutoDialog(phone) {
      if (!this.item.autoDialog) return;
      this.firstPhone = phone;
      this.autoDialog = true;
    },
    phoneItemStyle(phoneNum) {
      const backgroundStyle = {};
      if (this.item.numStyle.backgroundimage) {
        backgroundStyle.backgroundImage = `url(${this.item.numStyle.backgroundimage})`;
        backgroundStyle.backgroundColor = "transparent";
      } else {
        backgroundStyle.backgroundColor = this.item.numStyle.backgroundColor;
      }
      if (phoneNum === this.item.value)
        return {
          borderColor: this.item.numStyle.selectColor,
          boxShadow: "inset 0 0 10px " + this.item.numStyle.selectColor,
          ...backgroundStyle,
        };
      return backgroundStyle;
    },
    showLoading() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$util.openLoading("号码获取中...");
      }, 300);
    },
    emitBelongCityChange(pickCity) {
      onSelectNumberCity3.emit.belongCityChange(pickCity);
    },
    hadInitRegion(pickCity) {
      if (Object.keys(this.Data).length === 0) return;
      this.showLoading();
      if (pickCity) {
        this.pickCity = pickCity;
        this.emitBelongCityChange(pickCity);
      }
      this.selectRule = this.ruleItems[0].value;
      this.getHandleNoItem("", false, "首屏进入")
        .then(res => {
          if (!Array.isArray(res)) return;
          this.initAllNum(res);
          if (res.length > 0) {
            if (this.item.defaultNum) this.defaultSelect(res[0]);
            this.showAutoDialog(res[0]);
          } else {
            this.selectRule = this.ruleItems[1].value;
            this.rulesCount++;
            this.changeNumber(false, "切换标签");
          }
        })
        .finally(() => {
          clearTimeout(this.timer);
          this.$util.closeLoading();
        });
    },
    closeCityPicker(pickCity) {
      this.showLoading();
      this.pickCity = pickCity;
      this.emitBelongCityChange(pickCity);
      if (this.$refs.searchInput) {
        this.$refs.searchInput.value = "";
        this.keyWord = "";
      }
      this.selectRule = this.ruleItems[0].value;
      this.getHandleNoItem("", false, "切换归属地")
        .then(res => {
          if (!Array.isArray(res)) return;
          this.initAllNum(res);
          if (res.length > 0 && this.item.defaultNum) {
            this.defaultSelect(res[0]);
          } else {
            this.defaultSelect({ item: [], num: "" });
          }
        })
        .finally(() => {
          clearTimeout(this.timer);
          this.$util.closeLoading();
        });
    },
    handleSelectRule(rule, isAuto = false) {
      if (!isAuto && this.$util.isLink(rule))
        return (window.location.href = this.$util.getOldPid(rule, {
          noParam: this.BUS.pageData.openLinkNoParam,
        }));
      if (this.$refs.searchInput) {
        this.$refs.searchInput.value = "";
        this.keyWord = "";
      }
      this.selectRule = rule;
      this.changeNumber(false, "切换标签");
      if (!isAuto) this.$api.reportMatomo("归属地选号3-选择规则", rule);
    },
    reportGetNumTime(type, actionName, resLength) {
      switch (type) {
        case "startTime":
          startTime = Date.now();
          break;
        case "endTime":
          endTime = Date.now();
          break;
        default:
          break;
      }
      if (type === "report") {
        const durTime = endTime - startTime;
        if (durTime > 0) {
          const reportTitle = `联通3.0选号组件-${actionName}-号码加载时长-标签-个数-铺满`;
          const reportText = `${durTime}ms-${this.selectRule}-${resLength}个-${
            resLength > this.numSize ? "是" : "否"
          }`;
          this.$api.reportMatomo(reportTitle, reportText);
          startTime = 0;
          endTime = 0;
        }
      }
    },
    async getHandleNoItem(keyWord = "", showTip = false, actionName = "") {
      if (!this.Data.productCode) return [];
      let param = {
        pid: this.Data.pid,
        searchNum: keyWord,
        productCode: this.Data.productCode,
        sysOrderId: this.Data.pageId,
        prettyType: this.selectRule,
      };
      if (Array.isArray(this.pickCity) && this.pickCity.length > 1) {
        param.province = this.pickCity[0];
        param.city = this.pickCity[1];
      }
      this.showNoCityTip = false;
      const CancelToken = axios.CancelToken;
      if (CancelRequest) CancelRequest("取消请求");
      this.reportGetNumTime("startTime");
      try {
        let res = await this.$api.Choujin.getPrettyMixItem(param, {
          cancelToken: new CancelToken(function executor(c) {
            CancelRequest = c;
          }),
        });
        CancelRequest = null;
        this.reportGetNumTime("endTime");
        if (res.code === "0000" && Array.isArray(res.data?.numItem)) {
          if (showTip && res.data.numItem.length > 0 && res.data.numItem.length <= this.numSize) {
            this.$toast.allowMultiple(true); //允许同时存在多个 Toast
            if (this.phoneList.length > 0 && this.phoneList.length <= this.numSize)
              this.$toast("请耐心等待，我们正为你努力加载");
            this.$toast.allowMultiple(false); //允许同时存在多个 Toast
          }
          if (
            res.data.numItem.length === 0 &&
            Array.isArray(res.data.recommendNumItem) &&
            res.data.recommendNumItem.length > 0
          )
            this.showNoCityTip = true;
          this.reportGetNumTime("report", actionName, res.data.numItem.length);
          return res.data.numItem.length > 0 ? res.data.numItem : res.data.recommendNumItem || [];
        }
        return [];
      } catch (error) {
        console.log("catch error", error);
        return null;
      }
    },
    getHighlight(highlight) {
      if (highlight === "0") return {};
      if (highlight === "1") return { color: this.item.numStyle.highlight1 };
      if (highlight === "2") return { color: this.item.numStyle.highlight2 };
    },
    numberInit(Data) {
      if (!this.isChoujin) return;
      this.Data = Data;
      if (Array.isArray(Data.productAttrInfo) && Data.productAttrInfo.length > 0)
        this.belongCityList = Data.productAttrInfo;
      this.numSize = this.item.numSize || defaultNumSize;
      if (this.item.hideRegion) {
        if (this.wgSelectNumberCity) {
          this.$watch("wgSelectNumberCity.value", n => this.closeCityPicker(n), {
            immediate: true,
          });
          //  this.hadInitRegion(this.wgSelectNumberCity.value);
          return;
        }
        if (this.wgSelectNumberCity5) {
          this.$watch("wgSelectNumberCity5.value", n => this.closeCityPicker(n), {
            immediate: true,
          });
          //  this.hadInitRegion(this.wgSelectNumberCity5.value);
          return;
        }
        // const getAutoRegion = this.$util.deepClone(this.BUS.autoRegion);
        // this.hadInitRegion(getAutoRegion);
      }
      this.$nextTick(async () => {
        this.initBelongPicker();
      });
    },
    initBelongPicker() {
      if (this.$refs.belongPicker) {
        this.$refs.belongPicker.initRegion();
        clearTimeout(this.pickerTimer);
      } else {
        this.pickerTimer = setTimeout(() => {
          this.initBelongPicker();
        }, 100);
      }
    },
    inputNumber(e) {
      e.target.value = e.target.value.replace(/\D/g, "");
      if (e.target.value.length > 8) {
        e.target.value = e.target.value.slice(0, 8);
        return;
      }
      this.keyWord = e.target.value;
    },
    searchNumber() {
      if (!this.isChoujin) return;
      if (this.disabled) return;
      this.disabled = true;
      this.showLoading();
      if (!this.$util.isEmpty(this.keyWord)) this.$api.reportMatomo("搜索号码", this.keyWord);
      this.selectRule = this.ruleItems[0].value;
      this.getHandleNoItem(this.keyWord, false, "搜索")
        .then(res => {
          if (!Array.isArray(res)) return;
          if (res.length > 0 && this.item.defaultNum) this.defaultSelect(res[0]);
          this.initAllNum(res);
        })
        .finally(() => {
          this.disabled = false;
          clearTimeout(this.timer);
          this.$util.closeLoading();
        });
    },
    goNextRule(val) {
      // if (this.selectRule === this.ruleItems[0].value) return false
      if (this.rulesCount === this.rulesLength - 1) return false;
      if (Array.isArray(val) && val.length > 0) return false;
      return true;
    },
    changeNumber(showTip = false, actionName) {
      this.showLoading();
      this.getHandleNoItem(this.keyWord, showTip, actionName || "下一页").then(res => {
        if (!Array.isArray(res)) return;
        if (this.goNextRule(res)) {
          this.rulesCount++;
          this.initAllNum([]);
          let index = this.ruleItems.map(v => v.value).indexOf(this.selectRule);
          index++;
          if (index === this.ruleItems.length) index = 0;
          this.handleSelectRule(this.ruleItems[index].value, true);
        } else {
          this.rulesCount = 0;
          if (res.length > 0 && this.item.defaultNum) this.defaultSelect(res[0]);
          this.initAllNum(res);
          this.setNextLoading(false);
          clearTimeout(this.timer);
          this.$util.closeLoading();
        }
      });
    },
    async lockNumber(phone, key) {
      this.$util.openLoading("拼命抢号中...");
      const param = {
        pid: this.Data.pid,
        handleNo: phone.num,
        productCode: this.Data.productCode,
        sysOrderId: this.Data.pageId,
      };
      if (Array.isArray(this.pickCity) && this.pickCity.length > 1) {
        param.province = this.pickCity[0];
        param.city = this.pickCity[1];
      }
      const res = await this.$api.Choujin.lockNumber(param);
      this.$util.closeLoading();
      if (res?.code === "0") {
        this.handleSelectNum(phone);
        this.$api.reportMatomo(res.msg || "号码未被使用", phone.num);
      } else {
        this.$toast("您下手太慢了，该号码已被别的用户选取！");
        this.phoneList.splice(key, 1);
        const numsLength = this.allNums.length;
        for (let index = 0; index < numsLength; index++) {
          const element = this.allNums[index];
          if (element.num === phone.num) {
            element.isLock = true;
            break;
          }
        }
        this.$api.reportMatomo(res.msg || "号码已经被使用", phone.num);
      }
    },
    defaultSelect(phone) {
      this.item.value = phone.num;
      this.item.valueObj = phone;
    },
    handleSelectNum(phone) {
      this.item.value = phone.num;
      this.item.selectNum++;
      this.item.valueObj = phone;
      this.Data.newProductCode = phone.productCode || "";
      if (this.item.popupList?.length > 0) {
        this.$api.reportMatomo("归属地选号3-点击弹窗");
        this.$refs.selectNumCustomPopup.open();
      }
      this.$api.reportMatomo("选择号码", phone.num);
    },
    isWgActiveTab() {
      if (!this.isTabWg) return false;
      const activeTabWgs = this.isTabWg.list[this.isTabWg.activeTab];
      if (activeTabWgs && activeTabWgs.list) return pageHasWidget(activeTabWgs.list, SelectNumberCity3);
      return false;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.wgRef = this.$refs[this.item.key];
    });
  },
  created() {
    if (this.isChoujin) {
      this.wgSelectNumberCity = this.BUS.hasWidget(SelectNumberCity);
      this.wgSelectNumberCity5 = this.BUS.hasWidget(SelectNumberCity5);
      this.wgImgCity = this.BUS.hasWidget(ImgCity);
      this.$set(this.item, "valueObj", {});
      this.$set(this.item, "selectNum", 0);
      onSelectNumberCity3.on.tabChange(() => {
        this.$nextTick(() => {
          if (this.isTabWg && !this.isWgActiveTab()) return;
          this.emitBelongCityChange(this.pickCity);
        });
      });
      if (this.BUS.choujinCommonData) return this.numberInit(this.BUS.choujinCommonData);
      onSelectNumberCity3.on.pidInit(Data => {
        this.$nextTick(() => {
          if (this.isTabWg && !this.isWgActiveTab()) return;
          this.numberInit(Data);
        });
      });
    }
  },
};
</script>
