describe("pingPong", function() {
  it("numbers divisible by 3 become 'ping'", function() {
    expect(pingPong(6)).to.equal("ping");
  });

  it("numbers divisible by 5 become 'pong'", function() {
    expect(pingPong(10)).to.equal("pong");
  });

  it("numbers divisible by 3 and 5 become 'pingpong'", function() {
    expect(pingPong(15)).to.equal("pingpong");
  });

  it("number divisible by 3 and 5 have to be only 'pingpong'", function() {
    expect(pingPong(30)).to.equal("pingpong");
  });

  it("number not divisible by 3 or 5 supposed to stay number", function() {
    expect(pingPong(2)).to.equal(2);
  });
});

describe("sequenceMaker", function() {
  it("chosen number must be equal to sequence of elements according rulls", function() {
    expect(sequenceMaker(16)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "pingpong", 16]);
  });
});
