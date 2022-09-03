# Node js application for sending authomatic messages on whatsapp
for running the application:
- clone the repository
- go inside the `send_message_on_whatsapp_with_node` folder
- install the packages wit `npm install`
- create inside the folder the csv file as following:
    ```
    phone,arg1,arg2
    +39phoneNumber,A1,A2
    ```
    for example:
    ``` 
    phone,name,surname
    +391111111111,X,XX
    +392222222222,Y,YY
    ```
- then run the script with: `node index.js ./filename.csv "message"` where filename is the filename of your csv file and message is the message that you want to send (in case of variable put them inside {{ }} ex. "this is a message sent to {{name}} {{surname}}")
