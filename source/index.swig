{% extends './template/_layout.swig' %}

{% block body %}
  {% include './template/_navbar.swig' %}

  <div class="o-container">
    {% include './template/_works-page.swig' %}
    {% include './template/_profile-page.swig' %}
  </div>
{% endblock %}
