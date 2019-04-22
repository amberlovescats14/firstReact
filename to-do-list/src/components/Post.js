import React, {
  Component
} from 'react'

export default class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apItem: [],
      isLoaded: false,
      count: 0,
      likes: false,
      likeCount: 0,
    }
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({
          apItem: data,
          isLoaded: true
        })
      })
  }
  handleLike = (e) => {
    let classy = e.target.className
    let counter = document.getElementById(`${classy}`);
    let value = counter.innerHTML
    counter.innerHTML = Number(value) + 1


  }
  render() {
    const style = {
      textDecoration: 'underline',
      fontWeight: 800,
      margins: 0,
      padding: 0,
      color: '#6dadc7',
    }
    const style2 = {
      color: ' #46746e',
      fontFamily: 'cursive'

    }
    return ( <
      div className = "beer" >
      <
      ul > < h1 style = {
        style
      } > Beers of the South < /h1> {
        this.state.apItem.map((beer, i) => {
          return <li key = {
              i
            } >
            <
            p className = "beerName" > {
              beer.name
            } < /p> <
            p style = {
              style2
            } > "{beer.tagline}" < /p> {
              beer.description
            } < br / >
            <
            button key = {
              i
            }
          className = {
            beer.id
          }
          onClick = {
              this.handleLike
            } > Like < /button>  <
            div id = {
              beer.id
            }
          key = {
              beer.id
            } > {
              this.state.count
            } <
            /div> <
            /li>

        })
      } <
      /ul> <
      /div>
    );
  }
}