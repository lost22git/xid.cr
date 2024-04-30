crystal_doc_search_index_callback({"repository_name":"xid","body":"# xid for crystal lang\n\n[API DOC](https://lost22git.github.io/xid.cr)\n\n## Resources:\n\n- [xid go](https://github.com/rs/xid)\n- [xid rs](https://github.com/kazk/xid-rs)\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n```yaml\ndependencies:\n  xid:\n    github: lost22git/xid.cr\n```\n\n2. Run `shards install`\n\n## Usage\n\n```crystal\nrequire \"xid\"\n\n# generate a Xid\nxid = Xid.generate\n\n# xid to string\nstr = xid.to_s\n\n# parse string to Xid\nxid2 = Xid.from_s str\n\n# xid as read only bytes view\nbytes = xid2.as_bytes\n\n# generate Xid by bytes\nxid3 = Xid.from_bytes bytes\n\n# resolve time from xid\np! xid3.time\n\n# print xid debug info\nxid3.debug\n\n```\n\n\n## Development\n\n### Run tests\n\n```sh\ncrystal spec --progress\n```\n\n### Run bench\n\n\n```sh\ncrystal run --release --progress bench/xid_bench.cr\n```\n\n## Contributing\n\n1. Fork it (<https://github.com/lost22git/xid.cr/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [lost](https://github.com/lost22git) - creator and maintainer\n","program":{"html_id":"xid/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"locations":[],"repository_name":"xid","program":true,"enum":false,"alias":false,"const":false,"constants":[{"id":"BASE32_DEC","name":"BASE32_DEC","value":"begin\n  a = StaticArray(UInt8, 256).new(0)\n  a[48] = 0\n  a[49] = 1\n  a[50] = 2\n  a[51] = 3\n  a[52] = 4\n  a[53] = 5\n  a[54] = 6\n  a[55] = 7\n  a[56] = 8\n  a[57] = 9\n  a[97] = 10\n  a[98] = 11\n  a[99] = 12\n  a[100] = 13\n  a[101] = 14\n  a[102] = 15\n  a[103] = 16\n  a[104] = 17\n  a[105] = 18\n  a[106] = 19\n  a[107] = 20\n  a[108] = 21\n  a[109] = 22\n  a[110] = 23\n  a[111] = 24\n  a[112] = 25\n  a[113] = 26\n  a[114] = 27\n  a[115] = 28\n  a[116] = 29\n  a[117] = 30\n  a[118] = 31\n  a\nend"},{"id":"BASE32_ENC","name":"BASE32_ENC","value":"\"0123456789abcdefghijklmnopqrstuv\""}],"types":[{"html_id":"xid/B12","path":"B12.html","kind":"alias","full_name":"B12","name":"B12","abstract":false,"locations":[{"filename":"src/xid.cr","line_number":15,"url":null}],"repository_name":"xid","program":false,"enum":false,"alias":true,"aliased":"StaticArray(UInt8, 12)","aliased_html":"StaticArray(UInt8, 12)","const":false},{"html_id":"xid/B2","path":"B2.html","kind":"alias","full_name":"B2","name":"B2","abstract":false,"locations":[{"filename":"src/xid.cr","line_number":18,"url":null}],"repository_name":"xid","program":false,"enum":false,"alias":true,"aliased":"StaticArray(UInt8, 2)","aliased_html":"StaticArray(UInt8, 2)","const":false},{"html_id":"xid/B3","path":"B3.html","kind":"alias","full_name":"B3","name":"B3","abstract":false,"locations":[{"filename":"src/xid.cr","line_number":17,"url":null}],"repository_name":"xid","program":false,"enum":false,"alias":true,"aliased":"StaticArray(UInt8, 3)","aliased_html":"StaticArray(UInt8, 3)","const":false},{"html_id":"xid/B4","path":"B4.html","kind":"alias","full_name":"B4","name":"B4","abstract":false,"locations":[{"filename":"src/xid.cr","line_number":16,"url":null}],"repository_name":"xid","program":false,"enum":false,"alias":true,"aliased":"StaticArray(UInt8, 4)","aliased_html":"StaticArray(UInt8, 4)","const":false},{"html_id":"xid/Error","path":"Error.html","kind":"class","full_name":"Error","name":"Error","abstract":false,"superclass":{"html_id":"xid/Exception","kind":"class","full_name":"Exception","name":"Exception"},"ancestors":[{"html_id":"xid/Exception","kind":"class","full_name":"Exception","name":"Exception"},{"html_id":"xid/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"xid/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/xid.cr","line_number":20,"url":null}],"repository_name":"xid","program":false,"enum":false,"alias":false,"const":false},{"html_id":"xid/Xid","path":"Xid.html","kind":"struct","full_name":"Xid","name":"Xid","abstract":false,"superclass":{"html_id":"xid/Struct","kind":"struct","full_name":"Struct","name":"Struct"},"ancestors":[{"html_id":"xid/Indexable","kind":"module","full_name":"Indexable","name":"Indexable"},{"html_id":"xid/Enumerable","kind":"module","full_name":"Enumerable","name":"Enumerable"},{"html_id":"xid/Iterable","kind":"module","full_name":"Iterable","name":"Iterable"},{"html_id":"xid/Struct","kind":"struct","full_name":"Struct","name":"Struct"},{"html_id":"xid/Value","kind":"struct","full_name":"Value","name":"Value"},{"html_id":"xid/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/xid.cr","line_number":23,"url":null}],"repository_name":"xid","program":false,"enum":false,"alias":false,"const":false,"included_modules":[{"html_id":"xid/Indexable","kind":"module","full_name":"Indexable","name":"Indexable"}],"constructors":[{"html_id":"from_bytes(raw:B12|Bytes):Xid-class-method","name":"from_bytes","doc":"generate a `Xid` from bytes\n\nExample:\n\n```\nbytes = UInt8.static_array(0x4d, 0x88, 0xe1, 0x5b, 0x60, 0xf4, 0x86, 0xe4, 0x28, 0x41, 0x2d, 0xc9)\nxid = Xid.from_bytes bytes\nxid.debug\n```","summary":"<p>generate a <code><a href=\"Xid.html\">Xid</a></code> from bytes</p>","abstract":false,"args":[{"name":"raw","external_name":"raw","restriction":"B12 | Bytes"}],"args_string":"(raw : B12 | Bytes) : Xid","args_html":"(raw : <a href=\"B12.html\">B12</a> | Bytes) : <a href=\"Xid.html\">Xid</a>","location":{"filename":"src/xid.cr","line_number":67,"url":null},"def":{"name":"from_bytes","args":[{"name":"raw","external_name":"raw","restriction":"B12 | Bytes"}],"return_type":"Xid","visibility":"Public","body":"Xid.new(time: B4[raw[0], raw[1], raw[2], raw[3]], machine_id: B3[raw[4], raw[5], raw[6]], process_id: B2[raw[7], raw[8]], count: B3[raw[9], raw[10], raw[11]])"}},{"html_id":"from_s(base32:String):Xid-class-method","name":"from_s","doc":"generate a `Xid` from base32 string\n\nExample:\n\n```\nxid = Xid.from_s \"9m4e2mr0ui3e8a215n4g\"\nxid.debug\n```","summary":"<p>generate a <code><a href=\"Xid.html\">Xid</a></code> from base32 string</p>","abstract":false,"args":[{"name":"base32","external_name":"base32","restriction":"String"}],"args_string":"(base32 : String) : Xid","args_html":"(base32 : String) : <a href=\"Xid.html\">Xid</a>","location":{"filename":"src/xid.cr","line_number":85,"url":null},"def":{"name":"from_s","args":[{"name":"base32","external_name":"base32","restriction":"String"}],"return_type":"Xid","visibility":"Public","body":"base32 = base32.downcase\nif base32.matches_full?(/[0-9a-v]{20}/)\nelse\n  raise(Error.new(\"XID: not a valid base32 string\"))\nend\nraw = base32.to_slice\n(base32_decode(raw)).unsafe_as(Xid)\n"}},{"html_id":"generate:Xid-class-method","name":"generate","doc":"generate a `Xid`\n\nExample:\n\n```\nxid = Xid.generate\nxid.debug\n```","summary":"<p>generate a <code><a href=\"Xid.html\">Xid</a></code></p>","abstract":false,"location":{"filename":"src/xid.cr","line_number":40,"url":null},"def":{"name":"generate","return_type":"Xid","visibility":"Public","body":"Xid.new(time: read_time, machine_id: @@machine_id, process_id: @@process_id, count: next_count)"}},{"html_id":"new(time:B4,machine_id:B3,process_id:B2,count:B3)-class-method","name":"new","abstract":false,"args":[{"name":"time","external_name":"time","restriction":"B4"},{"name":"machine_id","external_name":"machine_id","restriction":"B3"},{"name":"process_id","external_name":"process_id","restriction":"B2"},{"name":"count","external_name":"count","restriction":"B3"}],"args_string":"(time : B4, machine_id : B3, process_id : B2, count : B3)","args_html":"(time : <a href=\"B4.html\">B4</a>, machine_id : <a href=\"B3.html\">B3</a>, process_id : <a href=\"B2.html\">B2</a>, count : <a href=\"B3.html\">B3</a>)","location":{"filename":"src/xid.cr","line_number":23,"url":null},"def":{"name":"new","args":[{"name":"time","external_name":"time","restriction":"B4"},{"name":"machine_id","external_name":"machine_id","restriction":"B3"},{"name":"process_id","external_name":"process_id","restriction":"B2"},{"name":"count","external_name":"count","restriction":"B3"}],"visibility":"Public","body":"_ = allocate\n_.initialize(time, machine_id, process_id, count)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"html_id":"==(other:self)-instance-method","name":"==","abstract":false,"args":[{"name":"other","external_name":"other","restriction":"self"}],"args_string":"(other : self)","args_html":"(other : <span class=\"k\">self</span>)","location":{"filename":"src/xid.cr","line_number":28,"url":null},"def":{"name":"==","args":[{"name":"other","external_name":"other","restriction":"self"}],"visibility":"Public","body":"if @time == (other.@time)\nelse\n  return false\nend\nif @machine_id == (other.@machine_id)\nelse\n  return false\nend\nif @process_id == (other.@process_id)\nelse\n  return false\nend\nif @count == (other.@count)\nelse\n  return false\nend\ntrue\n"}},{"html_id":"as_bytes:Bytes-instance-method","name":"as_bytes","doc":"`Xid` **read only** bytes view\n\nExample:\n\n```\nxid = Xid.generate\nputs xid.as_bytes\n```","summary":"<p><code><a href=\"Xid.html\">Xid</a></code> <strong>read only</strong> bytes view</p>","abstract":false,"location":{"filename":"src/xid.cr","line_number":100,"url":null},"def":{"name":"as_bytes","return_type":"Bytes","visibility":"Public","body":"Bytes.new((pointerof(@time)).as(::Pointer(UInt8)), 12, read_only: true)"}},{"html_id":"clone-instance-method","name":"clone","abstract":false,"location":{"filename":"src/xid.cr","line_number":23,"url":null},"def":{"name":"clone","visibility":"Public","body":"self.class.new(@time.clone, @machine_id.clone, @process_id.clone, @count.clone)"}},{"html_id":"copy_with(time_time=@time,machine_id_machine_id=@machine_id,process_id_process_id=@process_id,count_count=@count)-instance-method","name":"copy_with","abstract":false,"args":[{"name":"_time","default_value":"@time","external_name":"time","restriction":""},{"name":"_machine_id","default_value":"@machine_id","external_name":"machine_id","restriction":""},{"name":"_process_id","default_value":"@process_id","external_name":"process_id","restriction":""},{"name":"_count","default_value":"@count","external_name":"count","restriction":""}],"args_string":"(time _time = @time, machine_id _machine_id = @machine_id, process_id _process_id = @process_id, count _count = @count)","args_html":"(time _time = @time, machine_id _machine_id = @machine_id, process_id _process_id = @process_id, count _count = @count)","location":{"filename":"src/xid.cr","line_number":23,"url":null},"def":{"name":"copy_with","args":[{"name":"_time","default_value":"@time","external_name":"time","restriction":""},{"name":"_machine_id","default_value":"@machine_id","external_name":"machine_id","restriction":""},{"name":"_process_id","default_value":"@process_id","external_name":"process_id","restriction":""},{"name":"_count","default_value":"@count","external_name":"count","restriction":""}],"visibility":"Public","body":"self.class.new(_time, _machine_id, _process_id, _count)"}},{"html_id":"count:UInt32-instance-method","name":"count","doc":"resolve count from `Xid`\n\nExample:\n\n```\nxid = Xid.generate\nputs xid.count\n```","summary":"<p>resolve count from <code><a href=\"Xid.html\">Xid</a></code></p>","abstract":false,"location":{"filename":"src/xid.cr","line_number":161,"url":null},"def":{"name":"count","return_type":"UInt32","visibility":"Public","body":"v = @count\n((v[0].to_u32 << 16) | (v[1].to_u32 << 8)) | v[2].to_u32\n"}},{"html_id":"debug-instance-method","name":"debug","doc":"print `Xid` debug info\n\nExample:\n\n```\nxid = Xid.generate\nxid.debug\n```","summary":"<p>print <code><a href=\"Xid.html\">Xid</a></code> debug info</p>","abstract":false,"location":{"filename":"src/xid.cr","line_number":174,"url":null},"def":{"name":"debug","visibility":"Public","body":"puts(((\"XID\".ljust(15)) + \" : \") + self.inspect)\nputs(((\"XID string\".ljust(15)) + \" : \") + self.to_s)\nputs(((\"XID time\".ljust(15)) + \" : \") + time().inspect)\nputs(((\"XID machine_id\".ljust(15)) + \" : \") + machine_id().inspect)\nputs(((\"XID process_id\".ljust(15)) + \" : \") + process_id().inspect)\nputs(((\"XID count\".ljust(15)) + \" : \") + count().inspect)\n"}},{"html_id":"machine_id:UInt32-instance-method","name":"machine_id","doc":"resolve machine id from `Xid`\n\nExample:\n\n```\nxid = Xid.generate\nputs xid.machine_id\n```","summary":"<p>resolve machine id from <code><a href=\"Xid.html\">Xid</a></code></p>","abstract":false,"location":{"filename":"src/xid.cr","line_number":136,"url":null},"def":{"name":"machine_id","return_type":"UInt32","visibility":"Public","body":"v = @machine_id\n((v[0].to_u32 << 16) | (v[1].to_u32 << 8)) | v[2].to_u32\n"}},{"html_id":"process_id:UInt16-instance-method","name":"process_id","doc":"resolve process id from `Xid`\n\nExample:\n\n```\nxid = Xid.generate\nputs xid.process_id\n```","summary":"<p>resolve process id from <code><a href=\"Xid.html\">Xid</a></code></p>","abstract":false,"location":{"filename":"src/xid.cr","line_number":149,"url":null},"def":{"name":"process_id","return_type":"UInt16","visibility":"Public","body":"IO::ByteFormat::BigEndian.decode(UInt16, @process_id.to_slice)"}},{"html_id":"time:Time-instance-method","name":"time","doc":"resolve time from `Xid`\n\nExample:\n\n```\nxid = Xid.generate\nputs xid.time\n```","summary":"<p>resolve time from <code><a href=\"Xid.html\">Xid</a></code></p>","abstract":false,"location":{"filename":"src/xid.cr","line_number":124,"url":null},"def":{"name":"time","return_type":"Time","visibility":"Public","body":"Time.unix(IO::ByteFormat::BigEndian.decode(UInt32, @time.to_slice))"}},{"html_id":"to_s:String-instance-method","name":"to_s","doc":"`Xid` to base32 string\n\nExample:\n\n```\nxid = Xid.generate\nputs xid.to_s\n```","summary":"<p><code><a href=\"Xid.html\">Xid</a></code> to base32 string</p>","abstract":false,"location":{"filename":"src/xid.cr","line_number":112,"url":null},"def":{"name":"to_s","return_type":"String","visibility":"Public","body":"base32_encode(as_bytes)"}}]}]}})