export const base44 = {
  entities: new Proxy({}, {
    get: (_, entityName) => ({
      list: async () => [],
      filter: async () => [],
      create: async (data) => ({ id: Date.now().toString(), ...data }),
      update: async (id, data) => ({ id, ...data }),
      delete: async () => {},
      schema: async () => ({}),
    })
  }),
  auth: {
    me: async () => null,
    logout: () => {},
    redirectToLogin: () => {},
    isAuthenticated: async () => false,
    updateMe: async () => {},
  },
  integrations: { Core: {} },
  analytics: { track: () => {} },
};