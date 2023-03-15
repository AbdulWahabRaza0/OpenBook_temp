import { Container } from 'react-bootstrap';
import { Button } from '../Button';
import { Spacer } from '../Spacer';
import { Wrapper, WrapperFlex } from '../Style';
import { H1, P } from '../Typography';

export default function BookMark() {
  return (
    <>
      <Wrapper style={{ padding: '0px 30px' }}>
        <Spacer height='50px' />
        <Container>
          <WrapperFlex alignItems='center' justifyContent='space-between'>
            <H1 weight='500' fontSize='24px'>
              Bookmarks
            </H1>
            <Button
              width='auto'
              height='auto'
              color='white'
              bg='transparent'
              border='1px solid #252627'
              padding='5px 15px'
            >
              +
            </Button>
          </WrapperFlex>
          <Spacer height='30px' />
          <WrapperFlex justifyContent='space-between' alignItems='center'>
            <WrapperFlex alignItems='center'>
              <Button
                width='auto'
                height='auto'
                padding='16px '
                borderRadius='30px'
              >
                <img src='/assets/saveFill.svg' />
              </Button>
              <div className='mx-3'>
                <H1 weight='500' fontSize='18px'>
                  All Bookmarks
                </H1>
                <P
                  className='mt-1'
                  color='#B5B8BA'
                  fontSize='14px'
                  weight='400'
                >
                  138 Article . 1530 min
                </P>
              </div>
            </WrapperFlex>
            <img src='/assets/left.svg' />
          </WrapperFlex>
          <Spacer height='30px' />
          <WrapperFlex justifyContent='space-between' alignItems='center'>
            <WrapperFlex alignItems='center'>
              <Button
                width='auto'
                height='auto'
                padding='16px '
                borderRadius='30px'
                bg='transparent'
                border='1px solid #252627'
              >
                <img src='/assets/fav.svg' />
              </Button>
              <div className='mx-3'>
                <H1 weight='500' fontSize='18px'>
                  George’s collection
                </H1>
                <P
                  className='mt-1'
                  color='#B5B8BA'
                  fontSize='14px'
                  weight='400'
                >
                  138 Article . 1530 min
                </P>
              </div>
            </WrapperFlex>
            <img src='/assets/left.svg' />
          </WrapperFlex>
          <Spacer height='30px' />
          <WrapperFlex justifyContent='space-between' alignItems='center'>
            <WrapperFlex alignItems='center'>
              <Button
                width='auto'
                height='auto'
                padding='16px '
                borderRadius='30px'
                bg='transparent'
                border='1px solid #252627'
              >
                <img src='/assets/fav.svg' />
              </Button>
              <div className='mx-3'>
                <H1 weight='500' fontSize='18px'>
                  George’s collection
                </H1>
                <P
                  className='mt-1'
                  color='#B5B8BA'
                  fontSize='14px'
                  weight='400'
                >
                  138 Article . 1530 min
                </P>
              </div>
            </WrapperFlex>
            <img src='/assets/left.svg' />
          </WrapperFlex>
          <Spacer height='30px' />
          <WrapperFlex justifyContent='space-between' alignItems='center'>
            <WrapperFlex alignItems='center'>
              <Button
                width='auto'
                height='auto'
                padding='16px '
                borderRadius='30px'
                bg='transparent'
                border='1px solid #252627'
              >
                <img src='/assets/fav.svg' />
              </Button>
              <div className='mx-3'>
                <H1 weight='500' fontSize='18px'>
                  George’s collection
                </H1>
                <P
                  className='mt-1'
                  color='#B5B8BA'
                  fontSize='14px'
                  weight='400'
                >
                  138 Article . 1530 min
                </P>
              </div>
            </WrapperFlex>
            <img src='/assets/left.svg' />
          </WrapperFlex>
        </Container>
      </Wrapper>
    </>
  );
}
