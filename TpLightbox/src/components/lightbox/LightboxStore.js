class LightboxStore {
  constructor () {
    this.state = {
      images: {},
      index: false, // this.state.index correspond a l'index de l'image a ouvrire lorsque l'on click sur une image
      group: false
    }
  }

  /**
   * Add url image in state.images
   * @param url url de l'image
   * @param group groupe de l'image
   * @returns {*|number} index qui vient d'être ajouté
   */
  addImage (url, group) {
    if (this.state.images[group] === undefined) {
      this.state.images[group] = []
    }
    return this.state.images[group].push(url) - 1
  }

  open (url, group) {
    this.state.group = group
    this.state.index = this.state.images[group].findIndex(image => image === url)
  }

  close () {
    this.state.index = false
  }

  prev () {
    this.state.index++
    if (this.state.index >= this.state.images[this.state.group].length) {
      this.state.index = 0
    }
  }

  next () {
    this.state.index--
    if (this.state.index < 0) {
      this.state.index = this.state.images[this.state.group].length - 1
    }
  }

  remove (url, group) {
    this.state.images[group] = this.state.images[group].filter(image => image !== url)
  }
}

export default new LightboxStore()
