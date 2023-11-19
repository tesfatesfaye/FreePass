const queryFunctionSingle = (type: any) => {
  // returns a single value from table any table
  return {
    [type]: async (_, args, context) => {
      const data = await context.prisma[type].findUnique({
        where: {
          id: args.id,
        },
      });
      return data;
    },
  };
};

const queryFunctionAll = (type: any) => {
  // returns multiple values from tale to be used on the app's initial load
  return {
    [type]: async (parent, _, context) => {
      const data = await context.prisma[type].findMany({
        where: {
          userId: parent.id,
        },
      });
      return data;
    },
  };
};

export { queryFunctionAll, queryFunctionSingle };
