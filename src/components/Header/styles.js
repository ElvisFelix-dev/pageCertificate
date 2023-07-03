import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  background-color: rgb(19, 74, 209);
  background: linear-gradient(
    90deg,
    rgba(19, 74, 209, 0.7203256302521008) 41%,
    rgba(43, 43, 162, 0.7791491596638656) 45%,
    rgba(50, 109, 190, 0.8547794117647058) 49%
  );
`

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 10px;
`

export const Name = styled.h1`
  font-size: 25px;
  margin: 0;

  font-family: 'Roboto Slab', serif;

  color: #fff;
`

export const subTitle = styled.h1``
