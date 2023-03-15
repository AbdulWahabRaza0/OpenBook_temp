import { Container } from 'react-bootstrap';
import { Button } from '../Button';
import { Spacer } from '../Spacer';
import { Wrapper, WrapperFlex } from '../Style';
import { H1, P } from '../Typography';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Favroute() {
  const { data: session } = useSession();

  return (
    <>
      <Wrapper style={{ padding: '0px 20px' }}>
        <Spacer height='50px' />
        <Container>
          <WrapperFlex alignItems='center' justifyContent='space-between'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <H1 weight='500' fontSize='24px'>
                Favorites{' '}
              </H1>
              <WrapperFlex>
                <Button
                  height='auto'
                  className='px-3 mx-3 '
                  bg='#1B1C1D'
                  color='white'
                  borderRadius='30px'
                  width='auto'
                >
                  <WrapperFlex>
                    <img
                      style={{ marginRight: '1px' }}
                      src='/assets/file.svg'
                      alt=''
                    />
                    <P>12 articles</P>
                  </WrapperFlex>
                </Button>
                <Button
                  height='auto'
                  className='px-3  pt-1 pb-1'
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
            </div>
            <WrapperFlex>
              <Button
                height='auto'
                width='auto'
                className='px-3'
                color='white'
                bg='transparent'
                border='1px solid #FFFFFF'
              >
                <WrapperFlex>
                  <img
                    style={{ marginRight: '1px' }}
                    src='/assets/play.svg'
                    alt=''
                  />
                  <P fontSize='14px'>Play all</P>
                </WrapperFlex>
              </Button>
              <Button
                height='auto'
                className='px-3 mx-3'
                border='1px solid #252627'
                bg='transparent'
                color='white'
                width='auto'
              >
                <WrapperFlex>
                  <img
                    style={{ marginRight: '10px' }}
                    src='/assets/shuffle.svg'
                    alt=''
                  />
                  <P fontSize='14px'>Shuffle</P>
                </WrapperFlex>
              </Button>
              <Button
                height='auto'
                className='px-3 py-2'
                border='1px solid #252627'
                bg='transparent'
                width='auto'
              >
                <img src='/assets/seeting.svg' alt='' />
              </Button>
            </WrapperFlex>
          </WrapperFlex>
          <Spacer height='30px' />
          <WrapperFlex className='pb-4' alignItems='center'>
            <div>
              <H1 fontSize='16px'>1</H1>
            </div>
            <div className='mx-4'>
              <img src='/assets/dailyimage1.svg' />
            </div>
            <div>
              <H1 fontSize='16px'>
                How Panda Express Makes 110 Million <br />
                Pounds of Orange Chicken per Year
              </H1>
              <P className='mt-1' weight='400' color='#B5B8BA' fontSize='14px'>
                Panda Express has been a staple of mall foods across the country{' '}
                <br /> from its first location in the Glendale Galleria in
                California in 1983.
              </P>
              <WrapperFlex className='mt-1' alignItems='center'>
                <img
                  style={{ borderRadius: '50px' }}
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
        </Container>
      </Wrapper>
    </>
  );
}
