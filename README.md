# Tropsy

Still looking for your favourite tennis app? Look no further. With its elegant UI and its detailed ATP end ELO rankings, [Trospy](https://itunes.apple.com/us/app/tropsy/id1296953331) is going to blow your mind! 🤯

Download now from the App Store 📲 [itunes.apple.com/us/app/tropsy/id1296953331](https://itunes.apple.com/us/app/tropsy/id1296953331)

<p align="center">
  <img width="600" alt="main interface" src="https://s3.amazonaws.com/ps3611-images/tropsy.png">
</p>

## Tech

- [React Native](https://facebook.github.io/react-native/)
- [Redux](https://redux.js.org/)
- [Django](https://www.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Get Started

1. Clone repository
```sh
> git clone https://github.com/ps3611/tropsy.git
```

2. Launch server
```sh
# cd into server folder
> cd src/server/

# activate virtual environment
> source env/bin/activate

# launch django server
> python manage.py runserver
```

3. Popuplate datebase

```sh
# cd into cron folder
cd src/cron/

# run cron script to populate database
python main.py
```

4. Launch front end

```sh
# cd into client folder
cd src/client/

# launch react native
npm start
```

## License

MIT
