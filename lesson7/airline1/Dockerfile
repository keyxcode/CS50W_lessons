# Describes the instruction for creating a Docker image,
# which represents all of the libraries and other installed items ins a container

# Base on the already existing Docker image where Python 3 is installed
FROM python:3
# Copy everything in the current dir, 
# and store it in /usr/src/app in the new container
COPY .  /usr/src/app
# Set working directory to run commands. A bit like cd
WORKDIR /usr/src/app
# Install all requirements previously written out in a requirements.txt
RUN pip install -r requirements.txt
# The command that should run when starting up the container
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]

# => When starting Docker container, it will set up according to this instruction