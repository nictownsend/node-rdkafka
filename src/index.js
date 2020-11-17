var Kafka = require("node-rdkafka");

var config = {
  // "socket.timeout.ms": "10000",
  // retries: 10,
  "security.protocol": "SASL_SSL",
  "metadata.broker.list":
    "development-kafka-bootstrap-es.apps.fourfive.cp.fyre.ibm.com:443",
  "sasl.username": "asdasdasdasd",
  "sasl.mechanisms": "SCRAM-SHA-512",
  "ssl.ca.location": "kafka-ca.pem",
  "sasl.password": "hsy0EpoudccT",
  debug: "security, protocol",
};

var producer = new Kafka.Producer(config);

producer
  .connect()
  .on("ready", (i, metadata) => {
    console.log("ready");
    console.dir(i);
    console.dir(metadata);
    producer.disconnect();
  })
  .on("event.error", console.error)
  .on("event.log", console.log)
  .on("disconnected", console.log);
