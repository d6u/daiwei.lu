{% extends '_layout.swig' %}

{% block body %}

<nav class="o-navbar">
  <div class="o-navbar__link-group">
    <a href="#" class="o-navbar__link">Blog</a>
    <a href="#" class="o-navbar__link">Github</a>
    <a href="#" class="o-navbar__link">Twitter</a>
  </div>
  <div class="o-navbar__link-group">
    <a href="#" class="o-navbar__link o-navbar__link--active">Works</a>
    <a href="#" class="o-navbar__link">Profile</a>
  </div>
</nav>

<section class="o-hero">
  <div class="o-hero__container">
    <p class="o-hero__paragraph">Hi, I'm <span class="o-hero__name">Daiwei</span>. I build UIs and underlying architectures.</p>
    <p class="o-hero__paragraph o-hero__paragraph--secondary">I believe the best UIs are those users spend less time on but keep coming back to. Same thing for great archiectures, which make adding features and maintenance trivial things.</p>
  </div>
</section>

{% for work in works %}
  <section class="o-works">
    <h2 class="o-works__header">{{ work.header }}</h2>
    <div class="o-works__container">

      {% for project in work.projects %}
        <div class="o-project" data-showcase="{{ project.title | lower | replace('[\.\s]', '', 'g') }}">

          {% if project.keywords.length %}
            <p class="o-project__keywords">
              {% for word in project.keywords %}
                <span class="o-project__word o-project__word--{{ word | lower | replace('[\.\s]', '', 'g') }}">{{ word }}</span>
              {% endfor %}
            </p>
          {% endif %}

          <h3 class="o-project__title">
            {% if project.link %}
              <a href="{{ project.link }}" target="_blank">{{ project.title }}</a>
            {% else %}
              {{ project.title }}
            {% endif %}

            {% if project.github %}
              <a href="{{ project.github }}" target="_blank">
                <img src="/img/github-64.png" alt="Github Repo" class="a-icon-github o-project__repo-icon">
              </a>
            {% endif %}

          </h3>
          <p class="o-project__description">{{ project.description }}</p>
        </div>
      {% endfor %}

    </div>
  </section>
{% endfor %}

{% endblock %}
