import { GraphQLServer } from 'graphql-yoga';
import 'reflect-metadata';
import { buildSchema, Resolver, Query, Arg } from 'type-graphql';

@Resolver()
class HelloResolver {
  @Query(returns => String)
  async hello(@Arg('name') name: string) {
    return `Hello ${name || 'World'}`;
  }
}

export default async function bootstrapServer(port) {
  const schema = await buildSchema({
    resolvers: [HelloResolver],
    emitSchemaFile: true
  });

  const server = new GraphQLServer({
    schema
  });

  return server.start({ port }, () => {
    console.log(`Server is running on port ${port}`);
  });
}
