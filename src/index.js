import { ContextStrategy } from "./db/strategies/base/contextStrategy.js"
import { Postgres } from "./db/strategies/postgres.js"

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()