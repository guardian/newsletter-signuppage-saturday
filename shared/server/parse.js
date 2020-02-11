import fs from 'fs'
import sync from 'csv-parse/lib/sync'
import _ from 'lodash'

const data = sync(fs.readFileSync('shared/server/data.csv'), { columns : true })

const out = _(data)
    .groupBy('year')
    .mapValues(arr => {

        const obj = {}
        arr.filter( row => Number(row.cases) > 0).forEach( row => {

            obj[row.state] = Number(row.cases)
            obj[row.country] = Number(row.cases)

        } )

        return obj

    })
    
    .toPairs()
    .map( t => {

        return {
            date : t[0], ...t[1]
        }

    } )
    .valueOf()

fs.writeFileSync('shared/server/parsed.json', JSON.stringify(out, null, 2))