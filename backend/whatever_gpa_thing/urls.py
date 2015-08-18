from django.conf.urls import include, url, patterns
from django.contrib import admin
from dashboard import views

urlpatterns = patterns("",
    # Examples:
    # url(r'^$', 'whatever_gpa_thing.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^index/$', views.index),
    url(r'^add/$', views.addExam, name='add_exam'),
    url(r'^$', views.home, name='home'),
)