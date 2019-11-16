import React, { Component } from 'react';

class Age extends Component {

  myBirthday = (props) => {
    let myBirthday = {
        year: this.props.year,
        month: this.props.month,
        date: this.props.date
    };
    
    // Dateインスタンスに変換
    let birthDate = new Date(myBirthday.year, myBirthday.month - 1, myBirthday.date);
    
    // 文字列に分解
    let y2 = birthDate.getFullYear().toString().padStart(4, '0');
    let m2 = (birthDate.getMonth() + 1).toString().padStart(2, '0');
    let d2 = birthDate.getDate().toString().padStart(2, '0');
    
    // 今日の日付
    let today = new Date();
    let y1 = today.getFullYear().toString().padStart(4, '0');
    let m1 = (today.getMonth() + 1).toString().padStart(2, '0');
    let d1 = today.getDate().toString().padStart(2, '0');
    
    // 引き算
    let age = Math.floor((Number(y1 + m1 + d1) - Number(y2 + m2 + d2)) / 10000);
    return age;
  }

  render() {
    return (
        <div className="Age">
        <p>JOBs: Marketer, Writer, Developer</p>
        <p>{this.props.name}<br />
        {this.props.year} 年 {this.props.month} 月 {this.props.date} 日 生まれ ({this.myBirthday(this.props)} 歳)</p>
        <p>理学士(化学)　東北大学</p>
        </div>
    );
  }
}

export default Age;
