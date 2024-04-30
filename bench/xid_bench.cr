require "benchmark"
require "uuid"
require "../src/xid.cr"

Benchmark.ips(warmup: 4, calculation: 10) do |x|
  x.report "xid generate" do
    Xid.generate.to_s
  end

  x.report "uuid-v4 generate" do
    UUID.random.to_s
  end
end
