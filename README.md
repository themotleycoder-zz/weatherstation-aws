# weatherstation-aws
AWS serverless code deployment

This Serverless implementation requires a file called env.yml to load environmental metadata from the file should be formatted as follows:

    default_env: &default_env
      REGION: '<region>'
      ACCOUNTID: '<acountid>'
      DBNAME: <name of your db>
      WEATHERDBROLENAME: <role name for your db>
      IOTRULENAME: <name of IoT rule>
      IOTROLENAME: <role name for IoT rule>
      CERTID: <id of cert used to validate devices>    
    
    dev:
      <<: *default_env
