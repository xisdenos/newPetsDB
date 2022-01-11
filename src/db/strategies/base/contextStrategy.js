import { ICrud } from "../interfaces/interfaceCrud"

class ContextStrategy extends ICrud {
    constructor(strategy) {
        this._database = strategy
    }

    create(item) {
        return this._database.create(item)
    }

    read(item) {
        return this._database.read(item)
    }

    update(id, item) {
        return this._database.update(id, item)
    }

    delete(item) {
        return this._database.delete(id)
    }
}

export {
    ContextStrategy
}