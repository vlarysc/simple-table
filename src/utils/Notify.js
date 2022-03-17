import Notify from 'simple-notify'
import 'simple-notify/dist/simple-notify.min.css'

function pushNotify(status, title, text) {
  new Notify({
    status: status,
    title: title,
    text: text,
    effect: 'fade',
    speed: 300,
    customClass: null,
    customIcon: null,
    showIcon: true,
    showCloseButton: true,
    autoclose: true,
    autotimeout: 3000,
    gap: 20,
    distance: 20,
    type: 1,
    position: 'top'
  })
}

export default pushNotify;