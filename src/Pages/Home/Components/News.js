import React, { Component } from 'react';
import styled from 'styled-components';
import Prismic from 'prismic-javascript';

// const Stories = [
//     {
//         headline: "Aegis Crypto Custodian Launches And Already Gained Fosun As Lead Investor and Foxconn Client Deal",
//         date: "Feb 27, 2019",
//         link: "https://bitcoinexchangeguide.com/aegis-crypto-custodian-launches-and-already-gained-fosun-as-lead-investor-and-foxconn-client-deal/",
//         description: "Holding cryptocurrency is best done through a crypto wallet or through a crypto custodian, considering that their infrastructure is designed to protect assets adequately. ",
//         site: "Bitcoin Exchange Guide"

//     },
//     {
//         headline: "Another crypto custodian is on the rise and its first client is a Foxconn subsidiary",
//         date: "Feb 26, 2019",
//         link: "https://www.theblockcrypto.com/tiny/another-crypto-custodian-is-on-the-rise-and-its-first-client-is-a-foxconn-subsidiary/",
//         description: "San Francisco crypto custodian Aegis has strengthened its hold on the Asian market, announcing Hong Kong-based Fosun as the lead investor on its Series A",
//         site: "The Block Crypto"
//     },
//     {
//         headline: 'AEGIS CUSTODY awarded the Best Enterprise Wallet of the Year with "Aegis Wallet"',
//         date: "Feb 21, 2019",
//         link: "https://bitnance.vip/news/401b724e-8c4b-426d-a42a-9406a434f2b0",
//         description: "「全球各地的中大型企業用戶支持，才是區塊鏈與加密貨幣產業的發展關鍵！」Aegis Custody技術長傅冠彰在第二屆《Hit AI & Blockchain》人工智慧暨區塊鏈產業高峰會上表示。",
//         site: "Bitnance"
//     },
//     {
//         headline: "Aegis Custody Details Plans to Launch Digital Assets Custody Solution at North American Bitcoin Conference",
//         link: "https://www.cryptocurrencywire.com/cryptonewsbreaks/cryptonewsbreaks-aegis-custody-details-plans-to-launch-digital-assets-custody-solution-at-north-american-bitcoin-conference/",
//         description: "Aegis Custody, a subsidiary of Aegis Capital Management, today announced plans to launch its digital assets custody solution for U.S. investors at the North American Bitcoin Conference, which is currently underway in Miami, Florida",
//         date: "Jan 17, 2019",
//         site: "Cryptocurrecy Wire"
//     },
//     {
//         headline: "Aegis Custody to Launch Digital Asset Custody Service at The North American Bitcoin Conference; CTO Frank Fu to Speak on Main Stage",
//         date: "Jan 17, 2019",
//         link: "https://globenewswire.com/news-release/2019/01/17/1701498/0/en/Aegis-Custody-to-Launch-Digital-Asset-Custody-Service-at-The-North-American-Bitcoin-Conference-CTO-Frank-Fu-to-Speak-on-Main-Stage.html",
//         description: "Aegis Custody, a subsidiary of Aegis Capital Management, today announces that it will launch its digital assets custody solution for U.S. investors at the upcoming North American Bitcoin Conference",
//         site: "Globe News Wire"
//     },
//     {
//         headline: "Aegis Custody Launches With Breakthrough Digital Custody Solution",
//         date: "Jan 10, 2019",
//         link: "https://www.bizjournals.com/sanfrancisco/prnewswire/press_releases/California/2019/01/10/UN19257",
//         description: "Aegis Custody announced the launch of its new hardware-cloud hybrid solution, purpose-built for securely managing institution digital assets",
//         site: "Biz Journals"
//     },

// ]

const NewsStory = styled.div`
  min-width: 30%;
  margin: 25px;
  a {
    color: #ff6a5f;
  }

  @media (max-width: 1000px) {
    min-width: 100%;
    margin: 0 20px 0 0;
  }
`;

const Arrow = styled.div`
  height: 40px;
  min-width: 40px;
  margin: 10px;
  background-image: url(./images/arrowleft.png);
  background-size: contain;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const NewsCont = styled.div`
  min-height: 400px;
  @media (max-width: 1000px) {
    width: calc(100vw-110px);
    margin: 0 40px;
    min-height: 300px;
  }
`;

const ScrollTab = styled.div`
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  width: 100%;
  text-align: center;
  margin: 0 auto;

  @media (max-width: 1000px) {
    display: flex;
    margin: 0 auto;
    justify-content: center;
  }
`;

const NewsSection = styled.div`
  padding: 70px 40px;
  .newsBox {
    max-width: 80%;
    overflow: hidden;
  }
  @media (max-width: 1000px) {
    padding: 120px 0 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      margin-bottom: 40px;
    }
    .newsBox {
      max-width: 100%;
      overflow: visible;
    }
  }
`;

class News extends Component {
  state = {
    doc: null
  };

  componentDidMount() {
    this.loadNews();
  }

  loadNews = () => {
    const apiEndpoint = 'https://aegiscustodywebsite.cdn.prismic.io/api/v2';

    Prismic.api(apiEndpoint).then(api => {
      api
        .query(Prismic.Predicates.at('document.type', 'news'))
        .then(response => {
          const doc = response ? response.results : null;
          this.setState({ doc });
        });
    });
  };

  render() {
    return (
      <NewsSection>
        <h2 style={{ textAlign: 'center' }}>In the Media</h2>
        <div
          className="newsBox"
          style={{
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <a href="#newsstory1">
            <Arrow href="#newsstory5" />
          </a>

          <NewsCont style={{ display: 'flex', overflow: 'scroll' }}>
            {this.state.doc &&
              this.state.doc.map((news, i) => (
                <NewsStory id={'#newsstory' + [i]}>
                  <h3>{news.data.headline[0].text}</h3>
                  <p>{news.data.date[0].text}</p>
                  <a href={news.data.website[0].text}>
                    {news.data.websitedisplay[0].text}
                  </a>
                </NewsStory>
              ))}
          </NewsCont>

          <a href="#newsstory5">
            <Arrow
              href="#newsstory1"
              style={{ backgroundImage: 'url(./images/arrowright.png)' }}
            />
          </a>

          <ScrollTab>Scroll right for more stories</ScrollTab>
        </div>
      </NewsSection>
    );
  }
}
export default News;
