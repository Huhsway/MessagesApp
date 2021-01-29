import lifecyleLogger from '../mixins/lifecycle-logger.mixin.js'

export default {
  name: 'MessageListItem',
  mixins: [lifecyleLogger],
  template: `<li>{{ item.text }} - {{ item.createdAt | datetime }} <!--필터를 지정하기 위해서 | 추가-->
    <button @click="deleteClicked">X</button></li>`,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteClicked () {
      this.$emit('delete')
    }
  }
}