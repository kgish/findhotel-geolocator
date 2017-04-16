Geolocation.configure do |config|
  config.enabled = true
  config.uploads_dir = 'uploads'
  config.data_dump_csv = 'data_dump.csv'
  config.allow_missing_city = false
  config.allow_missing_latlong = false
end