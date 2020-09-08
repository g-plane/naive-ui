/* istanbul ignore file */
import DatePicker from './src/DatePicker.vue'

DatePicker.install = function (app, naive) {
  app.component(naive.componentPrefix + DatePicker.name, DatePicker)
}

export default DatePicker
