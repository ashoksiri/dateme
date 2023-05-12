import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Date Me</Header>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button
        mode="contained"
        style={{}}
        onPress={() => navigation.navigate('LoginScreen')}
        title={'Login'}
      >
        Login
      </Button>
      <Button
      style={{}}
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
        title={'Sign Up'}
      >
        Sign Up
      </Button>
    </Background>
  )
}
