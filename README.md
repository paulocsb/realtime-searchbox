README
------

Realtime Search Box

Dependencies
------------

- The Ruby 2.2.2+
- Rails (versions 5.0)
- Elasticsearch
- React JS
- PostgreSQL

Configuration
-------------

### Clone repository
```
$ git clone git@github.com:paulocsb/realtime-searchbox.git
$ cd realtime-searchbox
```

### Setup Application
```
$ rake init
```

Start the Web Server
--------------------

### Run server setup
```
$ rake start
```

### Access web browser:

http://localhost:3000

### Address web api:

http://localhost:3100

### Endpoints:

1. [GET] http://localhost:3100/v1/articles
2. [GET] http://localhost:3100/v1/searches
3. [GET] http://localhost:3100/v1/searches/clear

Run RSpec Tests
---------------
```
$ rspec
```

Author
------

* **Paulo Cesar** - [GitHub](https://github.com/paulocsb)

