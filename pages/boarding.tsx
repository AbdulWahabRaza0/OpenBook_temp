import { H1, P } from '@/component/Typography';
import * as React from 'react';
import { Button } from '@/component/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import { Wrapper } from '@/component/Style';
import styled from 'styled-components';
import MuiButton from '@/component/MuiButton';
import { Card } from '@/component/Card';
import { Spacer } from '@/component/Spacer';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { client } from '@/service/client';
import { useAppSelector } from '@/redux/Hooks';

interface scroolInter {
  height?: string;
}
const OnboardNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid #252627;
`;
const OnBoardLogo = styled.div`
  display: flex;
`;
const OnBoardMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const IntrestedButtons = styled.div`
  width: 100%;
  text-align: center;
`;
const Scrool = styled.div<scroolInter>`
  height: ${(props) => (props.height ? props.height : '70%')};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const OnBoardButton = styled.div`
  display: flex;
`;

const ButtonData = [
  {
    id: 1,
    text: 'Psychology',
  },
  {
    id: 2,
    text: 'Career & Success',
  },
  {
    id: 3,
    text: 'Politics',
  },
  {
    id: 4,
    text: 'Productivity',
  },
  {
    id: 5,
    text: 'Management & Leadership',
  },
  {
    id: 6,
    text: 'Philosophy',
  },
  {
    id: 7,
    text: 'Communication Skills',
  },
  {
    id: 8,
    text: 'Motivation & Inspiration',
  },
  {
    id: 9,
    text: 'Personal Development',
  },
  {
    id: 10,
    text: 'Mindfulness & Happiness',
  },
  {
    id: 11,
    text: 'Technology & the Future',
  },
  {
    id: 12,
    text: 'Health & Nutrition',
  },
  {
    id: 13,
    text: 'Biography & Memoir',
  },
  {
    id: 14,
    text: 'Health & Nutrition',
  },
  {
    id: 15,
    text: 'Entrepreneurship',
  },
  {
    id: 16,
    text: 'Sex & Relationships',
  },
  {
    id: 17,
    text: 'Economics',
  },
  {
    id: 18,
    text: 'Creativity',
  },
];
let array: any = [];
let array2: any = [];

export default function OnBoarding() {
  const router = useRouter();
  const [check, setcheck] = useState(false);
  const [mount, setMount] = useState(false);
  const [clickData, setClickData] = useState<any>();
  const state: any = useAppSelector((states) => states.user);
  console.log(state);

  useEffect(() => {
    setMount(true);
  });
  if (!mount) {
    return;
  }
  const style = {
    overflow: 'auto',

    // width: ' auto',
    // height: "95vh",
    // height: 'auto',

    // bgcolor: '#0f0f10',
    // borderRadius: '29px',
    boxShadow: 24,

    // p: 4,
  };
  function Next() {
    router.push('/Dashboard');
  }

  // let tickData: any = [];
  function Check(e: any) {
    // tickData.push(e);
    // setcheck(true);
    if (array.length > 1) {
      if (array.includes(e)) {
        console.log('i am alredy exist');
        array = array.filter((item: any) => {
          return item !== e;
        });
      }
    }
  }
  // console.log(tickData);
  console.log(array);
  async function postIntrest() {
    console.log(array2);
    try {
      const res = await client.post(
        'auth/addInterest',
        {
          Intrest: array2,
        },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      console.log(res);
    } catch (error: any) {
      console.log(error);
    }
  }

  return (
    <>
      {/* <P>hello world</P> */}
      {/* <Button sx={style} variant='contained' endIcon={<DoneIcon />}>
        Send
      </Button> */}
      <Wrapper>
        <OnboardNav>
          <OnBoardLogo>
            <img width={24} height={24} src='/assets/book.svg' />
            <P className='mx-2' weight='500' fontSize='20px'>
              OpenBook
            </P>
          </OnBoardLogo>
          <OnBoardButton>
            <MuiButton
              clicked={() => {
                router.push('/Dashboard');
              }}
              size='14px'
              width='104px'
              padding='8px 12px'
              bg='transparent'
            >
              Skip
            </MuiButton>
            <div className='mx-2'></div>
            <MuiButton
              clicked={() => {
                array.length > 0 && Next(), postIntrest();
              }}
              size='14px'
              width='104px'
              padding='8px 12px'
              bg='#DB5C4D'
            >
              Next
            </MuiButton>
          </OnBoardButton>
        </OnboardNav>
        <Spacer height='100px' />

        <OnBoardMain>
          <div className='mb-4'>
            <Card padding='15px' bg='#1B1C1D'>
              <img src='/assets/intrest.svg' />
            </Card>
          </div>

          <H1 className='mb-4'>What are you interested in?</H1>

          <IntrestedButtons>
            {ButtonData.map((item, index) => {
              return (
                <>
                  {/* <MuiButton
                    clicked={() => Check(item.id)}
                    size='14px'
                    width='15%'
                    padding='10px'
                    bg='transparent'
                    radius='11px'
                    variant='contained'
                    border='1px solid #252627;'
                    hover='transparent'
                    margin='10px 10px '
                    done={false}
                  >
                    {item.text}
                  </MuiButton> */}
                  <Button
                    onClick={() => {
                      setClickData(item.id);
                      array.push(item.id);
                      array2.push(item.text);

                      // Check(item.id);
                    }}
                    className='mb-4 '
                    bg={array.includes(item.id) ? '#DB5C4D' : 'transparent'}
                    color='white'
                    border='1px solid #252627'
                    style={{ marginLeft: '10px' }}
                    padding='10px 70px'
                    height='auto'
                    width='auto'
                  >
                    {item.text}
                  </Button>

                  {item.id === 5 && <br />}
                  {item.id === 9 && <br />}
                  {item.id === 13 && <br />}
                </>
              );
            })}
          </IntrestedButtons>
        </OnBoardMain>
      </Wrapper>
    </>
  );
}
