import React from 'react'
import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const SignUp = () => {
    return (
        <Container maxW={'container.xl'} height={'100vh'} p={'16'}>

            <form>

                <VStack alignItems={'stretch'} spacing={'8'} width={['full', '96']} margin={'auto'} my={'16'}>

                    <Heading>Video Hub</Heading>
                    <Avatar alignSelf={'center'} boxSize={'32'} />

                    <Input
                        placeholder={'Enter your name'}
                        type={'text'}
                        required
                        focusBorderColor={"purple.500"} />

                    <Input
                        placeholder={'Enter your email'}
                        type={'email'}
                        required
                        focusBorderColor={"purple.500"} />
                    <Input
                        placeholder={'Enter your password'}
                        type={'password'}
                        required
                        focusBorderColor={"purple.500"} />


                    <Button colorScheme='purple' type='submit'>Sign Up</Button>

                    <Text textAlign={'right'}>Already Signed Up ?{' '}
                        <Button variant={'link'} colorScheme='purple'>
                            <Link to={'/login'} >Log In </Link>
                        </Button>
                    </Text>

                </VStack>
            </form>


        </Container>

    )

}



export default SignUp
