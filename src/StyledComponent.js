import styled from 'styled-components'

export const Button = styled.button`
  background-color: #ffffff;
  color: #000000;
  border-radius: 10px;
  padding: 10px;
  font-weight: 800;
  border: none;
  cursor: pointer;
`
export const ImageButton = styled.button`
  border: none;
  background-color: transparent;
  align-self: center;
  cursor: pointer;
 `
export const TriggerButton = styled.button`
  align-self: flex-end;
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
`
export const Image = styled.img`
  height:180px;
  width:180px;
`
export const GameViewContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
`
export const TwoImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`
export const PageContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding-top: 40px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ResultTextContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.p`
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
`
export const ScoreContainer = styled.div`
  border: 1px solid #ffffff;
  background-color: transparent;
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  border-radius: 10px;
  margin-bottom: 50px;
  padding: 15px;
  font-family: 'Bree Serif';
`
export const ScoreSpanContainer = styled.span`
  background-color: #ffffff;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 8px;
  color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Score = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 800;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #ffffff;
`
export const RulesImage = styled.img`
  height: 400px;
  width: 400px;
`
