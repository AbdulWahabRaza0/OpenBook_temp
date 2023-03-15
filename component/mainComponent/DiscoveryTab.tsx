import { useAppDispatch, useAppSelector } from '@/redux/Hooks';
import {
  setDiscovery,
  setSign,
  setSummary,
} from '@/redux/reducer/stateReducer';
import { client } from '@/service/client';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Button } from '../Button';
import { Card } from '../Card';
import Input from '../Input';
import ModalView from '../Modal';
import { Spacer } from '../Spacer';
import { WrapperFlex } from '../Style';
import { H1, P } from '../Typography';
import { useSession, signIn, signOut } from 'next-auth/react';
import { fecthRecomended } from '@/redux/middleware/fetchRecomended';
import { fecthReadingList } from '@/redux/middleware/fetchReadingList';
import { RotateLoader } from 'react-spinners';

const P1 = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
  font-weight: 500;
  color: white;
  font-weight: 16px;
  // padding: 15px 0px;
  padding-top: 15px;
`;
interface scroolInter {
  height?: string;
}
const Wrapper = styled.div`
  background: #0f0f10;

  height: 100vh;
  padding: 0px 20px;
  position: relative;
`;
const DiscoveyHead = styled.div`
  display: flex;
`;
const Scrool = styled.div<scroolInter>`
  width: 100%;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const ScroolY = styled.div<scroolInter>`
  height: ${(props) => (props.height ? props.height : '80vh')};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

let temArray: any = [];
const data = [
  'My News Reading List',
  'Sports Reading List',
  'Entertainment Reading List',
];
export default function DiscoveryTab() {
  const dispatch = useAppDispatch();
  const [minus, setMinus] = useState<any>();

  const [open, setOpen] = useState(false);
  const [moadal2, setModal2] = useState(false);
  const [check, setCheck] = useState(false);
  const [inputText, setInputtext] = useState('');
  const [iframeData, setIframeData] = useState('');
  const [iframeOpen, setIframeOpen] = useState(false);
  const [selectedIDs, setSelectedIds] = useState<any>([]);

  const states: any = useAppSelector((states) => states.recomended);
  const tilesData = states.recomendedData;
  const state: any = useAppSelector((state) => state.fetchReader);
  const dataDrop: any = state.readerList.readingData;

  const statess: any = useAppSelector((states) => states.user);
  const { data: session } = useSession();

  const ids: any = [];
  async function postReadingList() {
    try {
      const res = await client.post(
        'reading-list/makeAReadingListById',
        {
          Title: inputText,
          ArticleLinks: [selectedIDs],
        },
        {
          headers: {
            Authorization: `Bearer ${statess.token}`,
          },
        }
      );
      console.log(res);
    } catch (error: any) {
      console.log(error);
    }
  }

  // console.log(ids, selectedIDs);
  useEffect(() => {
    dispatch(fecthRecomended(statess.token));
  }, []);
  // function test(e: any) {
  //   temArray.push(e);
  //   let count: any = 0;

  //   if (temArray.length > 1) {
  //     for (let i = 0; i < temArray.length; i++) {
  //       let j: any = i + 1;
  //       for (j; j < temArray.length; j++) {
  //         if (temArray[i] === temArray[j]) {
  //           temArray = temArray.filter(function (items: any) {
  //             return items !== e;
  //           });
  //         } else {
  //           console.log('we are not equal');
  //         }
  //       }
  //     }
  //   }
  //   console.log('we are equals', temArray, selectedIDs, e);
  // }
  function appendArray() {
    console.log(inputText);
    // dataDrop.pu({ text: inputText });
    data.push(inputText);
    console.log(data);
  }
  // async function postReadList(){
  //   const res =await client.post()
  // }
  return (
    <>
      <ModalView
        width={'500px'}
        height={'auto'}
        show={open}
        setshow={setOpen}
        title='Your Reading List'
      >
        {!moadal2 ? (
          <>
            <div style={{ marginTop: '15px', marginBottom: '15px' }}>
              {dataDrop?.length > 0 ? (
                dataDrop?.map((item: any, index: any) => {
                  console.log('i am maping data', item);
                  return (
                    <>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div
                          style={{ display: 'flex', alignItems: 'baseline' }}
                        >
                          <input
                            onChange={() => {
                              setCheck(!check);
                            }}
                            type={'checkbox'}
                          />
                          <p style={{ color: 'white', marginLeft: '10px' }}>
                            {item.Title}
                          </p>
                        </div>
                        <div>
                          <img width={25} src='/assets/delete.png'></img>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <>
                  <H1 fontSize='16px' weight='400' color='white'>
                    Please Create Your Own List
                  </H1>
                </>
              )}
            </div>
            <Button
              onClick={() => {
                if (check == true) {
                  setOpen(false);
                  setModal2(false);
                } else {
                  setModal2(true);
                }
              }}
              color='white'
              width='100%'
            >
              {check ? 'Add' : 'Creating New List'}
            </Button>
          </>
        ) : (
          <>
            <br />
            <Input
              onChange={(e) => {
                setInputtext(e.target.value);
              }}
              placeholder='Title of Article'
            />

            <Button
              onClick={() => {
                setOpen(false);
                setModal2(false);
                appendArray();
                postReadingList();
              }}
              style={{ marginTop: '20px' }}
              color='white'
              width='100%'
            >
              Creating New List
            </Button>
          </>
        )}
        <br />
      </ModalView>
      {/* <iframe
          style={{ width: '100%', height: '100vh' }}
          src=''
          name='myFrame'
        ></iframe> */}

      <Wrapper>
        <Spacer height='50px' />
        <Container style={{ padding: '0 40px' }}>
          <Scrool>
            <WrapperFlex alignItems='center'>
              <Button
                height='auto'
                width='auto'
                className='px-3 pt-2 pb-2 '
                bg='transparent'
                color='white'
                border='1px solid #252627'
              >
                <WrapperFlex>
                  <img
                    style={{ marginRight: '10px' }}
                    src='/assets/subscribe.svg'
                    alt=''
                  />
                  <P> Subscribed</P>
                </WrapperFlex>
              </Button>
              <div className='mx-3'>
                <img src='/assets/discoveryLine.svg' />
              </div>
              <Button
                style={{ marginRight: '10px' }}
                height='auto'
                width='auto'
                className='px-3 pt-2 pb-2  '
                bg='transparent'
                color='white'
                border='1px solid #FFFFFF'
              >
                <P>All</P>
              </Button>
              <Button
                style={{ marginRight: '10px' }}
                height='auto'
                width='auto'
                className='px-3 pt-2 pb-2 '
                bg='transparent'
                color='#B5B8BA'
                border='1px solid #252627'
              >
                <P weight='400' color='#B5B8BA'>
                  Artificial Intelligence
                </P>
              </Button>
              <Button
                style={{ marginRight: '10px' }}
                height='auto'
                width='auto'
                className='px-3 pt-2 pb-2 '
                bg='transparent'
                color='#B5B8BA'
                border='1px solid #252627'
              >
                <P weight='400' color='#B5B8BA'>
                  Gaming
                </P>
              </Button>
              <Button
                style={{ marginRight: '10px' }}
                height='auto'
                width='auto'
                className='px-3 pt-2 pb-2 '
                bg='transparent'
                color='#B5B8BA'
                border='1px solid #252627'
              >
                <P weight='400' color='#B5B8BA'>
                  Technology
                </P>
              </Button>
              <Button
                style={{ marginRight: '10px' }}
                height='auto'
                width='auto'
                className='px-3 pt-2 pb-2 '
                bg='transparent'
                border='1px solid #252627'
              >
                <P weight='400' color='#B5B8BA'>
                  Ecom
                </P>
              </Button>
            </WrapperFlex>
          </Scrool>
          {iframeOpen && (
            <H1
              onClick={() => {
                setIframeOpen(false);
              }}
              style={{ float: 'right', cursor: 'pointer' }}
              fontSize='20px'
            >
              X
            </H1>
          )}
          <Spacer height='32px' />
          <ScroolY>
            <Row>
              {iframeOpen ? (
                <iframe
                  style={{ width: '100%', height: '100vh' }}
                  src={iframeData}
                  name='myFrame'
                ></iframe>
              ) : !states.loading ? (
                tilesData.map((items: any, index: any) => {
                  return (
                    <Col style={{ position: 'relative' }} md={6}>
                      <WrapperFlex
                        style={{ flexDirection: 'column', width: '100%' }}
                        className='pb-4 '
                      >
                        <div
                          onClick={() => {
                            dispatch(setSummary(items._id));
                          }}
                          style={{ cursor: 'pointer' }}
                        >
                          <img
                            style={{ width: '100%' }}
                            src='/assets/discoverypic.svg'
                          />
                        </div>
                        <div>
                          <P1
                            onClick={() => {
                              setIframeOpen(true), setIframeData(items.URL);
                            }}
                            style={{ cursor: 'pointer' }}
                            // weight='500'
                            // lHeight='24px'
                            // className='py-3'
                            // fontSize='16px'
                          >
                            <a
                              style={{
                                textDecoration: 'none',
                                color: 'white',
                              }}
                              onClick={() => setIframeOpen(true)}
                              href={
                                items.URL
                                  ? items.URL
                                  : 'https://www.google.com/'
                              }
                              target='myFrame'
                            >
                              {items.Headline}
                            </a>
                          </P1>

                          <WrapperFlex alignItems='center'>
                            <img
                              style={{ borderRadius: '50px' }}
                              width={24}
                              height={24}
                              src={
                                items.User.twitterPicture
                                  ? items.User.twitterPicture
                                  : 'https://static.vecteezy.com/system/resources/previews/004/226/762/original/panda-cartoon-cute-say-hello-panda-animals-illustration-vector.jpg'
                              }
                              alt=''
                            />
                            <H1 className='mx-2' fontSize='16px'>
                              {items.User.twitterHandle
                                ? items.User.twitterHandle
                                : 'ayaz afzal'}
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
                        <WrapperFlex className='mt-2' alignItems='center'>
                          <P color='#B5B8BA' fontSize='14px' weight='400'>
                            1M views
                          </P>
                          <P
                            color='#B5B8BA'
                            style={{ marginLeft: '10px' }}
                            fontSize='14px'
                            weight='400'
                          >
                            .
                          </P>
                          <P
                            color='#B5B8BA'
                            style={{ marginLeft: '10px' }}
                            fontSize='14px'
                            weight='400'
                          >
                            Today
                          </P>
                          <Button
                            style={{ marginLeft: '10px' }}
                            height='auto'
                            width='auto'
                            className='px-2 pt-2 pb-2 '
                            bg='transparent'
                            color='#B5B8BA'
                            border='1px solid #252627'
                          >
                            <P
                              style={{ textTransform: 'capitalize' }}
                              color='#B5B8BA'
                              fontSize='14px'
                              weight='400'
                            >
                              {items.User.Interests[index]}
                            </P>
                          </Button>
                        </WrapperFlex>
                      </WrapperFlex>
                      <div
                        style={{
                          position: 'absolute',
                          top: '3%',
                          left: '5%',
                        }}
                      >
                        <Button
                          onClick={() => {
                            setOpen(true);
                            setSelectedIds(items._id);
                          }}
                          width='auto'
                          height='auto'
                          className='px-2'
                          color='white'
                          borderRadius='30px'
                        >
                          +
                        </Button>
                      </div>
                    </Col>
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
              {/* <Col style={{ position: 'relative' }} md={6}>
                <WrapperFlex
                  style={{ flexDirection: 'column' }}
                  className='pb-4 '
                >
                  <div>
                    <img src='/assets/discoverypic.svg' />
                  </div>
                  <div>
                    <H1
                      weight='500'
                      lHeight='24px'
                      className='py-3'
                      fontSize='16px'
                    >
                      How Panda Express Makes 110 Million <br />
                      Pounds of Orange Chicken per Year
                    </H1>

                    <WrapperFlex alignItems='center'>
                      <img
                        style={{ borderRadius: '50px' }}
                        width={24}
                        height={24}
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
                  <WrapperFlex className='mt-2' alignItems='center'>
                    <P color='#B5B8BA' fontSize='14px' weight='400'>
                      1M views
                    </P>
                    <P
                      color='#B5B8BA'
                      style={{ marginLeft: '10px' }}
                      fontSize='14px'
                      weight='400'
                    >
                      .
                    </P>
                    <P
                      color='#B5B8BA'
                      style={{ marginLeft: '10px' }}
                      fontSize='14px'
                      weight='400'
                    >
                      Today
                    </P>
                    <Button
                      style={{ marginLeft: '10px' }}
                      height='auto'
                      width='auto'
                      className='px-2 pt-2 pb-2 '
                      bg='transparent'
                      color='#B5B8BA'
                      border='1px solid #252627'
                    >
                      <P color='#B5B8BA' fontSize='14px' weight='400'>
                        Artificial Intelligence
                      </P>
                    </Button>
                  </WrapperFlex>
                </WrapperFlex>
                <div style={{ position: 'absolute', top: '3%', left: '5%' }}>
                  <Button
                    onClick={() => {
                      setOpen(true);
                    }}
                    width='auto'
                    height='auto'
                    className='px-2'
                    color='white'
                    borderRadius='30px'
                  >
                    +
                  </Button>
                </div>
              </Col> */}
            </Row>
          </ScroolY>

          {/* {tilesData.map((item: any, index: any) => {
          return (
            <>
              <Card
                key={index}
                style={{ position: 'relative' }}
                padding='40px 30px 40px 30px'
              >
                <H1 fontSize='24px'>{item.Headline}</H1>
                <Spacer height='10px' />
                <P>{item.Summary3}</P>
                <div
                  className='d-flex justify-content-end'
                  style={{
                    width: '100%',
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-2%',
                  }}
                >
                  <Button
                    onClick={() => {
                      test(item._id);

                      if (temArray.length >= 0) {
                        if (temArray.includes(item._id)) {
                          setOpen(true);
                          setCheck(false);
                        } else {
                          ('');
                        }
                      }
                    }}
                    size='20px'
                    borderRadius='70px'
                    color='white'
                    height='40px'
                    width='40px'
                  >
                    {temArray.length >= 0
                      ? temArray.includes(item._id)
                        ? '-'
                        : '+'
                      : ''}
                    {''}
                  </Button>
                </div>
              </Card>
              <Spacer height='50px' />
            </>
          );
        })} */}
        </Container>
      </Wrapper>
    </>
  );
}
