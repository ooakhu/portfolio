import styled from 'styled-components'


export const HeaderBox = styled.div`
  display: flex;
  width: 100%;
  border: 10px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`
export const HeaderBoxLeft = styled.div`

  width: 640px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 32px;
  h3 {
    margin: 5px;
    font-size: 18px;
    font-family: Roboto;
  }
  img {
    width: 32px;
    height: 32px;
    
  }
`

export const HeaderBoxRight = styled.div`

  width: 640px;
  display: flex;
  height: 32px;
  align-items: center;
  justify-content: flex-end;
  
  p {
    margin: 5px;
    font-size: 16px;
    font-family: Roboto;
  }
  a {
    margin-top: 2px;
  }
  img {
    margin: 5px;
    width: 16px;
    height: 16px;
  }
`