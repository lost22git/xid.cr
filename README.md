# xid for crystal lang

## Resources:

- [xid go](https://github.com/rs/xid)
- [xid rs](https://github.com/kazk/xid-rs)

## Installation

1. Add the dependency to your `shard.yml`:

```yaml
dependencies:
  xid:
    github: lost22git/xid.cr
```

2. Run `shards install`

## Usage

```crystal
require "xid"

# generate a Xid
xid = Xid.generate

# xid to string
str = xid.to_s

# parse string to Xid
xid2 = Xid.from_s str

# xid as read only bytes view
bytes = xid2.as_bytes

# generate Xid by bytes
xid3 = Xid.from_bytes bytes

# resolve time from xid
p! xid3.time

# print xid debug info
xid3.debug

```


## Development

### Run tests

```sh
crystal spec --progress
```

### Run bench


```sh
crystal run --release --progress bench/xid_bench.cr
```

## Contributing

1. Fork it (<https://github.com/lost22git/xid.cr/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Contributors

- [lost](https://github.com/lost22git) - creator and maintainer
