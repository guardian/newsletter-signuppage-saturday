import fs from 'fs'
import sync from 'csv-parse/lib/sync'

const clean = str => str.replace('Jan', 'January').replace('Feb', 'February')
    .split(' ').reverse().join(' ')

const data = sync(fs.readFileSync('shared/server/totals_new.csv'), { columns : true })
    .map( row => {

        return {
            date : row.date.trim(),
            number : Number(row.number)
        }

    } )

console.log(data)

fs.writeFileSync('shared/server/cumulative.json', JSON.stringify(data))