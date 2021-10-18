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
          <h2 className="major">自己紹介</h2>
          <p>
          <Age name={"にわ よしき"} year={1990} month={11} date={24} />
          </p>
          <p>
          前職の専門商社にて、持ち前のフットワークの軽さを生かし全社のマーケティングに関する業務を担当。<br />
          展示用ポスターのデザイン、カタログ・フライヤー作成などに始まり自社HPのリニューアルまで行っていました。<br />
          Webページに関しては、フルスタックで対応可能です。<br />
          WordPressの制作経験もありますので、お気軽にお尋ねください。
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
            CIPPS 国際公共政策センター <a href="https://www.cipps.org/">HP</a> (Wordpress)
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
          <h2 className="major">ピクトグラム制作</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>自然現象・化学反応などを一目見てわかるよう易しく表現します。</p>
          <p>(Photoshop, Illustrator)</p>
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
              <li>ドイツ 化学メーカー(研究用試薬) 各種カタログ・マニュアル</li>
              <li>ドイツ 細胞関連製品メーカー (研究用試薬) 各種カタログ・マニュアル</li>
              <li>アメリカ 化合物ライブラリー専門企業 各種製品カタログ・マニュアル</li>
            </ul>
          </p>
          <p>
            他多数。
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
            東京カレンダーWEB にて連載中 (計 14 作)
          </p>
          <p>
            メディアライティング、タイアップライティングもご好評をいただいております。
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

// <h2 className="major">SNS経由はこちら</h2>
// <ul className="icons">
  // <li>
    // <a
      // href="https://twitter.com/"
      // target="_blank"
      // className="fab fa-twitter"
    // >
      // <span className="label" style={{ display: 'none' }}>Twitter</span>
    // </a>
  // </li>
// </ul>
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
