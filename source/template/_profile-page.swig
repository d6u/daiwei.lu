<div class="o-container__page o-container__page--profile">
  <div class="o-profile">
    <div class="o-profile__box">
      <h2 class="o-profile__header">Who I am</h2>
      <p class="o-profile__text">
        {{ who_i_am }}
      </p>
    </div>

    <div class="o-profile__box">
      <h2 class="o-profile__header">What I do</h2>
      <p class="o-profile__text">
        {{ what_i_do }}
      </p>
    </div>

    <div class="o-profile__box">
      <h2 class="o-profile__header">Contact me?</h2>
      <p class="o-profile__text"><a href="{{ github }}">Github</a></p>
      <p class="o-profile__text"><a href="{{ blog }}">Blog</a></p>
      <p class="o-profile__text"><a href="{{ twitter }}">Twitter</a></p>
      <p class="o-profile__text"><a href="mailto:{{ email }}">{{ email }}</a></p>
    </div>
  </div>
</div>
