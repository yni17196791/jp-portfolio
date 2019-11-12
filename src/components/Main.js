import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

import Yearsold from './Yearsold.js'

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
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <Yearsold name={"にわ よしき"} year={1990} month={11} date={24} />
          <p>
            
          </p>
          {close}
        </article>

        <article
          id="app"
          className={`${this.props.article === 'app' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">アプリ</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          </p>
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
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            株式会社ビジコムジャパン HP (gohugo)<br />
            CIPPS 国際公共政策センター HP (wordpress)
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
            <img src={pic03} alt="" />
          </span>
          <p>
            東京カレンダー (計 8 作)
          </p>
          <p>作品名等につきましてはお問い合わせください。</p>
          {close}
        </article>

        <article
          id="translation"
          className={`${this.props.article === 'translation' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">翻訳</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            <ul>
              <li>ドイツ 化学メーカー(研究用試薬) 各種カタログ</li>
              <li>ドイツ 細胞関連製品メーカー (研究用試薬) 各種カタログ</li>
              <li>アメリカ 化合物ライブラリー専門企業 製品カタログ</li>
            </ul>
          </p>
          <p>
            内容につきまして、公開できないものがございます。<br />
            お手数ですがお問い合わせください。
          </p>
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
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="fab fa-twitter"
              >
                <span className="label" style={{ display: 'none' }}>Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="fab fa-facebook">
                <span className="label" style={{ display: 'none' }}>Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="fab fa-instagram">
                <span className="label" style={{ display: 'none' }}>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="fab fa-github"
              >
                <span className="label" style={{ display: 'none' }}>GitHub</span>
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
