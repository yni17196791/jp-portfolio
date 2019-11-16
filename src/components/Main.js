import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.png'
import pic02 from '../images/pic02.png'
import pic03 from '../images/pic03.png'
import pic04 from '../images/pic04.png'
import pic05 from '../images/pic05.png'

import Age from './Age.js'

class Main extends React.Component {

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="biograph"
          className={`${this.props.article === 'biograph' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">経歴</h2>
          <Age name={"にわ よしき"} year={1990} month={11} date={24} />
          <p>
            
          </p>
          {close}
        </article>

        <article
          id="webdev"
          className={`${this.props.article === 'webdev' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Web制作</h2>
          <p>
            株式会社ビジコムジャパン <a href="https://bizcomjapan.co.jp">HP</a> (gohugo)<br />
          </p>
          <span className="image main">
            <img src={pic01} alt="株式会社ビジコムジャパン" />
          </span>
          <p>
            CIPPS 国際公共政策センター (In Process, Wordpress)
          </p>
          <span className="image main">
            <img src={pic02} alt="CIPPS 国際公共政策センター" />
          </span>
          {close}
        </article>

        <article
          id="pictogram"
          className={`${this.props.article === 'pictogram' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">ピクトグラム制作(Photoshop, Illustrator)</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>自然現象・化学反応などを一目見てわかるよう易しく表現します。</p>
          {close}
        </article>

        <article
          id="translation"
          className={`${this.props.article === 'translation' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">翻訳・カタログ制作</h2>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <p>
            <ul>
              <li>ドイツ 化学メーカー(研究用試薬) 各種カタログ</li>
              <li>ドイツ 細胞関連製品メーカー (研究用試薬) 各種カタログ</li>
              <li>アメリカ 化合物ライブラリー専門企業 各種製品カタログ</li>
            </ul>
          </p>
          <p>
            内容につきまして、公開できないものがございます。<br />
            お手数ですがお問い合わせください。
          </p>
          {close}
        </article>

        <article
          id="writing"
          className={`${this.props.article === 'writing' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">ライティング</h2>
          <span className="image main">
            <img src={pic05} alt="" />
          </span>
          <p>
            東京カレンダー (計 8 作)
          </p>
          <p>詳細につきましてはお問い合わせください。</p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">お問い合わせ</h2>
          <p>お問い合わせ、お仕事のご依頼等はこちらから。</p>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfrqesyCRi_gKiW9U3UUOmkx9ztg040BaDfyFgGBaRGa83lVQ/viewform?embedded=true" width="640" height="844" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
          <h2 className="major">SNS経由はこちら</h2>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/yni17196791"
                target="_blank"
                className="fab fa-twitter"
              >
                <span className="label" style={{ display: 'none' }}>Twitter</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

// <ul>
// <li>
  // <a href="https://codebushi.com" className="fab fa-facebook">
    // <span className="label" style={{ display: 'none' }}>Facebook</span>
  // </a>
// </li>
// <li>
  // <a href="https://codebushi.com" className="fab fa-instagram">
    // <span className="label" style={{ display: 'none' }}>Instagram</span>
  // </a>
// </li>
// <li>
  // <a
    // href="https://github.com/codebushi/gatsby-starter-dimension"
    // className="fab fa-github"
  // >
    // <span className="label" style={{ display: 'none' }}>GitHub</span>
  // </a>
// </li>
// </ul>