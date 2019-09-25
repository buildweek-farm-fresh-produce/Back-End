define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/shop/login",
    "title": "Consumer Login Request",
    "name": "Consumer_Login",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User Message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"Welcome\",\n \"user\": {\n   \"id\": 5,\n   \"username\": \"example\",\n   \"email\": \"example@gmonk.com\",\n   \"password\": \"$2a$14$IF9EQY7mpuNU2a5TVAAE8O7GLmcHBFRvEiv5jCl5RT1uJa1mojudS\",\n   \"city_id\": 1,\n   \"state_id\": 1\n },\n \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGd1c2VyMTAwIiwidXNlclR5cGUiOiJjb25zdW1lciIsImlhdCI6MTU2OTM0NzE3NiwiZXhwIjoxNTY5NDMzNTc2fQ.EfLfuc_DcYZ5TtjM-Zpd7mwkUPozNhYh-i5jg3YQ-us\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"username\": \"example\",\n\t\"password\": \"password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth-router.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/auth/shop/register",
    "title": "Consumer Register Request",
    "name": "Consumer_Register",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User Message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n \"message\": \"Welcome\",\n \"user\": {\n   \"id\": 5,\n   \"username\": \"example\",\n   \"email\": \"example@gmail.com\",\n   \"password\": \"$2a$14$IF9EQY7mpuNU2a5TVAAE8O7GLmcHBFRvEiv5jCl5RT1uJa1mojudS\",\n   \"city_id\": 1,\n   \"state_id\": 1\n },\n \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGd1c2VyMTAwIiwidXNlclR5cGUiOiJjb25zdW1lciIsImlhdCI6MTU2OTM0NzE3NiwiZXhwIjoxNTY5NDMzNTc2fQ.EfLfuc_DcYZ5TtjM-Zpd7mwkUPozNhYh-i5jg3YQ-us\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"username\": \"example\",\n\t\"email\": \"example@gmonk.com\",\n\t\"password\": \"password\",\n\t\"city_id\": \"1\",\n\t\"state_id\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth-router.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/auth/farmer/login",
    "title": "Farmer Login Request",
    "name": "Farmer_Login",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"user\": {\n   \"id\": 5,\n   \"username\": \"example\",\n   \"email\": \"example@gmonk.com\",\n   \"password\": \"$2a$14$IF9EQY7mpuNU2a5TVAAE8O7GLmcHBFRvEiv5jCl5RT1uJa1mojudS\",\n },\n \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGd1c2VyMTAwIiwidXNlclR5cGUiOiJjb25zdW1lciIsImlhdCI6MTU2OTM0NzE3NiwiZXhwIjoxNTY5NDMzNTc2fQ.EfLfuc_DcYZ5TtjM-Zpd7mwkUPozNhYh-i5jg3YQ-us\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"username\": \"example\",\n\t\"password\": \"password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth-router.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/auth/farmer/register",
    "title": "Farmer Register Request",
    "name": "Farmer_Register",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User Message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n \"message\": \"Welcome\",\n \"user\": {\n   \"id\": 5,\n   \"username\": \"example\",\n   \"email\": \"example@gmail.com\",\n   \"password\": \"$2a$14$IF9EQY7mpuNU2a5TVAAE8O7GLmcHBFRvEiv5jCl5RT1uJa1mojudS\"\n },\n \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicGd1c2VyMTAwIiwidXNlclR5cGUiOiJjb25zdW1lciIsImlhdCI6MTU2OTM0NzE3NiwiZXhwIjoxNTY5NDMzNTc2fQ.EfLfuc_DcYZ5TtjM-Zpd7mwkUPozNhYh-i5jg3YQ-us\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"username\": \"example\",\n\t\"email\": \"example@gmonk.com\",\n\t\"password\": \"password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth-router.js",
    "groupTitle": "Auth"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/docs/main.js",
    "group": "C__Users_arman_Documents_Back_End_docs_docs_main_js",
    "groupTitle": "C__Users_arman_Documents_Back_End_docs_docs_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C__Users_arman_Documents_Back_End_docs_main_js",
    "groupTitle": "C__Users_arman_Documents_Back_End_docs_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/api/consumers/:id",
    "title": "Get Consumer By Id",
    "name": "GetConsumerById",
    "group": "Consumers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User_Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>User City_Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state_id",
            "description": "<p>User State_Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"id\": 1,\n \"username\": \"consumer_1\",\n \"email\": \"consumer_1@gmail.com\",\n \"password\": \"password\",\n \"city_id\": 1,\n \"state_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/consumer_routes/consumer_router.js",
    "groupTitle": "Consumers"
  },
  {
    "type": "get",
    "url": "/api/:consumerId/orders",
    "title": "Get Consumer Order History",
    "name": "GetConsumerOrders",
    "group": "Consumers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Consumer Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "orders",
            "description": "<p>array of a consumers past orders</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"recent_orders\": [\n   {\n     \"shipping_address\": \"Example Rd.\",\n     \"purchase_date\": \"2019-10-07\",\n     \"delivered\": false,\n     \"item_purchased\": \"corn\",\n     \"quantity\": 18,\n     \"seller\": \"A.R. Farms\"\n   },\n   {\n     \"shipping_address\": \"Example Rd.\",\n     \"purchase_date\": \"2019-10-07\",\n     \"delivered\": false,\n     \"item_purchased\": \"potato\",\n     \"quantity\": 5,\n     \"seller\": \"Organic Farms\"\n   },\n   {\n     \"shipping_address\": \"Example Rd.\",\n     \"purchase_date\": \"2019-10-07\",\n     \"delivered\": false,\n     \"item_purchased\": \"potato\",\n     \"quantity\": 6,\n     \"seller\": \"Blueberry Farms\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/consumer_routes/consumer_router.js",
    "groupTitle": "Consumers"
  },
  {
    "type": "get",
    "url": "/api/consumers/farms/:cityId/:stateId",
    "title": "Get Local Farms",
    "name": "GetLocalFarms",
    "group": "Consumers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cityId",
            "description": "<p>City_Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "stateId",
            "description": "<p>State_Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "farms",
            "description": "<p>array of farm objects near consumer location</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"name\": \"A.R. Farms\",\n   \"address\": \"2213 Orchard Rd.\",\n   \"year_founded\": 1908,\n   \"bio\": \"We are a farm.\",\n   \"id\": 2\n },\n {\n   \"name\": \"Blueberry Farms\",\n   \"address\": \"21576 Albers Rd.\",\n   \"year_founded\": 1963,\n   \"bio\": \"Locally Grown Produce.\",\n   \"id\": 4\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/consumer_routes/consumer_router.js",
    "groupTitle": "Consumers"
  },
  {
    "type": "post",
    "url": "/api/farmers/produce/categories",
    "title": "Add Produce Category",
    "name": "AddProduceCategory",
    "group": "Farmers_Produce",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "category_id",
            "description": "<p>Produce category_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 201 CREATED\n{ \n \"new_category\": {\n   \"id\": 6,\n   \"name\": \"example\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"name\": \"example\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/farmer_produce_router.js",
    "groupTitle": "Farmers_Produce"
  },
  {
    "type": "post",
    "url": "/api/farmers/produce/:farmId",
    "title": "Add Produce Item",
    "name": "AddProduceItem",
    "group": "Farmers_Produce",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "produce_item_id",
            "description": "<p>Produce produce_item_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "{\n \"id\": 8,\n \"name\": \"example\",\n \"quantity\": 20,\n \"price\": 0.8,\n \"category_id\": 1,\n \"farm_id\": 3\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"name\": \"example\",\n \"quantity\": 20,\n \"price\": 0.8,\n \"category_id\": 4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/farmer_produce_router.js",
    "groupTitle": "Farmers_Produce"
  },
  {
    "type": "get",
    "url": "/api/farmers/produce/:farmId",
    "title": "Get All Produce For A Farm",
    "name": "GetFarmProduce",
    "group": "Farmers_Produce",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "produce_items",
            "description": "<p>array of produce item objects belonging to a farm</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"current_stock\": [\n   {\n     \"id\": 5,\n     \"name\": \"potato\",\n     \"quantity\": 100,\n     \"price\": 0.8,\n     \"category_id\": 2,\n     \"farm_id\": 3\n   },\n   {\n     \"id\": 6,\n     \"name\": \"watermelon\",\n     \"quantity\": 100,\n     \"price\": 0.95,\n     \"category_id\": 2,\n     \"farm_id\": 3\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/farmer_produce_router.js",
    "groupTitle": "Farmers_Produce"
  },
  {
    "type": "get",
    "url": "/api/farmers/produce/categories",
    "title": "Get Produce Categories For A Farmer",
    "name": "GetProduceCategories",
    "group": "Farmers_Produce",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "produce_categories",
            "description": "<p>array of produce category objects available to farmers</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"categories\": [\n   {\n     \"id\": 1,\n     \"name\": \"fruits\"\n   },\n   {\n     \"id\": 2,\n     \"name\": \"vegetables\"\n   },\n   {\n     \"id\": 3,\n     \"name\": \"grains\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/farmer_produce_router.js",
    "groupTitle": "Farmers_Produce"
  },
  {
    "type": "post",
    "url": "/api/auth/consumers/order/:consumerId",
    "title": "Post Consumer Order",
    "name": "Consumer_Order",
    "group": "Shopping",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Order",
            "description": "<p>consumer Order</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 201 Created\n{\n \"order\": {\n   \"order_details\": 30,\n   \"orderItems\": {\n     \"shipping_address\": \"Test Rd.\",\n     \"purchase_date\": \"2019-10-07\",\n     \"delivered\": 0,\n     \"item_purchased\": \"corn\",\n     \"quantity\": 18,\n     \"seller\": \"A.R. Farms\"\n   }\n }\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n   \"shipping_address\": \"Test Rd.\",\n   \"purchase_date\": \"2019-10-07\",\n   \"delivered\": 0,\n   \"order_items\":[\n       {\n           \"quantity\":18,\n           \"produce_item_id\": 2,\n           \"farm_id\":2\n       },\n       {\n           \"quantity\":5,\n           \"produce_item_id\": 5,           \n           \"farm_id\":1\n       },\n       {\n           \"quantity\":6,\n           \"produce_item_id\": 5,\n           \"farm_id\":4\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/consumer_routes/consumer_router.js",
    "groupTitle": "Shopping"
  },
  {
    "type": "get",
    "url": "/api/consumers/shop/categories",
    "title": "Get Shopping Categories",
    "name": "GetCategories",
    "group": "Shopping",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "categories",
            "description": "<p>array of produce categories to shop from.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 1,\n   \"name\": \"fruits\"\n },\n {\n   \"id\": 2,\n   \"name\": \"vegetables\"\n },\n {\n   \"id\": 3,\n   \"name\": \"grains\"\n },\n {\n   \"id\": 4,\n   \"name\": \"meats\"\n },\n {\n   \"id\": 5,\n   \"name\": \"dairy\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/consumer_routes/consumer_router.js",
    "groupTitle": "Shopping"
  },
  {
    "type": "get",
    "url": "/api/consumers/shop/:category/:categoryId",
    "title": "Get Shopping Category Items",
    "name": "GetCategoryItems",
    "group": "Shopping",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "categoryId",
            "description": "<p>Category_Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "produce",
            "description": "<p>item array of produce items in specified category</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 3,\n   \"name\": \"apple\",\n   \"quantity\": 100,\n   \"price\": 1.8,\n   \"category_id\": 1,\n   \"farm_id\": 2,\n   \"farm_name\": \"A.R. Farms\"\n },\n {\n   \"id\": 4,\n   \"name\": \"peach\",\n   \"quantity\": 100,\n   \"price\": 1.95,\n   \"category_id\": 1,\n   \"farm_id\": 2,\n   \"farm_name\": \"A.R. Farms\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/consumer_routes/consumer_router.js",
    "groupTitle": "Shopping"
  },
  {
    "type": "post",
    "url": "/api/tools/farms/:farmId",
    "title": "Add Tool",
    "name": "AddTool",
    "group": "Tools",
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"name\": \"Wheel Barrow\" ,\n\t\"tool_category_id\": 2 ,\n\t\"farm_tool_data\": {\n\t\t\"quantity\": 3,\n\t\t\"tool_id\": 10\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "with",
            "description": "<p>new tool id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n \"new_tool\": 23\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/tools_router.js",
    "groupTitle": "Tools"
  },
  {
    "type": "post",
    "url": "/api/tools/categories",
    "title": "Add Tool Category",
    "name": "AddToolCategory",
    "group": "Tools",
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n\t\"name\": \"example\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "of",
            "description": "<p>tool category posted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"id\": 1,\n   \"name\": \"example\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/tools_router.js",
    "groupTitle": "Tools"
  },
  {
    "type": "get",
    "url": "/api/tools/categories",
    "title": "Get Tool Categories",
    "name": "GetToolCategories",
    "group": "Tools",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects[]",
            "optional": false,
            "field": "tools",
            "description": "<p>array of tool category objects available to farmers</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 1,\n   \"name\": \"machinery\"\n },\n {\n   \"id\": 2,\n   \"name\": \"hand\"\n },\n {\n   \"id\": 3,\n   \"name\": \"irrigation\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/tools_router.js",
    "groupTitle": "Tools"
  },
  {
    "type": "get",
    "url": "/api/tools/category/:categoryId",
    "title": "Get Tool Category By Id",
    "name": "GetToolCategoryById",
    "group": "Tools",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Objects",
            "optional": false,
            "field": "tool_category",
            "description": "<p>tool category requested</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"id\": 1,\n   \"name\": \"machinery\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/tools_router.js",
    "groupTitle": "Tools"
  },
  {
    "type": "get",
    "url": "/api/tools/farm/:farmId",
    "title": "Get A Farms Tools By Id",
    "name": "Get_A_Farms_Tools",
    "group": "Tools",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "tools_array",
            "description": "<p>of a farms current tool inventory</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"name\": \"Harvester\",\n   \"quantity\": 10,\n   \"farm_tool_id\": 13,\n   \"farm_id\": 3\n },\n {\n   \"name\": \"Tree Shaker\",\n   \"quantity\": 20,\n   \"farm_tool_id\": 14,\n   \"farm_id\": 3\n },\n {\n   \"name\": \"Tiller\",\n   \"quantity\": 7,\n   \"farm_tool_id\": 15,\n   \"farm_id\": 3\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/tools_router.js",
    "groupTitle": "Tools"
  },
  {
    "type": "get",
    "url": "/api/tools/:farmId/:farmId",
    "title": "Get Single Tool By Id",
    "name": "Get_A_Single_Tool_From_A_Farm",
    "group": "Tools",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": "<p>of a single tools status for a farm</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"name\": \"Tree Shaker\",\n \"quantity\": 20,\n \"farm_tool_id\": 14,\n \"farm_id\": 3\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/tools_router.js",
    "groupTitle": "Tools"
  },
  {
    "type": "get",
    "url": "/api/tools/",
    "title": "Get All Tools",
    "name": "Get_All_Tools",
    "group": "Tools",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": "<p>of all tool options for a farm</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": 1,\n    \"name\": \"Harvester\",\n    \"tool_category_id\": 1\n  },\n  {\n    \"id\": 2,\n    \"name\": \"Tree Shaker\",\n    \"tool_category_id\": 1\n  },\n  {\n    \"id\": 3,\n    \"name\": \"Tiller\",\n    \"tool_category_id\": 1\n  },\n  {\n    \"id\": 4,\n    \"name\": \"Shovel\",\n    \"tool_category_id\": 2\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/tools_router.js",
    "groupTitle": "Tools"
  }
] });
