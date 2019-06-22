import Countdown from './countdown'
import Map from './map/map'
import './style.css'

export default class MapCountdown {
  constructor ({ selector, routePoints, key, meta, translations }) {
    this.containerElement = document.querySelector(selector)
    this.containerElement.classList.add('map-countdown')
    this.countdown = new Countdown({
      containerElement: this.containerElement,
      meta,
      translations
    })
    this.map = new Map({
      key,
      containerElement: this.containerElement
    })
    this.map.setRoutePoints(routePoints)
    this.attachEvents()
  }
  attachEvents () {
    this.countdown.addEventListener(
      'countdown:recount',
      this.updateMap.bind(this)
    )
  }

  updateMap (ratios) {
    this.map.updatePolygons(...Object.values(ratios))
  }
}
