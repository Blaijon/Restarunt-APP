import {h, app} from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
    <section id="OurStory">
      <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h5 class="comp-title"></h5>
          <h2>Cooking is the art of adjustment</h2>
          <p> $grid-columns: 12;
    $grid-max-width: 1200px; //breakpoint-small
    $breakpoint-xs: "only screen and (min-width: 0px)";
    $breakpoint-small: "only screen and (min-width: 451px)";
    $breakpoint-medium: "only screen and (min-width: 768px)";
    $breakpoint-large: "only screen and (min-width: 1008px)";
    $breakpoint-xl: "only screen and (min-width: 1300px)";</p>
          <div class="quote">
            "The best steak in the month" - <strong>Thoras Eggsy</strong>
          </div>
          <a href="#" class="reserve-btn">Reserve</a>
        </div>
        <div class="col-md-6">
          <div class="video-img">

          </div>
     </div>
      </div>
      </div>
    </section>
  )
}
