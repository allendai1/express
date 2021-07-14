const express = require('express')
const app = express();
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
  } = require('graphql')

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "HelloWorld",
        fields: ()=>({
            message: {
                type: GraphQLString,
                resolve: ()=>"Hello World"
            }
        })
    })
})
const { graphqlHTTP } = require('express-graphql');
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql : true
}))

app.get("/",(req,res)=>{
    res.send("THIS IS AN EXPRESS APP")
})

app.listen(5000,()=>console.log("server is runnning"))