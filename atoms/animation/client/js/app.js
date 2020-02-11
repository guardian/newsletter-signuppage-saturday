import * as d3 from 'd3'
import { $, numberWithCommas, wait } from 'shared/js/util'
import data from 'shared/server/cumulative.json'

const isMobile = window.matchMedia('(max-width: 740px)').matches

const draw = () => {

    const svgEl = $('.co-svg')

    const width = svgEl.getBoundingClientRect().width
    const height = isMobile ? 390 : 450

    const svg = d3.select(svgEl)
        .attr('width', width)
        .attr('height', height)

    const dateEl = $('.co-counter')
    const infoEl = $('.co-info')

    const padding = {
        top: 0,
        right: 0,
        bottom: 0,
        left : 50
    }

    const yScale = d3.scaleLinear()
        .domain([ 0, 45000 ])
        .range([ 0, height - padding.bottom - padding.top ])

    const timeScale = d3.scaleLinear()
        .domain([ 0, 45000 ])
        .range([ 800, 1400 ])

    const barWidth = (width - padding.left - padding.right)/data.length
    const spacing = isMobile ? 2 : 5

    const bars = svg
        .selectAll('blah')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => padding.left + i*(barWidth) + spacing/2)
        .attr('y', height - padding.bottom)
        .attr('width', barWidth - spacing)
        .attr('height', 0)
        .attr('class', 'co-bar')

    const yGs = svg
        .selectAll('blah')
        .data(d3.range(0, 50000, 10000))
        .enter()
        .append('g')
        .attr('transform', d => {

            const h = yScale(d)
            const y = height - padding.bottom - h
            return `translate(0, ${y})`

        })

    yGs
        .append('line')
        .attr('x1', 0)
        .attr('x2', width)
        .attr('class', (d, i) => i === 0 ? 'co-yline co-yline--base' : 'co-yline')

    yGs
        .append('text')
        .attr('y', -6)
        .attr('class', 'co-ylabel')
        .text( d => numberWithCommas(d) + (d === 40000 ? ' confirmed cases' : ''))
    

    const play = () => {

    const stepDelay = 2500

    bars
        .filter((d, i) => i < 3)
        .transition()
        .delay((d, i) => i*300)
        .duration(d => timeScale(d.number))
        .attr('height', (d, i) => {
            const h = yScale(d.number)
            return h
        })
        .attr('y', (d, i) => {
            const h = yScale(d.number)
            return height - padding.bottom - h
        })

        .on('start', (d, i) => {
            dateEl.innerHTML = d.date

        })

        .on('end', (d, i) => {
            if(i === 2) {
                wait(500).then(() => {
                    
                    infoEl.innerHTML = `11m residents of Wuhan put on lockdown`
                    infoEl.classList.remove('co-hidden')

                    wait(stepDelay).then( () => infoEl.classList.add('co-hidden') )

                    bars
                    .filter((d, i) => i >= 3 && i < 10)
                    .transition()
                    .delay((d, i) => stepDelay + i*300)
                    .duration(d => timeScale(d.number))
                    .attr('height', (d, i) => {
                        const h = yScale(d.number)
                        return h
                    })
                    .attr('y', (d, i) => {
                        const h = yScale(d.number)
                        return height - padding.bottom - h
                    })
            
                    .on('start', (d, i) => {
                        dateEl.innerHTML = d.date
            
                    })
            
                    .on('end', (d, i) => {
                        if(i === 6) {
                            wait(500).then(() => {
                                infoEl.innerHTML = `WHO declares global health emergency`
                                infoEl.classList.remove('co-hidden')

                                wait(stepDelay).then( () => infoEl.classList.add('co-hidden') )

                                bars
                                    .filter((d, i) => i >= 10 && i < 17)
                                    .transition()
                                    .delay((d, i) => stepDelay + i*300)
                                    .duration(d => timeScale(d.number))
                                    .attr('height', (d, i) => {
                                        const h = yScale(d.number)
                                        return h
                                    })
                                    .attr('y', (d, i) => {
                                        const h = yScale(d.number)
                                        return height - padding.bottom - h
                                    })
                            
                                    .on('start', (d, i) => {
                                        dateEl.innerHTML = d.date
                            
                                    })
                            
                                    .on('end', (d, i) => {
                                        if(i === 6) {
                                            wait(500).then(() => {
                                                infoEl.innerHTML = `First UK case confirmed`
                                                infoEl.classList.remove('co-hidden')

                                                wait(stepDelay).then( () => infoEl.classList.add('co-hidden') )

                                                bars
                                                    .filter((d, i) => i >= 17)
                                                    .transition()
                                                    .delay((d, i) => stepDelay + i*300)
                                                    .duration(d => timeScale(d.number))
                                                    .attr('height', (d, i) => {
                                                        const h = yScale(d.number)
                                                        return h
                                                    })
                                                    .attr('y', (d, i) => {
                                                        const h = yScale(d.number)
                                                        return height - padding.bottom - h
                                                    })
                                            
                                                    .on('start', (d, i) => {
                                                        dateEl.innerHTML = d.date
                                            
                                                    })
                                            
                                                    .on('end', (d, i) => {
                                                        if(i === 2) {
                                                            wait(500).then(() => {
                                                                infoEl.innerHTML = `The number of confirmed cases surpasses 42,000`
                                                                infoEl.classList.remove('co-hidden')
                                                            })
                                                        }
                                                    })
                                            
                                            })
                                        }
                                    })

                            })
                        }
                    })
            
                })

            }
        })

    }

    const watchScroll = () => {
        if(svgEl.getBoundingClientRect().top < window.innerHeight*0.3) {
            play()
        } else {
            window.requestAnimationFrame(watchScroll)
        }
    }

    window.requestAnimationFrame(watchScroll)
                
    
}

draw()