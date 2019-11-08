// pages/contact/contact.js

Page({
  data: {
    name: "",
    phone: "",
    phoneTypes: [
      { key: 0, type: "Home", checked: true },
      { key: 1, type: "Office" }
    ],
    msg: "",
    showResult: false
  },

  onLoad: () => {
  },
  getData: () => {
    return this.data;
  },
  radioChange: function (e) {
    console.log('Radio triggers a change event', e.detail.value);
    const tmp = [];
    console.log(this.data.phoneTypes);
    this.data.phoneTypes.forEach(item => {

      if (item.key === parseInt(e.detail.value))
        item.checked = true;
      else
        item.checked = false;

      tmp.push(item);
    })
    this.setData({
      phoneTypes: tmp
    })
  },

  tapOnAdd: function () {
    this.setData({
      msg: "A contact has been added successfully!",
      showResult: true
    });
    console.log(this.data);
  },
  tapOnClear: function () {
    this.setData({
      name: "",
      phone: "",
      phoneTypes: [
        { key: 0, type: "Home", checked: true },
        { key: 1, type: "Office" }
      ],
      msg: "",
      showResult: false
    });
    console.log(this.data)
  },

  onUpdateName: function (e) {
    this.setData({ name: e.detail.value });
  },

  onUpdatePhone: function (e) {
    this.setData({ phone: e.detail.value });
  }

});