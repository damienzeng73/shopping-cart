# Shopping-cart
A simple Shopping-cart built with React and Django REST Framework(DRF).

## Dependencies
* Python3+
* Node
* PostgreSQL

## Getting Started
### Installation
Clone this repository:

    git clone https://github.com/damnee562/shopping-cart.git

Create virtualenv and install all requirements in **backend** directory:

    cd shopping-cart/backend/
    python3 -m venv venv_name
    source venv_name/bin/activate
    pip install -r requirements.txt

Install all needed node_modules in **frontend** directory:

    cd shopping-cart/frontend/
    yarn install

or with npm:

    npm install

Prepare database in postgreSQL:

    sudo -u postgres psql
    CREATE DATABASE shopping_cart; # Don't forget the semicolon in the end

    # Quit postgresql shell
    \q

Set up database connection in **shopping-cart/backend/backend/settings.py** in DATABASES section:

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': 'shopping_cart',
            'USER': 'YOUR_USERNAME', # replace with your own username
            'PASSWORD': 'YOUR_PASSWORD', # replace with your own password
            'HOST': 'localhost',
            'PORT': ''
        }
    }

Fire up **backend** server:

    cd shopping-cart/backend/
    python manage.py migrate
    python manage.py runserver

Open another terminal for **frontend** server:

    cd shopping-cart/frontend/
    yarn start

or with npm:

    npm start

### Screenshots
#### Shopping page
![alt text](https://imgur.com/3jbeIvA.png "Shopping page")

#### Filter products
![alt text](https://imgur.com/QWcVVOo.png "Filter product")

#### Add product into cart
![alt text](https://imgur.com/iHzLPWF.png "Product details")

![alt text](https://imgur.com/eLJKntt.png "Add product into cart")

#### Cart page
![alt text](https://imgur.com/TwbT2So.png "Cart page")

![alt text](https://imgur.com/6UNwzmT.png "Shipping options")

![alt text](https://imgur.com/aBbqQok.png "Billing options")

![alt text](https://imgur.com/vMcWXbZ.png "Confirm order")

#### Account page
![alt text](https://imgur.com/iXTg2Wv.png "Account page")

#### Check orders and Manage products
![alt text](https://imgur.com/5nIUe94.png "Check orders")

![alt text](https://imgur.com/VQOiYHs.png "Manage products")

#### Add new product
![alt text](https://imgur.com/t3raRHl.png "Add new product")

![alt text](https://imgur.com/mdZECZF.png "Add new product")

![alt text](https://imgur.com/lg6Jx2M.png "New product")

## Built With
* [React](https://facebook.github.io/react/) - A JavaScript library for building UI
* [Semantic UI React](https://react.semantic-ui.com/introduction) - A React UI framework
* [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps
* [Django REST framework](http://www.django-rest-framework.org/) - A powerful and flexible toolkit for building Web APIs
* [django-rest-framework-jwt](http://getblimp.github.io/django-rest-framework-jwt/) - JSON Web Token Authentication support for Django REST framework
* [axios](https://github.com/mzabriskie/axios) - A Promised based HTTP client
* [toastr](https://github.com/CodeSeven/toastr) - Simple javascript toast notifications

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
