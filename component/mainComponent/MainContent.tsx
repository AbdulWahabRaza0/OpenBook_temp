import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { WrapeMargin, WrapperFlex } from '../Style';
import Image from 'next/image';
import { H1, P } from '../Typography';
import { Card } from '../Card';
import { Spacer } from '../Spacer';
import { ClipLoader, RotateLoader } from 'react-spinners';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/Hooks';
import DiscoveryTab from './DiscoveryTab';
import { Button } from '../Button';
import MuiButton from '../MuiButton';
import BookMark from '../saved/BookMark';
import Favroute from '../saved/Favoute';
import Leaderboard from '../LeaderBoard/Leaderboard';
import { useSession, signIn, signOut } from 'next-auth/react';
import { fecthReadingList } from '@/redux/middleware/fetchReadingList';

interface scroolInter {
  height?: string;
}
const Wrapper = styled.div`
  background: #0f0f10;

  height: 100vh;
  padding: 0px 30px;
  position: relative;
`;
const Scrool = styled.div<scroolInter>`
  height: ${(props) => (props.height ? props.height : '70%')};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const BottomBar = styled.div`
  padding: 15px 0;
  background: #0f0f10;
  border-top: 1px solid #252627;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;
const P1 = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 400;
  color: #b5b8ba;
  font-weight: 14px;
  // padding: 15px 0px;
  padding-top: 10px;
`;
const glanceData = [
  {
    quote: 'Quote: Rsiking failure.',
    duration: '15',
  },
  {
    quote: 'Framework.',
    duration: '10',
  },
  {
    quote: 'Tweet: Creative genius..',
    duration: '55',
  },
];

export default function MainContent() {
  const dispatch = useAppDispatch();
  const [openIframe, setOpenIframe] = useState(false);
  const state: any = useAppSelector((states) => states.user);
  const states: any = useAppSelector((state) => state.fetchReader);
  console.log('i am the fect reader', states);
  const readingData = states.readerList.readingData;
  const statess: any = useAppSelector((states) => states.user);

  const { data: session } = useSession();

  useEffect(() => {
    // console.log("This is state ", state);
    // dispatch(fecthReadingList(statess.token));
  });
  return (
    <>
      {state.nameUse === 'Daily' ? (
        <Wrapper>
          <Spacer height='50px' />
          <Container>
            <WrapperFlex alignItems='center' justifyContent='space-between'>
              <div style={{ display: 'flex' }}>
                <H1 weight='500' fontSize='24px'>
                  Daily Reading List{' '}
                </H1>
                <H1
                  weight='500'
                  className='mx-3'
                  color='#595C5E'
                  fontSize='24px'
                >
                  Feb 27th{' '}
                </H1>
              </div>
              <WrapperFlex>
                <Button
                  height='40px'
                  className='px-3'
                  color='white'
                  bg='#1B1C1D'
                  width='100%'
                >
                  09:42:24
                </Button>
                <Button
                  height='40px'
                  className='px-3 mx-3'
                  border='1px solid #252627'
                  bg='transparent'
                  color='white'
                  width='100%'
                >
                  <WrapperFlex>
                    <img
                      style={{ marginRight: '10px' }}
                      src='/assets/archieve.svg'
                      alt=''
                    />
                    <P> Archive</P>
                  </WrapperFlex>
                </Button>
                <Button
                  height='40px'
                  className='px-3'
                  border='1px solid #252627'
                  bg='transparent'
                  width='100%'
                >
                  <img src='/assets/seeting.svg' alt='' />
                </Button>
              </WrapperFlex>
            </WrapperFlex>
            <Spacer height='30px' />
            <WrapperFlex>
              <Button
                height='auto'
                className='px-3 '
                bg='#1B1C1D'
                color='white'
                borderRadius='30px'
                width='auto'
              >
                <WrapperFlex>
                  <img
                    style={{ marginRight: '10px' }}
                    src='/assets/file.svg'
                    alt=''
                  />
                  <P>12 articles</P>
                </WrapperFlex>
              </Button>
              <Button
                height='auto'
                className='px-3 mx-3 pt-2 pb-2'
                bg='#1B1C1D'
                color='white'
                borderRadius='30px'
                width='auto'
              >
                <WrapperFlex>
                  <img
                    style={{ marginRight: '2px' }}
                    src='/assets/clock2.svg'
                    alt=''
                  />
                  <P> 105 min</P>
                </WrapperFlex>
              </Button>
            </WrapperFlex>
          </Container>
          <Spacer height={!openIframe ? '40px' : '10px'} />

          <>
            <Scrool height={!openIframe ? '70%' : '80vh'}>
              <Container>
                {!states.loading ? (
                  readingData?.map((item: any, index: any) => {
                    return (
                      <WrapperFlex
                        key={index}
                        className='pb-4'
                        alignItems='center'
                      >
                        <div>
                          <img src='/assets/dots.svg' />
                        </div>
                        <div style={{ height: '100%' }} className='mx-4'>
                          <img
                            style={{ height: '100%' }}
                            src='/assets/dailyimage1.svg'
                          />
                        </div>
                        <div>
                          <H1 fontSize='16px'>{item.Title}</H1>
                          <P1
                          // fontSize='14px'
                          // className='mt-1'
                          // weight='400'
                          // color='#B5B8BA'
                          >
                            {item.Text[0]}
                          </P1>
                          <WrapperFlex className='mt-1' alignItems='center'>
                            <img
                              style={{ borderRadius: '50px' }}
                              // style={{ width: '25%' }}
                              width={30}
                              height={30}
                              src={session?.user?.image!}
                              alt=''
                            />
                            <H1 className='mx-2' fontSize='16px'>
                              {session?.user?.name}
                            </H1>
                            <Image
                              // style={{ width: '25%' }}
                              width={14}
                              height={14}
                              src={'/assets/verify.svg'}
                              alt=''
                            />
                          </WrapperFlex>
                        </div>
                      </WrapperFlex>
                    );
                  })
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      height: '70vh',
                    }}
                  >
                    <RotateLoader color='#36d7b7' />
                  </div>
                )}
              </Container>
            </Scrool>
          </>
        </Wrapper>
      ) : state.nameUse === 'discover' ? (
        <DiscoveryTab />
      ) : state.nameUse === 'saved' ? (
        <Favroute />
      ) : state.nameUse === 'Notification' ? (
        <Leaderboard />
      ) : (
        <></>
      )}
    </>
  );
}
