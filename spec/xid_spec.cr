require "./spec_helper"

describe Xid do
  it "xid: from_s and to_s" do
    s = "9m4e2mr0ui3e8a215n4g"
    xid = Xid.from_s s
    xid.to_s.should eq s
  end

  it "xid: from bytes" do
    xid = Xid.from_bytes UInt8.static_array(
      0x4d, 0x88, 0xe1, 0x5b, 0x60, 0xf4, 0x86, 0xe4, 0x28, 0x41, 0x2d, 0xc9
    )
    xid.to_s.should eq "9m4e2mr0ui3e8a215n4g"
  end

  it "xid: generate" do
    xid = Xid.generate
    xid.debug
  end

  it "xid: ==" do
    xid = Xid.generate
    xid2 = Xid.from_bytes xid.as_bytes
    xid2.should eq xid
  end

  it "iterate" do
    bytes = UInt8.static_array(
      0x4d, 0x88, 0xe1, 0x5b, 0x60, 0xf4, 0x86, 0xe4, 0x28, 0x41, 0x2d, 0xc9
    )
    xid = Xid.from_bytes bytes
    xid.each_with_index do |b, i|
      b.should eq bytes[i]
    end
  end

  # NOTE: would be disordered in a second when counter overflow 3bytes
  #
  it "xid: ordered!" do
    r = 1_000_000.times.map do |_|
      Xid.generate.to_s
    end

    prev = ""
    curr = ""
    r.each do |it|
      curr = it
      if curr > prev
        prev = curr
      else
        puts "-" * 66
        Xid.from_s(prev).debug
        puts "-" * 66
        Xid.from_s(curr).debug
        raise "disordered!"
      end
    end
  end
end
