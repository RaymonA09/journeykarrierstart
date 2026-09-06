export const Inquiry = {
  create: async (data) => ({ id: Date.now().toString(), ...data }),
  list: async () => [],
};