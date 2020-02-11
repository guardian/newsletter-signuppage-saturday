import fs from 'fs'
import geoff from './geoff'
import sync from 'csv-parse/lib/sync'

function eqSet(as, bs) {
    if (as.size !== bs.size) return false;
    for (var a of as) if (!bs.has(a)) return false;
    return true;
}

const lookup = {}

const cleanDate = str => {
    return str.replace('Jan', 'January')
        .replace('Feb', 'February').split(' ').reverse().join(' ')
}

const clean = c => {
    return {
        'United Arab Emirates' : 'UAE',
        'Mainland China': 'China'
    }[c] || c
}

const data = [ {

    'date' : 'Jan 2',
    'Mainland China' : '41'

}, ...sync(fs.readFileSync('shared/server/transposed.csv'), { columns : true }) ]
    .map( row => {

        const out = { date : cleanDate(row.date) }

        const keys = Object.keys(row).filter( k => k !== 'date' )
        keys.forEach( k => {


            const c = geoff.parseName(k, {
                'Mainland China': 'CHN',
                'UK' : 'GBR',
                'US': 'USA'
            })

            lookup[c.toNumeric()] = clean(k)

            //console.log(c)
            const code = c.toNumeric()

            if(!c.match.alpha3) { console.log(k) }

            out[code] = Number(row[k])

        })

        return out

    } )
    .filter( (row, i, arr) => {

        if(i === 0) { return true }
        const prev = arr[i-1]

        const countries = new Set(Object.keys(row).filter( k => k !== 'date' && row[k] > 0))
        const oldCountries = new Set(Object.keys(prev).filter( k => k !== 'date' && prev[k] > 0))

        return !eqSet(countries, oldCountries)

    } )

    fs.writeFileSync('shared/server/parsed_new.json', JSON.stringify(data))
    fs.writeFileSync('shared/server/lookup.json', JSON.stringify(lookup))