class LightboxStore {
  constructor () {
    this.state = {
      images: [],
      index: false // this.state.index correspond a l'index de l'image a ouvrire lorsque l'on click sur une image
    }
  }

  /**
   * Add url image in state.images
   * @param url url de l'image
   * @returns {*|number} index qui vient d'être ajouté
   */
  addImage (url) {
    return this.state.images.push(url) - 1
  }

  open (index) {
    this.state.index = index
  }

  close () {
    this.state.index = false
  }
}

export default new LightboxStore()
