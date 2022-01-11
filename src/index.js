import { ContextStrategy } from "./db/strategies/base/contextStrategy"
import { Postgres } from "./db/strategies/postgres"

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()