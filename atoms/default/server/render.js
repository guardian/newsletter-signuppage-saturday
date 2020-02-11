import mainHTML from "./atoms/default/server/templates/main.html!text"

export async function render() {
    return `

    <div class='co-maps-wrapper'>

    <h2 class='co-head'>How the virus spread around the world</h2>
    <p class='co-subhead'>First confirmed cases by date and country</p>
    <div class='co-sm-container'></div>
    <p class='co-src'>Source: Johns Hopkins University, Guardian research</p>

    </div>
    `;
} 