import { Button } from '@/component/Button';
import { H1 } from '@/component/Typography';
import Link from 'next/link';
import styled from 'styled-components';
import { WrapperFlex } from './Style';
import { client } from '../service/client';
import TwitterLogin from 'react-twitter-login';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/Hooks';
import { setHandler, setToken } from '@/redux/reducer/stateReducer';

const Wrapper = styled.div`
  height: 100vh;
  background: #db5c4d;
  display: flex;
  justify-content: center;
`;
const CoverContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const CoverContentMain = styled.div`
  display: flex;
  align-items: center;
`;
export default function Cover() {
  const { data: session } = useSession();
  const [exist, setExist] = useState(false);
  const dispatch = useAppDispatch();

  async function twiterOth() {
    if (session) {
      try {
        const res = await client.post('auth/register', {
          twitterId: '1544723188185194497',
          username: session?.user?.name,
          twitterHandle: 'HaiderPlayIn',
          email: session?.user?.email,
          twitterPicture: session?.user?.image,
        });
        if (res.data.token) {
          dispatch(setToken(res.data.token));
        }
        console.log(res.data.user.twitterHandle);
        if (res.data.user.twitterHandle) {
          dispatch(setHandler(res.data.user.twitterHandle));
        }
        if (res.data.existing === true) {
          setExist(true);
        }
      } catch (error: any) {
        console.log(error);
      }
    }
  }
  twiterOth();
  // async function twiterauth() {
  //   try {
  //     const res = await client.get('auth/twitter');
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  function authHandler(err: any, data: any) {
    console.log(err, data);
  }

  return (
    <>
      <Wrapper>
        <CoverContent data-aos='zoom-in'>
          <CoverContentMain>
            <img width={'192px'} height={'192px'} src='/assets/book.svg' />
            <H1 style={{ marginLeft: '40px' }} weight='500' fontSize='9.5vw'>
              OpenBook
            </H1>
          </CoverContentMain>
          <br />
          <br />
          <WrapperFlex>
            {session && (
              <Button color='white' bg='#0f0f10'>
                <Link
                  style={{ color: 'white', textDecoration: 'none' }}
                  href={exist === true ? '/Dashboard' : '/boarding'}
                >
                  Launch App
                </Link>
              </Button>
            )}
            {/* {!session && ( */}
            <Button
              onClick={async () => {
                if (!session) {
                  await signIn();
                } else {
                  await signOut();
                }
              }}
              className='mx-3'
              color='white'
              bg='#0f0f10'
            >
              {session ? 'Logout' : 'Login'} {session ? 'From' : 'with'} Twitter
            </Button>
            {/* )} */}
          </WrapperFlex>
        </CoverContent>
      </Wrapper>
    </>
  );
}
