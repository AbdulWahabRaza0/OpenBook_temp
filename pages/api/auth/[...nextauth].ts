import TwitterProvider from 'next-auth/providers/twitter';

import NextAuth from 'next-auth/next';

export const authOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITER_Key!,
      clientSecret: process.env.TWITER_base!,
      token: {
        url: '',
        async request({ client, params, checks, provider }) {
          const response = await client.oauthCallback(
            provider.callbackUrl,
            params,
            checks,
            {
              exchangeBody: {
                client_id: process.env.TWITER_Key,
                client_secret: process.env.TWITER_base,
              },
            }
          );
          return {
            tokens: response,
          };
        },
      },
    }),
  ],
};

export default NextAuth(authOptions);
// AAAAAAAAAAAAAAAAAAAAAMmnmAEAAAAAO0LaW97BRGTrNnK6XysBFPaaPnM%3DNLoemOwxyvkdT9dgXPivK99gO5iMj17faeDgaUFKjhWiiEbUIY
