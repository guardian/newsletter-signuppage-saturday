import * as d3 from 'd3'
import { $, $$ } from 'shared/js/util'
import * as topojson from 'topojson'
import world from 'world-atlas/countries-110m.json'
import land from 'world-atlas/land-110m.json'
import data from 'shared/server/parsed_new.json'
import geoff from 'shared/server/geoff.js'
import lookup from 'shared/server/lookup.json'

const countriesFc = topojson.feature(world, world.objects.countries)
const landFc = topojson.feature(land, land.objects.land)

const filterNew = (entry, i) => {

    return (f, j) => {

        if(i > 0 && entry[f.id] && data[i-1][f.id] > 0) {
            return false
        }

        if(entry[f.id]) {
            return true
        }
    }

}

const filterOld = (entry, i) => {

    return (f, j) => {

        if(i > 0 && entry[f.id] && data[i-1][f.id] > 0) {
            return true
        }
    }

}

const makeString = features => {
    return features.map(f => lookup[f.id])
    .sort((a, b) => a > b ? 1 : -1)
    .join(', ')
}

const draw = () => {

    const containerEl = $('.co-sm-container')

    const drawMap = (entry, i) => {

        const innerDiv = d3.select(containerEl).append('div')
        .attr('class', 'co-sm-div')

        innerDiv.append('h3')
            .text( entry.date )
            .attr('class', 'co-date')

        innerDiv.append('div')
            .text( makeString(countriesFc.features.filter( filterNew(entry, i) )) )
            .attr('class', 'co-countries')

        const img = innerDiv.append('img')
            .attr('class', 'co-img')
            .attr('src', `<%= path %>/localhost_8000_default_interactive.html (${i+3}).png`)
            .attr('alt', 'map of coronavirus cases')
    
        // const svg = innerDiv.append('svg')
        //     .attr('class', 'co-sm')

        // const width = svg.node().getBoundingClientRect().width
        // const height = width*0.5

        // svg.attr('width', width).attr('height', height)
       


        // const proj = d3.geoNaturalEarth1()
        //     .fitExtent([[ 0, 0], [ width, height*1.2] ], { type : 'Sphere' })
        //     .rotate([-150])

        // const path = d3.geoPath().projection(proj)

        // //const greyShapes = svg.selectAll('blah')
        // //.data(countriesFc.features.filter( filterOld(entry) ))

        // const land = svg.selectAll('blah')
        //     .data(landFc.features)
        //     .enter()
        //     .append('path')
        //     .attr('d', path)
        //     .attr('class', 'co-land')

        // const greyShapes = svg.selectAll('blah')
        //     .data(countriesFc.features.filter( filterOld(entry, i) ))
        //     .enter()
        //     .append('path')
        //     .attr('d', path)

        //     .attr('class', f => {
        //         return 'co-shape co-shape--faded'
        //     })

        // const redShapes = svg.selectAll('blah')
        //     .data(countriesFc.features.filter( filterNew(entry, i) ))
        //     .enter()
        //     .append('path')
        //     .attr('d', path)

        //     .attr('class', f => {
        //         return 'co-shape co-shape--hl'
        //     })

    }

    data.forEach( drawMap )

}

draw()