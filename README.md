# Findhotel Geolocator

This is the demo application which can be used as a simple GUI test engine to verify that the [geolocation gem](https://github.com/kgish/findhotel-geolocation-gem) is working properly.

## Installation

The installation is straight-forward. We will clone the application demo `findhotel-geolocator` for the github

```shell
$ git clone https://github.com/kgish/findhotel-geolocator.git
$ cd findhotel-geolocator
$ bundle install
$ cd frontend
$ npm install
$ bower install
$ cd ..
$ bin/rails server
```

Go to the import page at `http://localhost:3000/import` and hit the [Import!]-button. Please note, that for demo purposes this import file is a smaller version of the original, having 1000 lines instead of 1000000 lines which take a long time to import: 82 minutes (see below).

See [Rails application](https://github.com/kgish/findhotel-geolocation-gem#rails-application) for more details and screenshots showing how this application works.


## Geolocation gem

For more information about the geolocation gem, please refer to the [README]().


## License
The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).


## Author

Kiffin Gish \< kiffin.gish@planet.nl \>

\- You're never too old to learn new stuff.