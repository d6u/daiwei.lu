{% include './_hero.swig' %}

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
