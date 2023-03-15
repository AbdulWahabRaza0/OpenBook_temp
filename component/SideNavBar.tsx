import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { H1, P } from './Typography';
import Image from 'next/image';
import { WrapeMargin, WrapperFlex } from './Style';
import { Spacer } from './Spacer';
import { useState } from 'react';
import { Button } from './Button';
import { setState } from '@/redux/reducer/stateReducer';
import { useSession, signIn, signOut } from 'next-auth/react';

import { useAppDispatch, useAppSelector } from '@/redux/Hooks';

interface bg {
  bg?: string;
  border?: string;
}
const Wrapper = styled.div`
  background: #0f0f10;
  // width: 500px;
  height: 100vh;
  border-right: 1px solid #252627;
  position: relative;

  // overflow-y: scroll;
  // ::-webkit-scrollbar {
  //   display: none;
  // }
`;
const UL = styled.ul`
  list-style: none;
  padding-left: 6px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Scrool = styled.div`
  height: 70vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const LI = styled.li<bg>`
  padding: 12px 16px;
  cursor: pointer;
  border-radius: 7px;
  background: ${(props) => props.bg && props.bg};
  border: ${(props) => props.border && props.border};
  margin: 0px 20px 5px 0px;
  box-sizing: border-box;
  :hover {
    background: #1b1c1d;
    border-radius: 7px;
  }
`;
export default function SideNavBar() {
  const [active, setActive] = useState('Daily');
  const dispatch = useAppDispatch();
  const state: any = useAppSelector((states) => states.user);
  console.log(state, 'fhdsfhdjfdsjfg');
  const { data: session } = useSession();
  console.log('i am the session data', session);

  return (
    <>
      <Wrapper>
        <Spacer height='50px' />
        <Container>
          <WrapperFlex justifyContent='space-around' alignItems='center'>
            <WrapperFlex style={{ width: '70%' }} alignItems='center'>
              <Image width={30} height={30} src={'/assets/book.svg'} alt={''} />
              <Spacer width='10px' />
              <H1 fontSize='20px'>OpenBook</H1>
            </WrapperFlex>

            <Image width={25} height={25} src={'/assets/search.svg'} alt={''} />
          </WrapperFlex>
          <Scrool>
            <WrapperFlex style={{ flexDirection: 'column' }}>
              <WrapeMargin>
                <Spacer height='32px' />
                <UL>
                  <LI
                    onClick={() => {
                      setActive('Daily'), dispatch(setState('Daily'));
                    }}
                    bg={active === 'Daily' ? '#1B1C1D' : ''}
                    border={active === 'Daily' ? '1px solid #252627' : ''}
                  >
                    <WrapperFlex alignItems='center'>
                      <Image
                        width={24}
                        height={24}
                        src={'/assets/computerperson.svg'}
                        alt=''
                      />

                      <P
                        style={{ marginLeft: '10px' }}
                        color={active === 'Daily' ? 'white' : '#B5B8BA'}
                      >
                        Daily Reading List
                      </P>
                    </WrapperFlex>
                  </LI>
                  <LI
                    onClick={() => {
                      setActive('discover'), dispatch(setState('discover'));
                    }}
                    bg={active === 'discover' ? '#1B1C1D' : ''}
                    border={active === 'discover' ? '1px solid #252627' : ''}
                  >
                    <WrapperFlex>
                      <Image
                        width={24}
                        height={24}
                        src={'/assets/discovery.svg'}
                        alt=''
                      />

                      <P
                        style={{ marginLeft: '10px' }}
                        color={active === 'discover' ? 'white' : '#B5B8BA'}
                      >
                        Discover
                      </P>
                    </WrapperFlex>
                  </LI>

                  <LI
                    onClick={() => {
                      setActive('saved'), dispatch(setState('saved'));
                    }}
                    bg={active === 'saved' ? '#1B1C1D' : ''}
                    border={active === 'saved' ? '1px solid #252627' : ''}
                  >
                    <WrapperFlex>
                      <Image
                        width={24}
                        height={24}
                        src={'/assets/save.svg'}
                        alt=''
                      />

                      <P
                        style={{ marginLeft: '10px' }}
                        color={active === 'saved' ? 'white' : '#B5B8BA'}
                      >
                        Saved
                      </P>
                    </WrapperFlex>
                  </LI>
                  <LI
                    onClick={() => {
                      setActive('Messages'), dispatch(setState('Messages'));
                    }}
                    bg={active === 'Messages' ? '#1B1C1D' : ''}
                    border={active === 'Messages' ? '1px solid #252627' : ''}
                  >
                    <WrapperFlex>
                      <Image
                        width={24}
                        height={24}
                        src={'/assets/message.svg'}
                        alt=''
                      />

                      <P
                        style={{ marginLeft: '10px' }}
                        color={active === 'Messages' ? 'white' : '#B5B8BA'}
                      >
                        Messages
                      </P>
                    </WrapperFlex>
                  </LI>
                  <LI
                    onClick={() => {
                      setActive('Notification'),
                        dispatch(setState('Notification'));
                    }}
                    bg={active === 'Notification' ? '#1B1C1D' : ''}
                    border={
                      active === 'Notification' ? '1px solid #252627' : ''
                    }
                  >
                    <WrapperFlex>
                      <Image
                        width={24}
                        height={24}
                        src={'/assets/notification.svg'}
                        alt=''
                      />

                      <P
                        style={{ marginLeft: '10px' }}
                        color={active === 'Notification' ? 'white' : '#B5B8BA'}
                      >
                        Notification
                      </P>
                    </WrapperFlex>
                  </LI>
                  <Spacer height='30px' />
                  <div style={{ marginRight: '10px' }}>
                    <Button
                      onClick={() => {
                        dispatch(setState('Create'));
                      }}
                      style={{ fontWeight: '500' }}
                      width='100%'
                      color='white'
                    >
                      <Image
                        width={25}
                        height={24}
                        src={'/assets/plus.svg'}
                        alt=''
                      />
                      Create
                    </Button>
                  </div>
                </UL>
              </WrapeMargin>
            </WrapperFlex>
          </Scrool>
          <WrapeMargin
            style={{
              position: 'absolute',
              bottom: '4%',
              width: '90%',
              background: '#0f0f10',
            }}
          >
            <WrapperFlex alignItems='center' justifyContent='space-around'>
              <WrapperFlex style={{ width: '60%' }} alignItems='center'>
                <img
                  style={{ borderRadius: '40px' }}
                  width={44}
                  height={44}
                  src={session?.user?.image!}
                  alt=''
                />
                <WrapeMargin margin='0 20px'>
                  <WrapperFlex>
                    <H1 weight='500' fontSize='14px'>
                      {session?.user?.name}
                    </H1>
                    <Image
                      style={{ marginLeft: '5px' }}
                      width={14}
                      height={14}
                      src={'/assets/verify.svg'}
                      alt=''
                    />
                  </WrapperFlex>
                  <P
                    style={{ minWidth: '20px' }}
                    color='#8B8F92'
                    fontSize='14px'
                  >
                    @{state.handle}
                  </P>
                </WrapeMargin>
              </WrapperFlex>
              <div style={{ cursor: 'pointer' }}>
                <Image
                  width={44}
                  height={44}
                  src={'/assets/threeDot.svg'}
                  alt=''
                />
              </div>
            </WrapperFlex>
          </WrapeMargin>
        </Container>
      </Wrapper>
    </>
  );
}
