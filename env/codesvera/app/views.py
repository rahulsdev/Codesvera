from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'app/index.html')
def about(request):
    return render(request,'app/about-us.html')
def contact(request):
    return render(request,'app/contact-us.html')
def portfolio(request):
    return render(request,'app/portfolio.html')
def services(request):
    return render(request,'app/services.html')
def career(request):
    return render(request,'app/career.html')
def career_details(request):
    return render(request,'app/career-details.html')