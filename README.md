# project

#postgres db

on ubuntu

sudo apt-get update
sudo apt-get install python-pip python-dev libpq-dev postgresql postgresql-contrib
sudo su - postgres
psql
CREATE DATABASE myproject;
CREATE USER myprojectuser WITH PASSWORD 'password';
ALTER ROLE myprojectuser SET client_encoding TO 'utf8';
ALTER ROLE myprojectuser SET default_transaction_isolation TO 'read committed';
ALTER ROLE myprojectuser SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE myproject TO myprojectuser;
\q
exit


on windows:-

install Postgres

Set Up Psycopg2

   	Psycopg is going to be our path to Postgres freedom with Python. It seems to be the most common way to interact with Postgres.
   	Go to your command prompt.
   	If you have your environment variables set up nicely and can run things like pip and easy_install, that's good. If not, locate pip and do the following:-
		pip install -U psycopg2

Install psycopg2 using the installer

Prepare a New Postgres Database for Your Project

   	Go to where Postgres was installed after installing with the Windows installer.
   	Open pgAdminIII.
   	Draw your attention to your current databases in the tree located on the right of your window. Look for "Databases." The icon looks like a stack of pancakes.
   	Right-click "Databases."
   	Click "New Database..."
   	Think up some name for your database. This will be important for setting Postgres up with Django.
   	The "Owner" field should be filled out with a username. It'll be used in conjunction with your master password (the one you were asked to establish during install) when you set up Django.
   	Click "OK."

Set up your Django Environment for Working With Postgres

   	Your Django project should already be started/created at this point. If not, go to your command prompt and type
		django-admin startproject some_project_name

   	Go to your main project folder (a sub folder of your project folder; it contains settings.py).

   	Locate settings.py and open it.

Set up settings.py so that the database handling section (near the very beginning of the file) looks like this but with your own login credentials for the database:

DATABASES = {  
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2', # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
        'NAME': 'testdb',                      # Or path to database file if using sqlite3.
        'USER': 'postgres',                      # Not used with sqlite3.
        'PASSWORD': 'foobarguy',                  # Not used with sqlite3.
        'HOST': 'localhost',                      # Set to empty string for localhost. Not used with sqlite3.
        'PORT': '5432',                      # Set to empty string for default. Not used with sqlite3.
    }
}

Success

Save settings.py after you've done all of the configuration. You should be able to use Postgres with Django now.