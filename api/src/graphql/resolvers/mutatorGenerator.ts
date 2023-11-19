import camelCase from "../../utils/camelCase";

export const mutationFunctions = (type: any) => {
  return {
    [`create${camelCase(type)}`]: async (_, args, context) => {
      const inputs: {} = Object.values(args)[0];
      const data = await context.prisma[type].create({
        data: {
          ...inputs,
        },
      });
      return data;
    },
    [`update${camelCase(type)}`]: async (_, args, context) => {
      const inputs: {} = Object.values(args)[0];
      const data = await context.prisma[type].update({
        where: {
          id: args.id,
        },
        data: {
          ...inputs,
        },
      });
      return data;
    },
    [`delete${camelCase(type)}`]: async (_, args, context) => {
      const data = await context.prisma[type].delete({
        where: {
          id: args.id,
        },
      });
      return data;
    },
  };
};
