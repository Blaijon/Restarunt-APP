import {h, app} from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
    <section id="OurStory">
      <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h5 class="comp-title"></h5>
          <h2>Cooking is the art of adjustment</h2>
          <p>The story of art and the story of food are in fact intertwined. Both became sophisticated at the same time. In the middle ages feasting was rich, riotous and crude. Pies shaped like swans disgorged dozens of smaller birds. People ate with their fingers. Art too was simple and when painters showed food there was little subtlety.</p>
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
