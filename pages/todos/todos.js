Page({
  data: {
    input: '',
    countLeft: 2,
    allCompletedState: false,
    list: [{
        id: 1,
        title: 'Learning WEAPP',
        completed: false
      },
      {
        id: 2,
        title: 'Learning JavaScript',
        completed: true
      },
      {
        id: 3,
        title: 'Learning HTML',
        completed: false
      }
    ]
  },
  inputHandle(e) {
    this.setData({
      input: e.detail.value
    })
  },
  addItemHandle() {
    if (!this.data.input) return
    const list = this.data.list
    list.push({
      id: this.data.list.length + 1,
      title: this.data.input,
      completed: false
    })
    this.setData({
      list,
      input: '',
      countLeft: this.data.countLeft + 1
    })
  },
  toggleStateHandle(e) {
    const item = this.data.list[e.currentTarget.dataset.index]
    const countLeft = this.data.countLeft + (!item.completed ? -1 : 1)
    item.completed = !item.completed
    // this.data.list.some((item, index) => {
    //   if (index === e.target.dataset.index) {
    //     item.completed = !item.completed
    //     return true
    //   }
    // })
    this.setData({
      list: this.data.list,
      countLeft
    })
  },
  deleleItemHandel(e) {
    const {
      completed
    } = this.data.list.splice(e.currentTarget.dataset.index, 1)[0]
    this.setData({
      list: this.data.list,
      countLeft: completed ? this.data.countLeft : this.data.countLeft - 1
    })
  },
  toggleAllCompletedHandle() {
    // this.data.list.forEach(function(item){item.completed = !this.data.allCompletedState}.bind(this) )
    this.data.list.forEach(item => item.completed = !this.data.allCompletedState)
    this.setData({
      list: this.data.list,
      allCompletedState: !this.data.allCompletedState,
      countLeft: !this.data.allCompletedState ? 0 : this.data.list.length
    })
  },
  clearCompletedAllHandle() {
    this.setData({
      list: this.data.list.filter(item => !item.completed)
    })
  }

})