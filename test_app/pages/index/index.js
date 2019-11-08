//index.js
const app = getApp();

Page({
  data: {
    pageTitle: "E2E Demo Application"
  },
  onLoad: () => {

  },
  navigateToContactPage: () => {
    wx.navigateTo({
      url: '../contact/contact',
    });
  },
  navigateToCalc: () => {
    wx.navigateTo({
      url: '../calculator/calculator',
    })
  }

});