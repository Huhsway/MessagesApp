export default {
  name: 'MessageList', // 이 프로퍼티는 필수는 아니지만, 디버깅에 도움이 되기에 추가
  template: `<ul>
    <li v-for="item in items" :item="item">
    {{ item.text }} - {{ item.createdAt }} 
    <button @click="deleteMessage(item)">X</button></li></ul>`,
  props: {
    items: { // items는 배열이며 필수 항목으로 정의한다. 만일 실수로 배열이 아닌 문자열이나 다른 값을 전달하면 Vue.js가 에러를 던지도록
      type: Array,
      required: true
    }
  },
  methods: {
    deleteMessage (message) {
      this.$emit('delete', message) // 현재 인스턴스의 이벤트를 트리거 할 수 있는 $emit() 메소드
      // $emit()으로 MessageList의 delete 이벤트를 트리거하기 때문에 부모 컴포넌트는 @delete="..."에서 이 이벤트를 수신할 수 있따.
    }
  }
}