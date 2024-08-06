import React from 'react'
import { TiThMenu } from "react-icons/ti";

import {
  Button,
  Input,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <div className='relative z-20 max-sm:py-2 w-full bg-[#004733]'>
      <Button  ref={btnRef} fontSize={30} colorScheme='teal' backgroundColor={"#004733"} onClick={onOpen}>
        <TiThMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        height={32}
      >
        <DrawerOverlay backgroundColor={"#0047338c"} />
        <DrawerContent>
          <DrawerCloseButton my={2} color={'white'} />
          
          <DrawerHeader backgroundColor={"#004733"} color={"white"}>Better.Com</DrawerHeader>
          
          <div className='px-6 h-full max-sm:text-[20px] text-[20px] py-3  text-white flex flex-col bg-[#004733]'>
          <a className='hover:text-[#1ee07f]' href="/">Home</a>
          <a className='hover:text-[#1ee07f]' href="/aboutus">About Us</a>
          <a className='hover:text-[#1ee07f]' href="/calci">Mortage Calculator</a>
          <a className='hover:text-[#1ee07f]' href="/page">StartPage</a>
          </div>
        </DrawerContent>
      </Drawer>
      </div>
    </>
  )
}

export default Header
