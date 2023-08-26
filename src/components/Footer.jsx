import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'

const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
            <Stack direction={["column", 'row']}>
                <VStack alignItems={'stretch'} w={'full'} px={'4'} >
                    <Heading bgSize={'md'} textTransform={'uppercas'} textAlign={['center', 'left']}>
                        Thank you For Visiting
                    </Heading>
                    <HStack
                        borderBottom={'2px solid white'}
                        py={'2'}
                    >
                        <Input placeholder='enter your name' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />
                        <Button
                            p={'0'}
                            colorScheme={"purple"}
                            variant={'ghost'}
                            borderRadius={'0 20px 20px 0'}
                        >
                            <AiOutlineSend size={20} />
                        </Button>
                    </HStack>
                </VStack>

                <VStack w={'full'}
                    borderLeft={["none", "1px solid white"]}
                    borderRight={["none", "1px solid white"]}
                >
                    <Heading textTransform={'uppercase'} alignItems={'center'}>
                        Video Hub
                    </Heading>
                    <Text>All Rights Received</Text>

                </VStack>

                <VStack w={'full'}>
                    <Heading size={'md'} textTransform={'uppercase'}>
                        Social Media
                    </Heading>
                    <Button variant={'link'} colorScheme={'whiteAlpha'}>
                        <a target={'blank'} href="https://youtube.com">YouTube</a>
                    </Button>

                    <Button variant={'link'} colorScheme={'whiteAlpha'}>
                        <a target={'blank'} href="https://Instagram.com">InstaGram</a>
                    </Button>

                    <Button variant={'link'} colorScheme={'whiteAlpha'}>
                        <a target={'blank'} href="https://Facebook.com">Facebook</a>
                    </Button>

                </VStack>

            </Stack>

        </Box>
    )
}

export default Footer
