import { ControllerUtils } from '../lib/controllerUtils'



class JuzgadoController {
  constructor(model) {
    this.model = model
    this.utils = new ControllerUtils(model.user)
  }

  // DOMContentLoaded
  handleDOMContentLoaded = () => {
    // add permissions
    this.utils.validatePermissions({})
  }
}

export { JuzgadoController }



