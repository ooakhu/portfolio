import styled from 'styled-components'
import background from './Vector.svg'


export const SectionTwo = styled.div`
  width: 100%;
  height: 500px;
  background-color: #414F67;
  color: white;
  text-align: center;
`

export const Ssvg = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 400px;
  margin-top: 100px;
  
  
  img {
    width: 100px;
    height: 100px;
    !important;: inline;
  }
  
  h3 {
    width: 700px;
  }
  
`
