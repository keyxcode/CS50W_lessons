from django.http import HttpResponseRedirect
from django.shortcuts import render
from django import forms
from django.urls import reverse

# this class inherits from the forms.Form class
class NewTaskForm(forms.Form):
    task = forms.CharField(label="New Task")
    priority = forms.IntegerField(label="Priority", min_value=1, max_value=5)


# Create your views here.
def index(request):
    # create the key "tasks" in the session if it hasn't existed
    if "tasks" not in request.session:
        request.session["tasks"] = []

    return render(request, "tasks/index.html", {
        "tasks": request.session["tasks"]
    })


def add(request):
    # if the user has submitted this form
    if request.method == "POST":
        # request.POST includes all the data the user submitted
        form = NewTaskForm(request.POST)
        if form.is_valid():
            task = form.cleaned_data["task"]
            request.session["tasks"] += [task]
            return HttpResponseRedirect(reverse("tasks:index"))
        else:
            return render(request, "tasks/add.html", {
                # form will show any error that occured
                "form": form
            })

    return render(request, "tasks/add.html", {
        "form": NewTaskForm()
    })
