from django.conf.urls import include, url
from django.contrib import admin
from dashboard import views

urlpatterns = [
    # Examples:
    # url(r'^$', 'whatever_gpa_thing.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^index/', views.index),
    url(r'', views.home)
]
