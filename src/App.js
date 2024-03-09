import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  Button,
  ImageButton,
  TriggerButton,
  Image,
  GameViewContainer,
  TwoImageContainer,
  PageContainer,
  ResultTextContainer,
  Heading,
  ScoreContainer,
  ScoreSpanContainer,
  Score,
  PopupContainer,
  RulesImage,
} from './StyledComponent'
import 'reactjs-popup/dist/index.css'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

let checkList = []

class App extends Component {
  state = {
    yourImage: '',
    opponentImage: '',
    userId: '',
    opponentId: '',
    result: '',
    score: 0,
  }

  onImgClick = event => {
    const value = event.target.alt
    const randomNum = Math.floor(Math.random() * 3)
    const opoUrl = choicesList[randomNum].id
    if (opoUrl === 'ROCK') {
      checkList[0] =
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png'
      checkList[1] = 'ROCK'
    } else if (opoUrl === 'SCISSORS') {
      checkList[0] =
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png'
      checkList[1] = 'SCISSORS'
    } else {
      checkList[0] =
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png'
      checkList[1] = 'PAPER'
    }
    if (value === 'ROCK') {
      checkList[2] =
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png'
      checkList[3] = 'ROCK'
    } else if (value === 'SCISSORS') {
      checkList[2] =
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png'
      checkList[3] = 'SCISSORS'
    } else {
      checkList[2] =
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png'
      checkList[3] = 'PAPER'
    }
    this.setState(
      {
        opponentImage: checkList[0],
        opponentId: checkList[1],
        yourImage: checkList[2],
        userId: checkList[3],
      },
      this.renderResult,
    )
  }

  renderResult = () => {
    const {userId, opponentId} = this.state
    const userLength = userId.length
    const opponentLength = opponentId.length
    console.log(userLength)
    console.log(opponentLength)
    const winCondition =
      (userLength === 4 && opponentLength === 8) ||
      (userLength === 8 && opponentLength === 5) ||
      (userLength === 5 && opponentLength === 4)
    console.log(winCondition)
    if (userLength === opponentLength) {
      this.setState(prevState => ({
        result: 'IT IS DRAW',
        score: prevState.score,
      }))
    } else if (winCondition) {
      this.setState(prevState => ({
        result: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else {
      this.setState(prevState => ({
        result: 'YOU LOOSE',
        score: prevState.score - 1,
      }))
    }
  }

  renderScoreHeader = () => {
    const {score} = this.state
    return (
      <ScoreContainer>
        <h1>Rock Paper Scissors</h1>
        <ScoreSpanContainer>
          <p>Score</p>
          <Score>{score}</Score>
        </ScoreSpanContainer>
      </ScoreContainer>
    )
  }

  gameView = () => (
    <GameViewContainer>
      <TwoImageContainer>
        <ImageButton onClick={this.onImgClick} data-testid= "rockButton">
          <Image
            alt="ROCK"
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
          />
        </ImageButton>
        <ImageButton onClick={this.onImgClick} data-testid="scissorsButton">
          <Image
            alt="SCISSORS"
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
          />
        </ImageButton>
      </TwoImageContainer>
      <ImageButton onClick={this.onImgClick} data-testid="paperButton">
        <Image
          alt="PAPER"
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
        />
      </ImageButton>
    </GameViewContainer>
  )

  onPlayAgain = () => {
    checkList = []
    this.setState({
      result: '',
      opponentId: '',
      userId: '',
      opponentImage: '',
      yourImage: '',
    })
  }

  renderDrawView = () => (
    <ResultTextContainer>
      <p>IT IS DRAW</p>
      <Button onClick={this.onPlayAgain}>PLAY AGAIN</Button>
    </ResultTextContainer>
  )

  renderWinView = () => (
    <ResultTextContainer>
      <p>YOU WON</p>
      <Button onClick={this.onPlayAgain}>PLAY AGAIN</Button>
    </ResultTextContainer>
  )

  renderLoseView = () => (
    <ResultTextContainer>
      <p>YOU LOSE</p>
      <Button onClick={this.onPlayAgain}>PLAY AGAIN</Button>
    </ResultTextContainer>
  )

  renderResultView = () => {
    const {result, opponentImage, yourImage, userId, opponentId} = this.state
    return (
      <GameViewContainer>
        <TwoImageContainer>
          <div>
            <Heading>YOU</Heading>
            <Image alt="your choice" src={yourImage} />
          </div>
          <div>
            <Heading>OPPONENT</Heading>
            <Image alt="opponent choice" src={opponentImage} />
          </div>
        </TwoImageContainer>
        {result === 'IT IS DRAW' && this.renderDrawView()}
        {result === 'YOU WON' && this.renderWinView()}
        {result === 'YOU LOOSE' && this.renderLoseView()}
      </GameViewContainer>
    )
  }

  render() {
    const {result} = this.state
    return (
      <PageContainer>
        {this.renderScoreHeader()}
        {result === '' ? this.gameView() : this.renderResultView()}
        <Popup
          modal
          trigger={<TriggerButton type="button">Rules</TriggerButton>}
        >
          {close => (
            <PopupContainer>
              <TriggerButton type="button" id="close" onClick={() => close()}>
                <RiCloseLine size="30" color="#616e7c" aria-label="close" />
              </TriggerButton>
              <div>
                <RulesImage
                  alt="rules"
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
                />
              </div>
            </PopupContainer>
          )}
        </Popup>
      </PageContainer>
    )
  }
}

export default App
