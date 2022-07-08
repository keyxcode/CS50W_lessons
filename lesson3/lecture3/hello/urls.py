from django.urls import path
from . import views

# list of all urls that can be accessed in this app
urlpatterns = [
    # argument, which view to render, name of url pattern
    path("", views.index, name="index"),
    path("brian", views.brian, name="brian"),
    path("david", views.david, name="david"),

    # this is a route that takes in a string var called name
    # and passes it into views.greet
    path("<str:name>", views.greet, name="greet")
]