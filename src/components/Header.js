import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="fas fa-lg fa-pen-nib"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>yni17196791</h1>
                <p>Imagine Deeply, Write Insightfully.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('biograph')}}>自己紹介</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('webdev')}}>Web 制作</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('pictogram')}}>ピクトグラム制作</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('translation')}}>翻訳・カタログ制作</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('writing')}}>ライティング</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>お問い合わせ</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
