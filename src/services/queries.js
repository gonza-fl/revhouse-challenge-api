const Query = {
  updateUser: (id) => ({
    where: {
      id,
    },
  }),
  includes: (model, required, attributes) => ({
    include: [
      {
        model,
        required,
        attributes,
      },
    ],
  }),
};

module.exports = Query;
