/**
 * Initialize the database with the necessary data to run the application.
 * https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/
 */

db.createUser({
  user: "nidus",
  pwd: "nidus",
  roles: [
    {
      role: "readWrite",
      db: "nidus",
    },
  ],
});

/**
 * Users
 */
db.users.drop();
db.users.insertMany([
  {
    name: "Alex",
    email: "",
    password: "",
  },
  {
    name: "Kriss",
    email: "",
    password: "",
  },
]);

/**
 * Zones
 */
db.zones.drop();
db.zones.insertMany([
  {
    name: "bedroom",
  },
  {
    name: "bathroom",
  },
  {
    name: "kitchen",
  },
  {
    name: "living room",
  },
  {
    name: "dining room",
  },
  {
    name: "entryway",
  },
  {
    name: "basement",
  },
  {
    name: "garage",
  },
  {
    name: "shed",
  },
]);

/**
 * Capabilities
 */
db.capabilities.drop();
db.capabilities.insertMany([
  {
    type: "sensor",
    kind: "pressure",
  },
  {
    type: "sensor",
    kind: "temperature",
  },
  {
    type: "sensor",
    kind: "humidity",
  },
  {
    type: "sensor",
    kind: "fluid",
  },
  {
    type: "sensor",
    kind: "vibration",
  },
  {
    type: "sensor",
    kind: "smoke",
  },
  {
    type: "sensor",
    kind: "motion",
  },
]);
