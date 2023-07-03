import { useEffect, useState } from 'react'

import axios from 'axios'

import { HeaderContainer, Name, ProfileImage, subTitle } from './styles'

export function Header() {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/ElvisFelix-dev',
        )
        setUserData(response.data)
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error)
      }
    }

    fetchUserData()
  }, [])

  if (!userData) {
    return <p>Carregando...</p>
  }

  const { name, avatar_url } = userData

  return (
    <>
      <HeaderContainer>
        <ProfileImage src={avatar_url} alt="Profile Image" />
        <Name>{name}</Name>
      </HeaderContainer>
    </>
  )
}
