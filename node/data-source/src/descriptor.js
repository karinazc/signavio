module.exports = {
  key: "customers",
  name: "Customers",
  description: "A database with all customers.",
  typeDescriptors: [
    {
      "key" : "customer",
      "name" : "Customer",
      "fields" : [
        {
          "key" : "fullName",
          "name" : "Name",
          "type" : {
            "name" : "text"
          }
        }, {
          "key" : "email",
          "name" : "Email",
          "type" : {
            "name" : "emailAddress"
          }
        }, {
          "key" : "subscriptionType",
          "name" : "Type of the subscription",
          "type" : {
            "name" : "choice",
            "options" : [
                    {
                            "id" : "bronze",
                            "name" : "Bronze"
                    }, {
                            "id" : "silver",
                            "name" : "Silver"
                    }, {
                            "id" : "gold",
                            "name" : "Gold"
                    }
            ]
          }
        }, {
          "key" : "discount",
          "name" : "Discount",
          "type" : {
            "name" : "number"
          }
        }, {
          "key" : "since",
          "name" : "Registration date",
          "type" : {
            "name" : "date",
            "kind" : "datetime"
          }
        }
      ],
      "optionsAvailable" : true,
      "fetchOneAvailable" : true
    }
  ],
  version: 1,
  protocolVersion: 1
}
