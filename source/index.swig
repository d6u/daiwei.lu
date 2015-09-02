{% extends './template/_layout.swig' %}

{% block body %}
  {% include './template/_navbar.swig' %}

  <div class="o-container">
    <div class="o-container__page o-container__page--works">
      {% include './template/_works-page.swig' %}
    </div>

    <div class="o-container__page o-container__page--profile">
      {# {% include './template/_works-page.swig' %} #}
    </div>
  </div>
{% endblock %}
