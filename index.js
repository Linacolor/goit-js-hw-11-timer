const CountdownTimer = class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selectorEl = document.querySelector(selector)
    this.daysEl = this.selectorEl.querySelector('[data-value=days]')
    this.hoursEl = this.selectorEl.querySelector('[data-value=hours]')
    this.minsEl = this.selectorEl.querySelector('[data-value=mins]')
    this.secsEl = this.selectorEl.querySelector('[data-value=secs]')
    this.time = targetDate
    this.intervalId = setInterval(this.changeDate, 1000)
  }

  textLength(num) {
    if (num < 10) return '0' + num
    return String(num)
  }

  clearInterval() {
    clearInterval(this.intervalId)
  }

  myTimer(time) {
    this.daysEl.textContent = this.textLength(
      Math.floor(time / (1000 * 60 * 60 * 24)),
    )
    this.hoursEl.textContent = this.textLength(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    )
    this.minsEl.textContent = this.textLength(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    )
    this.secsEl.textContent = this.textLength(
      Math.floor((time % (1000 * 60)) / 1000),
    )
  }

  changeDate = () => {
    const nowTime = new Date()
    const time = this.time - nowTime

    if (time <= 0) {
      this.myTimer(0)
      this.clearInterval()
    } else {
      this.myTimer(time)
    }
  }
}
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
})
