import app from "./index"
import "./model/connectdb"

app.listen({ port: process.env.PORT || 3000 }, () => {
    console.log(`🚀 Server ready at port 3000`);
  }); 

