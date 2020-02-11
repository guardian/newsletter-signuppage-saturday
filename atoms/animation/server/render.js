import mainHTML from "./atoms/default/server/templates/main.html!text"

export async function render() {
    return `

    <div class-'co-anim-wrapper'>

    <h2 class='co-head'>More than 42,000 cases of the virus have now been confirmed</h2>
    <div class='co-box'>
        <h4 class='co-counter'>21 January</h4>
        <p class='co-info co-hidden'></p>
    </div>
    <svg class='co-svg'></svg>
    <p class='co-src'>Source: Johns Hopkins University</p>

    </div>
    `;
} 