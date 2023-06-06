import express from "express";
import amqp from "amqplib/callback_api.js";
const app = express();

app.use(express.json());

amqp.connect(
  "amqps://yfyqemem:58it7_uThZ2ROOJcVnyhZ-DMxyG13kR2@shark.rmq.cloudamqp.com/yfyqemem",
  function (error0, connection) {
    if (error0) {
      throw error0;
    }

    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }

      channel.assertQueue("test_queue", {
        durable: false,
      });

      channel.sendToQueue("test_queue", Buffer.from("hello"));
      console.log("hey");
    });
  }
);
